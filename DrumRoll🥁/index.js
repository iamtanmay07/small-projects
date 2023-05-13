// document.querySelector("button").addEventListener("click",handleClick);
// another way is we use ANONYMOUS function 

// document.querySelector("button").addEventListener("click",
// function() {
//     alert("i got clicked !!");

    // what to do when button got clicked ! 
// });

/*
second parameter of the eventListner is usually js function 
we are passing handleClick, not handleClick() as hame chahiye ki 
click hone par hi function kaam kare naa ki eventListner call hone pe

function handleClick(){
    alert("i got clicked !!");
}
*/

var size = document.querySelectorAll("button").length;

// detecting Button press

for(var i = 0; i < size; i++){
    var cb = document.querySelectorAll("button")[i];
    cb.addEventListener("click",function(){
        // alert("i got clicked !!");
        // var audio = new Audio('./sounds/tom-1.mp3');
        // audio.play();
        // this.style.color = "white";

        var butt = this.innerHTML;
        sound(butt);
        buttonAnimation(butt);
    }) 
}

// detecting keyboard press 
document.addEventListener("keypress",function(event){
    sound(event.key);
    buttonAnimation(event.key);
})

function sound(butt){
    switch (butt) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
    
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play(); 
            break;
        
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
    
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        
        default: console.log(butt);
    }
}


function buttonAnimation(key){
    var curr = document.querySelector("."+key);    // concating "." because we want to access that class
    curr.classList.add("pressed");

    setTimeout(function() {
        curr.classList.remove("pressed");
    }, 100);
}