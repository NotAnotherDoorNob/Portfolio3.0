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




function widthPercentToPixel(perc){
  return ((window.innerWidth * (perc / 100)) -132);
}

function heightPercentToPixel(perc){
  return ((window.innerHeight * (perc / 100)) -69);
}

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
    .to(line, { y: 210, delay: 3.5 , skewY: 7,stagger: {
    amount: 7
    },  onComplete: swapText})
    .to(line, { y: 0, delay: .1, skewY: 0, stagger: {
    amount: 0
  }})
}

window.onload = () => {
	alternateText()
};





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
  attr: { x: 75, y: 120, class: "skill-caption text00" }
});
let text00Content = document.createTextNode('Three core skills');
text00.appendChild(text00Content);

gsap.set(textSide, {
  attr: { x: 775, y: 40, class: "skill-caption-side text00" }
});
let textSideContent = document.createTextNode('(For the price of one 🫨)');
textSide.appendChild(textSideContent);

gsap.set(text01, {
  attr: { x: 150, y: 220, class: "skill-text text01" }
});
let text01Content = document.createTextNode('UX Design');
text01.appendChild(text01Content);

gsap.set(text02, {
  attr: { x: 150, y: 330, class: "skill-text text02" }
});
let text02Content = document.createTextNode('UX Research');
text02.appendChild(text02Content);

gsap.set(text03, {
  attr: { x: 150, y: 440, class: "skill-text text03" }
});
let text03Content = document.createTextNode('UI Development');
text03.appendChild(text03Content);

gsap.set(text04, {
  attr: { x: 0, y: 0, opacity: 0, class: "between-text text04" }
});
let text04Content = document.createTextNode('And everything in between');
text04.appendChild(text04Content);





gsap.set(circleRed, {
  attr: { cx: 100, cy: 200, r: 25, fill: "#FE534C", class: "circle-red" }
});

gsap.set(circleYellow, {
  attr: { cx: 100, cy: 310, r: 25, fill: "#F1C722", class: "circle-yellow" }
});

gsap.set(circleBlue, {
  attr: { cx: 100, cy: 420, r: 25, fill: "#3470FD", class: "circle-blue" }
});


gsap.set(skillImage, {
  attr: { x: 0, y: 320, opacity: 0, height: 200, width: 200,  href: "/images/rainbow-skill.png", class: "skill-image" }
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
  }
});

scene1.to(".circle-red", { x: widthPercentToPixel(50) , y: 80, ease: "power1.in" }, .20)
.to(".circle-red", { scale: 0,  transformOrigin: 'center'})

scene1.to(".circle-yellow", { x: widthPercentToPixel(50) , y: -30, ease: "power1.in" }, .25)
.to(".circle-yellow", { scale: 0,  transformOrigin: 'center'})

scene1.to(".circle-blue", { x: widthPercentToPixel(50) , y: -140, ease: "power1.in" }, .30)
.to(".circle-blue", { scale: 0,  transformOrigin: 'center'})

scene1.to(".text04", { autoAlpha:0, x: widthPercentToPixel(50)-50 , y: heightPercentToPixel(25), ease: "power1.in" }, 0)
.to(".text04", {scale: 3, autoAlpha:1,  transformOrigin: 'center', ease: "power4.inOut" });

scene1.to(".skill-image", { autoAlpha:0, x: widthPercentToPixel(50) , y: -40, ease: "power1.in" }, 0)
.to(".skill-image", {scale: 3.2, autoAlpha:1,  transformOrigin: 'center', ease: "power4.inOut" })


scene1.to(".text00", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .20);
scene1.to(".text01", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .20);
scene1.to(".text02", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .25);
scene1.to(".text03", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .30);











console.log(window.innerWidth)
console.log(heightPercentToPixel(50))