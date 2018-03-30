/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

var Inum = 1;

document.getElementById("hair").addEventListener("click", function(){
    Inum = Inum + 1;
    document.getElementById("hair").src = "img/hair" + Inum + ".png";
    if (Inum >= 3){
        Inum = 0;
    }
})
document.getElementById("eyes").addEventListener("click", function(){
    Inum = Inum + 1;
    document.getElementById("eyes").src = "img/eyes" + Inum + ".png";
    if (Inum >= 3){
        Inum = 0;
    }
})
document.getElementById("nose").addEventListener("click", function(){
    Inum = Inum + 1;
    document.getElementById("nose").src = "img/nose" + Inum + ".png";
    if (Inum >= 3){
        Inum = 0;
    }
})
document.getElementById("mouth").addEventListener("click", function(){
    Inum = Inum + 1;
    document.getElementById("mouth").src = "img/mouth" + Inum + ".png";
    if (Inum >= 3){
        Inum = 0;
    }
})