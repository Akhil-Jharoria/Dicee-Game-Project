//  For Dicee One

var number1= Math.random();
      number1=number1*6+1;
      number1=Math.floor(number1);
var  randomdiceeimage ="dice" + number1  + ".png";  //creating the string like dice1.png
var randomimagesource = "images/"+randomdiceeimage;   //creating the source  
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


// for Dicee Two

var number2=Math.random();
number2=number2*6+1;
number2=Math.floor(number2);

var randomdiceeimage2 = "dice"+number2+".png";
var randomdiceesource2 = "images/"+randomdiceeimage2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceesource2);


if(number1==number2)
{
    var heading = document.querySelector("h1");
    heading.innerHTML="Draw";
}
else if(number1>number2)
{
    var heading = document.querySelector("h1");
    heading.innerHTML="🚩Player 1 won!";
}
else
{
    var heading = document.querySelector("h1");
    heading.innerHTML="Player 2 won!🚩";
}
