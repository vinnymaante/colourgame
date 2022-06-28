const squares = document.querySelectorAll('.square');
const answerDisplay = document.querySelector('.correct');
const colourDisplay = document.querySelector('h1');
const button = document.querySelector('button');
let colours = [];
GenerateRndomColour();
assign_colours ();
Chckcolour ();
getRndomPckedcolour ();
function GenerateRndomColour() {
  for (let i = 0; i < squares.length; i++) {
    colours.push(
      `rgb(${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)})`
      );
  }
}
function assign_colours () {
  colours.forEach((colour, index)=> {
 squares[index]. style. background = colour;
 squares[index]. setAttribute ("data-colour", colour);
  });
  }
function getRndomPckedcolour() {
  const randomcolour = colours [Math.floor(Math. random() * colours. length)];
  colourDisplay.textContent = randomcolour;
  return randomcolour;
}
let PckedColour = getRndomPckedcolour();
function Chckcolour(){
  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      if (e.target.dataset.colour === PckedColour){
        answerDisplay.textContent = "Correct";  
        h1.style.background = PckedColour; 
    }
      else {
        answerDisplay. textContent = "wrong";
        e.target.classList.add("fade");
        h1.style.background = PckedColour;
    }
});
  });
}
let pckedColour = getRndomPckedcolour ();
function reset () {
  colours = [];
  GenerateRndomColour () ;
  squares.forEach((squares) => squares.classList.remove ("fade"));
  assign_colours () ;
  Chckcolour () ;
  getRndomPckedcolour ();
  pckedColour = getRndomPckedcolour() ;
}
button.addEventListener ("click", reset);