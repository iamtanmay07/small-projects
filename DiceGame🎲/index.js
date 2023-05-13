var name1 = prompt("Enter player 1 name : ");
var p1 = document.querySelectorAll("p")[0];
p1.textContent = name1;

var name2 = prompt("Enter player 2 name : ");
var p2 = document.querySelectorAll("p")[1];
p2.textContent = name2;

var num1 = Math.floor(Math.random()*6)+1;
var imgsrc = "./images/dice"+num1+".png";
var image = document.querySelectorAll("img")[0];
image.setAttribute("src",imgsrc);

var num2 = Math.floor(Math.random()*6)+1;
var imgsr = "./images/dice"+num2+".png";
var imag = document.querySelectorAll("img")[1];
imag.setAttribute("src",imgsr);

if(num1 > num2) document.querySelector("h1").textContent = name1 + " is winner🎉";
else if(num2 > num1) document.querySelector("h1").textContent = name2 + " is winner🎉"; 
else document.querySelector("h1").textContent = " match is draw 🎉";