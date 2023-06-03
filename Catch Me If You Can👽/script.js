
// var box = document.getElementById("catch");
var box = document.querySelector("#catch");
var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;
// alert(viewHeight);
// Updates the viewport height and width dynamically
// window.addEventListener("resize", function(event) {
//     viewWidth = window.innerWidth;
//     viewHeight = window.innerHeight;
// });

box.addEventListener("onclick", function(){
    alert("wow....You clicked that !!");
    alert("Congratulations 🎉");
});

box.addEventListener("mouseover", function(event) {
    var boxAttr = box.getBoundingClientRect();
    
    var pos = getNewPosition(boxAttr.width, boxAttr.height);
    
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});


function getNewPosition(boxWidth, boxHeight) {
    
    // The boxWidth and boxHeight are subtracted so that they 
    //would not move out from the right and bottom direction
    var X = Math.floor((Math.random() * viewWidth) + 1 - boxWidth);
    var Y = Math.floor((Math.random() * viewHeight) + 1 - boxHeight);

    // These will satisfy that box does not move go out in the top and left direction
    if(X < 0) X = 0;
    if(Y < 0) Y = 0;
    
    return {x: X, y: Y};
}

function loser(){
    alert("You...such a Loser !!!");
    location.reload();
}
setTimeout(loser,15000);