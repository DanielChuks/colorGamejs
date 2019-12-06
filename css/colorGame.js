// hard coded array of six color
var numMode = 6;
var colors = generatrRandomColor(numMode);

var colorPicked = pickColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

resetButton.addEventListener("click", function(){
   // Generate new colors
   colors = generatrRandomColor(numMode);
   // pick a new random color from array
   colorPicked = pickColor();
   //change colorDisplay to match picked color
   colorDisplay.textContent = colorPicked;
   //change the colors of the squares
   for (var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
   }
   // To change the background of h1 when the reset button is pressed
   h1.style.background = "steelblue";
   // Update the message display
   messageDisplay.textContent = "";
   this.textContent = "New Colors"
});

easyBtn.addEventListener("click", function(){
   easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
   // generate color
   numMode = 3; 
   colors = generatrRandomColor(numMode);
   // Pick a new color 
   colorPicked = pickColor();
   // Display the color pick 
   colorDisplay.textContent = colorPicked;
   for (var i = 0; i < squares.length; i++){
      if (colors[i]){
         squares[i].style.background = colors[i];
      }else {
         squares[i].style.display = "none";
      }
   }
});

hardBtn.addEventListener("click", function(){
   hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
   numMode = 6;
   colors = generatrRandomColor(numMode);
   // Pick a new color 
   colorPicked = pickColor();
   // Display the color pick 
   colorDisplay.textContent = colorPicked;
   for (var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block"; // To display the 6 squares
   }

});

colorDisplay.textContent = colorPicked;

for ( var i = 0; i < squares.length; i++){
   // Add initial colors to the squares 
   squares[i].style.background = colors[i];
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