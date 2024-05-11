//loading the csv with covid-19 data/////////////////////////////////////////////////////////////////////////////////////
let covidData;
function preload() {
    let url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
    covidData = loadTable(url, 'csv', 'header');

    //Adds info to the page html
    var covidTotal = document.getElementById("covidTotal");
    var countryName = document.getElementById("countryName");
    var DOCworldTotal = document.getElementById("DOCworldTotal");
    var updateDate = document.getElementById("update");
    updateDate.innerHTML = yesterdayDate;
    console.log(covidData);
}







// mappa.js setup copied from the mappa website////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
const options = {
    lat: 0,
    lng: 0,
    zoom: 1.5,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  }







//This is to get a date string to later call the column with yesterday's date///////////////////////////////////////////////////////
var dateObj = new Date(); 
  
// subtract one day from current time                           
 dateObj.setDate(dateObj.getDate() - 1);  

let myDay = dateObj.getDate();
let myMonth = dateObj.getMonth() + 1;
let yesterdayDate = "3/9/23";






// This function draws the ellipses for each country/////////////////////////////////////////////////////////////////////////////
function drawPoints(){



  
    for (i = 0; i <= data.length; i++){
      if(data[i]){

      //converts lat and lon to pixel coords
      let pix = myMap.latLngToPixel(data[i].lat, data[i].lon);// pix is a an object - pix.x = lat and pix.y = lon
      //add pixel coords to the data obj for later use 
      data[i].pixCoordx = pix.x;
      data[i].pixCoordy = pix.y;

      
      //sets diameter relative to the covid count
      let diameter = (sqrt(data[i].covidCount) /200) * myMap.zoom();//circle's diameter scale with the zoom of the map
      //adds diamete to the data obj for later use
      data[i].diameter = diameter;
      


        //if contains() is true, draw the elipse darker and display the covid total and corresponding country name
      if (contains(data[i].pixCoordx, data[i].pixCoordy, data[i].diameter)){
        fill('rgba(196, 35, 35, .8)');
        stroke(75);
        ellipse(pix.x, pix.y, diameter);
        covidTotal.innerHTML = formatNumber(data[i].covidCount);
        countryName.innerHTML = data[i].country;
        console.log(data[i].covidCount)
      } else {
        fill('rgba(196, 35, 35, 0.5)');
        stroke(75);
        ellipse(pix.x, pix.y, diameter);
      }
      }
    }
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//if the mouse is in the ellipse, return true, else return false
//px = data[i].pixCoordx, py = data[i].pixCoordy, pd = data[i].diameter

function contains(px, py, pd){
  let d = dist(mouseX, mouseY, px, py); // this is the built in p5 dist()
  if(d < (pd / 2)){ // radius
      return true ;
  } else {
      return false;
  }
}



function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let data = [];
let worldTotalArray = [];

let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let canvasWidth

if (vw > 1000) {
  canvasWidth = (vw / 2.2)
} else {
  canvasWidth = (vw - 60)
}

function setup(){

  canvas = createCanvas((canvasWidth),550); 
  canvas.parent('sketch-holder');

  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);// overlays canvas on the map
  
  for (let row of covidData.rows){
    let country = (row.get('Country/Region')) + " " + (row.get('Province/State'));
    let lat = Number(row.get('Lat'));
    let lon = Number(row.get('Long'));
    let covidCount = Number(row.get(yesterdayDate)); //grabs the column with yesterday's date

    worldTotalArray.push(covidCount);

    //"enhanced object literal"- pushes new objects based on the previous variables into the data array
    data.push({
      country,
      lat,
      lon,
      covidCount
    })
  }

var worldTotal = worldTotalArray.reduce(function(a, b){
    return a + b;
}, 0);
console.log(formatNumber(worldTotal));
DOCworldTotal.innerHTML = (formatNumber(worldTotal));
}



function draw(){
  clear();
  drawPoints();
  

}