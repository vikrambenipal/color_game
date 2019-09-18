var x = Math.floor((Math.random() * 255) + 1);
var y = Math.floor((Math.random() * 255) + 1);
var z = Math.floor((Math.random() * 255) + 1);


numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = colorPicker();
var printColor= document.getElementById("printColor");
var headerBackground = document.querySelector("h1");

var clickMessage = document.getElementById("clickMessage");

var newColors = document.getElementById("newColors");

var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

printColor.textContent = pickedColor;

for(var i = 0; i < squares.length; ++i) {
    //add initial colors
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){


            clickMessage.textContent = "You Win!";
            headerBackground.style.backgroundColor = pickedColor;
            sameColor(clickedColor);
            newColors.textContent = "Play Again?";

        }else{
            this.style.backgroundColor = "#232323";
            clickMessage.textContent = "Try Again.";
        }
    });
}

function sameColor(color) {
    for(var i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = color;
    }
}

function colorPicker() {
    var random = Math.floor((Math.random() * colors.length));
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; ++i){
        arr[i] = colorGenerator();
    }
    return arr;
}

function colorGenerator(){
    var r = Math.floor((Math.random() * 256));
    var g = Math.floor((Math.random() * 256));
    var b = Math.floor((Math.random() * 256));

    return "rgb(" + r + ", " + g + ", " + b + ")";

}

newColors.addEventListener("click", function(){

    colors = generateRandomColors(numberOfSquares);
    pickedColor = colorPicker();
    printColor.textContent = pickedColor;

    for(var i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = colors[i];
        headerBackground.style.backgroundColor = "steelblue";
        clickMessage.textContent = "";
        newColors.textContent = "New Colors";
    }
});

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numberOfSquares = 3;
    headerBackground.style.backgroundColor = "steelblue";
    clickMessage.textContent = "";
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colorPicker();
    printColor.textContent = pickedColor;
    for(var i = 0; i < squares.length; ++i){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }

});

hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numberOfSquares = 6;
    headerBackground.style.backgroundColor = "steelblue";
    clickMessage.textContent = "";
    colors = generateRandomColors(numberOfSquares );
    pickedColor = colorPicker();
    printColor.textContent = pickedColor;
    for(var i = 0; i < squares.length; ++i){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
});




