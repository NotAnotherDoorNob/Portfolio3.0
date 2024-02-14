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


let scene = gsap.timeline();
let speed = 200;

// SCROLL TRIGGERS
// --------------------------------------------------------
ScrollTrigger.create({
  animation: scene,
  trigger: ".space-holder",
  start: "top top",
  end: "100% 100%",
  scrub: 2,
});

// SCENE


scene.to(".svg01", { y: 60, ease: "power1.in" }, 0);



