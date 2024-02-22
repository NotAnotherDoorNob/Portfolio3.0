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






let speed = 200;

// Scroll trigger
// --------------------------------------------------------


let scene1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".skill-container",
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

scene1.to(".circle-red", { x: widthPercentToPixel(50) , y: 80, ease: "power1.in" }, .20)
.to(".circle-red", { scale: 0,  transformOrigin: 'center'})

scene1.to(".circle-yellow", { x: widthPercentToPixel(50) , y: -30, ease: "power1.in" }, .25)
.to(".circle-yellow", { scale: 0,  transformOrigin: 'center'})

scene1.to(".circle-blue", { x: widthPercentToPixel(50) , y: -140, ease: "power1.in" }, .30)
.to(".circle-blue", { scale: 0,  transformOrigin: 'center'})

scene1.to(".text04", { autoAlpha:0, x: widthPercentToPixel(50)-50 , y: heightPercentToPixel(25), ease: "power1.in" }, 0)
.to(".text04", {scale: 3, autoAlpha:1,  transformOrigin: 'center', ease: "power4.inOut" });

scene1.to(".circle-purple", { autoAlpha:0, x: widthPercentToPixel(50) , y: -40, ease: "power1.in" }, 0)
.to(".circle-purple", {scale: 3.2, autoAlpha:1,  transformOrigin: 'center', ease: "power4.inOut" })


scene1.to(".text00", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .20);
scene1.to(".text01", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .20);
scene1.to(".text02", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .25);
scene1.to(".text03", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .30);



// let scene2 = gsap.timeline({
//   scrollTrigger: {
//   trigger: "#skill-container",
//   scrub: 1.5,
//   pin: true,
//   start: "-69 top",
//   end: "+=900",
//   delay: 0,
//   markers: true
// }
// });

// scene2.to(".circle-red", {scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" })
// scene2.to(".circle-yellow", {scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" });
// scene2.to(".circle-blue", {scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" });


//let scene = gsap.timeline();

// ScrollTrigger.create({
//   animation: scene,
//   trigger: "#skill-container",
//   scrub: 1.5,
//   pin: true,
//   start: "-69 top",
//   end: "+=1000",
//   toggleClass: "active",
//   delay: 0,
//   ease: "power2",
//   markers: true
// });


// scene.to(".circle-red", { x: percentToPixel(50) , y: 300, ease: "power1.in" }, .25)
// scene.to(".circle-yellow", { x: percentToPixel(50) , y: 190, ease: "power1.in" }, .30);
// scene.to(".circle-blue", { x: percentToPixel(50) , y: 80, ease: "power1.in" }, .35);

// scene.to(".text01", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .25);
// scene.to(".text02", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .30);
// scene.to(".text03", { scale: .1, autoAlpha:0, transformOrigin: 'center', ease: "power4.inOut" }, .35);









console.log(window.innerWidth)
console.log(heightPercentToPixel(50))