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

gsap.set(line, {
  y: 0, skewY: 0, stagger: {
    amount: 0
  }
})

const alternateText = () => {
  gsap
    .timeline({
    repeat:-1 ,
    delay: .5,
    defaults: { ease: "expo.inOut", duration: 1}
      })
    .add('start')
    .to(line, { y: 210, delay: 4.5 , skewY: 7,stagger: {
    amount: 7
  },  onComplete: onRepeat})
    .to(line, { y: 0, delay: .4, skewY: 0, stagger: {
    amount: 0
  }})
}

window.onload = () => {
	alternateText()
};

function onRepeat() {
    if (count <= 6) {
    count++;
  } else {
    count = 0;
  }
  text.innerHTML = wordArray[count];
};