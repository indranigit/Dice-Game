
var randomNum1= Math.floor(Math.random()*6)+1;
var randomDice= "dice"+randomNum1+".png";
var imagesrc ="images/"+randomDice;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", imagesrc);

var randomNum2= Math.floor(Math.random()*6)+1;
var randomDice2= "dice"+randomNum2+".png";
var imagesrc2 ="images/"+randomDice2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", imagesrc2);

if(randomNum1> randomNum2)
{
 document.querySelector("h1").innerHTML="Player 1 wins!🔥";
}
else if(randomNum1===randomNum2)
{
    document.querySelector("h1").innerHTML="It is a draw!✨";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}