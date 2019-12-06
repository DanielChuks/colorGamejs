// hard coded array of six color
var numMode = 6;
var colors = [];
var colorPicked; 

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
   setUpModeButtons();
   setUpSquares();
   reset();
}

function setUpModeButtons(){
   // mode buttons event listeners 
   for ( var i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function(){
         modeButtons[0].classList.remove("selected");
         modeButtons[1].classList.remove("selected");
         this.classList.add("selected");
   
         this.textContent === "Easy" ? numMode = 3 : numMode = 6;
         reset();
      }); 
   }
}

function setUpSquares(){
   
   for ( var i = 0; i < squares.length; i++){
      // Add click listeners to square
      squares[i].addEventListener("click", function(){
         // grab color of click square
         var clickedColor = this.style.background;
         // compare click color with picked color
         console.log(clickedColor, colorPicked);//debugging 
         if ( clickedColor === colorPicked ) {
            //alert("Correct!");
            messageDisplay.textContent = "Correct!";
            ChangeColor(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?"
         }
         else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
         }
      });
   }
}

function reset(){
   colors = generatrRandomColor(numMode);
   // pick a new random color from array
   colorPicked = pickColor();
   //change colorDisplay to match picked color
   colorDisplay.textContent = colorPicked;
   //change the colors of the squares
   for (var i = 0; i < squares.length; i++){
      if (colors[i]){
         squares[i].style.display = "block";
         squares[i].style.background = colors[i];
      }else {
         squares[i].style.display = "none"
      }
   }
   // To change the background of h1 when the reset button is pressed
   h1.style.background = "steelblue";
   // Update the message display
   messageDisplay.textContent = "";
   resetButton.textContent = "New Colors"
}

resetButton.addEventListener("click", function(){
   reset();
});


function ChangeColor(color){
   //loop through the squares
   for ( var i = 0; i < squares.length; i++ ){
      // change each coloe to match clicked color
      squares[i].style.background = color;
   }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generatrRandomColor(num){
   // make an arr
   var arr = [];
   // repeat to a num times
   for ( var i = 0; i < num; i++){
      // get random color and push into arr
      arr.push(randomColor());   
   }
   // return arr (This error held me back for some days)
   return arr;
}

function randomColor(){
   //pick a "red" 0 - 255
   var r = Math.floor(Math.random() * 256);
   //pick a "green" 0 - 255
   var g = Math.floor(Math.random() * 256);
   //pick a "blue" 0 - 255
   var b = Math.floor(Math.random() * 256);
   //mind the spacing else you will get a logic error it has to do with comparing things
   return "rgb(" + r + ", " + g + ", " + b + ")";  
}