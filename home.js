

/////////////////////////////////////////////////////alternate text animation

gsap.registerPlugin(ScrollTrigger);

const line = '.line';
let count = 0;
const text = document.getElementById("text");
const wordArray = [
  "UX Designer",
  "UX Researcher",
  "UI Developer",
  "Font Nerd",
  "D&D Enthusiast",
  "Daft Punk Fan",
  "Amature Baker",
  "Human Person"
];




function swapText() {
  if (count <= 6) {
  count++;
} else {
  count = 0;
}
text.innerHTML = wordArray[count];
};


//  set line animations to a baseline
gsap.set(line, {
  y: 0, skewY: 0, stagger: {
    amount: 0
  }
})


//alternate text funtion
const alternateText = () => {
  gsap.timeline({
    repeat:-1 ,
    delay: 0,
    defaults: { ease: "expo.inOut", duration: 1.3}
  })
    .add('start')
    .to(line, { y: 210, delay: 2 , skewY: 7,stagger: {
    amount: 7
    },  onComplete: swapText})
    .to(line, { y: 0, delay: .1, skewY: 0, stagger: {
    amount: 0
  }})
}


/////////////////////////////////////////////////////skill scroll animation

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function widthPercentToPixel(perc){
  return ((windowWidth * (perc / 100)) -132);
}

function heightPercentToPixel(perc){
  return ((windowHeight * (perc / 100)) -69);
}



//  let testAttirbute = windowWidth > 1200  ? (windowWidth - 600)
//  : windowWidth < 1200  ? (windowWidth - 500)
//  : windowWidth < 1000 ? (windowWidth - 400)
//  : windowWidth < 800 ? -1600
//  : -600;


 let testAttirbute = 
  windowWidth > 1200  ? 'greater than 1200'
 : windowWidth > 1000 ? 'greater than 1000'
 : windowWidth > 800 ? 'greater than 800'
 : 'else';

let textSidex = windowWidth > 1200  ? (windowWidth - 600) : -600;

let skillTextSize = windowWidth > 1200  ? "skill-text-1200" : "skill-text-600";

let skillTextx = windowWidth > 500  ? 150 : 75;
let circlex = windowWidth > 500  ? 100 : 40;
let circler = windowWidth > 500  ? 25 : 18;

let text00x = windowWidth > 500  ? 75 : 25;
let text00y = windowWidth > 500  ? 120 : 180;
let text01y = windowWidth > 500  ? 220 : 245;
let text02y = windowWidth > 500  ? 330 : 330;
let text03y = windowWidth > 500  ? 440 : 415;

let circleRedy = windowWidth > 500  ? 200 : 235;
let circleYellowy = windowWidth > 500  ? 310 : 320;
let circleBluey = windowWidth > 500  ? 420 : 405;




const skillContainer = document.getElementById("skill-container");
const svgns = "http://www.w3.org/2000/svg";



// make sn svg
let text00 = document.createElementNS(svgns, "text");
let textSide = document.createElementNS(svgns, "text");
let text01 = document.createElementNS(svgns, "text");
let text02 = document.createElementNS(svgns, "text");
let text03 = document.createElementNS(svgns, "text");
let text04 = document.createElementNS(svgns, "text");

let circleRed = document.createElementNS(svgns, "circle");
let circleYellow = document.createElementNS(svgns, "circle");
let circleBlue = document.createElementNS(svgns, "circle");

let skillImage = document.createElementNS(svgns, "image");



// set attributes 
gsap.set(text00, {
  attr: { x: text00x, y: text00y, class: "skill-caption text00" }
});
let text00Content = document.createTextNode('Three core skills');
text00.appendChild(text00Content);

gsap.set(textSide, {
  attr: { x: textSidex, y: 40, class: "skill-caption-side text00" }
});
let textSideContent = document.createTextNode('(For the price of one 🫨)');
textSide.appendChild(textSideContent);

gsap.set(text01, {
  attr: { x: skillTextx, y: text01y,  class:  `${skillTextSize} text01`}
});
let text01Content = document.createTextNode('UX Design');
text01.appendChild(text01Content);

gsap.set(text02, {
  attr: { x: skillTextx, y: text02y, class: `${skillTextSize} text02` }
});
let text02Content = document.createTextNode('UX Research');
text02.appendChild(text02Content);

gsap.set(text03, {
  attr: { x: skillTextx, y: text03y, class: `${skillTextSize} text03` }
});
let text03Content = document.createTextNode('UI Development');
text03.appendChild(text03Content);

gsap.set(text04, {
  attr: { x: 0, y: 0, opacity: 0, class: "between-text text04" }
});
let text04Content = document.createTextNode('And everything in between');
text04.appendChild(text04Content);





gsap.set(circleRed, {
  attr: { cx: circlex, cy: circleRedy, r: circler, fill: "#FE534C", class: "circle-red" }
});

gsap.set(circleYellow, {
  attr: { cx: circlex, cy: circleYellowy, r: circler, fill: "#F1C722", class: "circle-yellow" }
});

gsap.set(circleBlue, {
  attr: { cx: circlex, cy: circleBluey, r: circler, fill: "#3470FD", class: "circle-blue" }
});


gsap.set(skillImage, {
  attr: { x: 0, y: 320, opacity: 0, height: 100, width: 100,  href: "/images/rainbow-skill.png", class: "skill-image" }
});


// append the new rectangle to the svg
skillContainer.appendChild(text00);
skillContainer.appendChild(textSide);
skillContainer.appendChild(text01);
skillContainer.appendChild(text02);
skillContainer.appendChild(text03);
skillContainer.appendChild(text04);

skillContainer.appendChild(circleRed);
skillContainer.appendChild(circleYellow);
skillContainer.appendChild(circleBlue);

skillContainer.appendChild(skillImage);




// Scroll trigger
// --------------------------------------------------------


let scene1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#skill-container",
    scrub: 1.2,
    pin: true,
    start: "-69 top",
    end: () => "bottom +69",
    toggleClass: "active",
    delay: 0,
    ease: "power2",
    markers: true
  }
});

let circlexTo = windowWidth > 500  ? widthPercentToPixel(50) : (windowWidth / 2.8) ;
let circleRedyTo = windowWidth > 500  ? 80 : 60;
let circleBlueTo = windowWidth > 500  ? -140 : -115;

let skillImageScale = windowWidth > 1000  ? ((windowWidth * .005))  : ((windowWidth * .008));
let skillImagex = windowWidth > 600  ? ((windowWidth * .5)-75) : ((windowWidth * .5)-62.5);
let skillImagey = windowWidth > 700  ? windowHeight * .05 : ((windowHeight * .05) - 69);


let skillBetweenScale = windowWidth > 1000  ? ((windowWidth * .02))  : ((windowWidth * .025));
let skillBetweenx = windowWidth > 600  ? ((windowWidth * .5)-50) : ((windowWidth * .5)-26);
let skillBetweeny = windowWidth > 700  ? windowHeight * .14 : 
windowWidth > 440  ? (windowHeight * .2) : (windowHeight * .25);


scene1.to(".circle-red", { x: circlexTo , y: circleRedyTo, ease: "power1.in" }, .20)
.to(".circle-red", { scale: 0,  transformOrigin: 'center'})

scene1.to(".circle-yellow", { x: circlexTo , y: -30, ease: "power1.in" }, .25)
.to(".circle-yellow", { scale: 0,  transformOrigin: 'center'})

scene1.to(".circle-blue", { x: circlexTo , y: circleBlueTo, ease: "power1.in" }, .30)
.to(".circle-blue", { scale: 0,  transformOrigin: 'center'})

scene1.to(".text04", { autoAlpha:0, x: skillBetweenx , y: skillBetweeny, ease: "power1.in" }, 0)
.to(".text04", {scale: skillBetweenScale, autoAlpha:1,  transformOrigin: 'center', ease: "power4.inOut" });

scene1.to(".skill-image", { autoAlpha:0, x: skillImagex , y: skillImagey, ease: "power1.in" }, 0)
.to(".skill-image", {scale: skillImageScale, autoAlpha:1,  transformOrigin: 'center', ease: "power4.inOut" })


scene1.to(".text00", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .20);
scene1.to(".text01", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .20);
scene1.to(".text02", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .25);
scene1.to(".text03", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .30);








window.onload = () => {
	alternateText();
  console.log(windowWidth);
  console.log(testAttirbute);
};




