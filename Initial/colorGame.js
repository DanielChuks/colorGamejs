// hard coded array of six color
var colors = [
   "rgb(255, 0, 0)",
   "rgb(255, 255, 0)",
   "rgb(0, 255, 0)",
   "rgb(0, 255, 255)",
   "rgb(0, 0, 255)",
   "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var colorPick = pickColor();

colorDisplay.textContent = colorPick;

for ( var i = 0; i < squares.length; i++){
   // Add initial colors to the squares 
   squares[i].style.background = colors[i];

   // Add click listeners to square
   squares[i].addEventListener("click", function(){
      // grab color of click square
      var clickedColor = this.style.background;
      // compare click color with picked color
      console.log(clickedColor, colorPick);//debugging 
      if ( clickedColor === colorPick ) {
         //alert("Correct!");
         messageDisplay.textContent = "Correct!";
         ChangeColor(clickedColor);
      }
      else {
         this.style.background = "#232323";
         messageDisplay.textContent = "Try Again";
      }
   });
}


function ChangeColor(color){
   //loop through the squares
   for ( var i = 0; i < squares.length; i++){
      // change each color to match clicked color
      squares[i].style.background = color;
   }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}