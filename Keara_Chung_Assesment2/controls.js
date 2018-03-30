document.getElementById("color").addEventListener("change", function(){
    document.getElementById("preview").style.backgroundColor = document.getElementById("color").value;
})
  

document.getElementById("number").addEventListener("click", function(){
    
    document.getElementById("slider1").type = "number";
    document.getElementById("slider2").type = "number";
    document.getElementById("slider3").type = "number";
    document.getElementById("slider4").type = "number";
});

document.getElementById("range").addEventListener("click", function(){
   
    document.getElementById("slider1").type = "range";
    document.getElementById("slider2").type = "range";
    document.getElementById("slider3").type = "range";
    document.getElementById("slider4").type = "range";

})
    
document.getElementById("slider1").addEventListener("change", function(){
    document.getElementById("hair").style.width = document.getElementById("slider1").value + "%";
})
document.getElementById("slider2").addEventListener("change", function(){
    document.getElementById("eyes").style.width = document.getElementById("slider2").value + "%";
})
document.getElementById("slider3").addEventListener("change", function(){
    document.getElementById("nose").style.width = document.getElementById("slider3").value + "%";
})
document.getElementById("slider4").addEventListener("change", function(){
    document.getElementById("mouth").style.width = document.getElementById("slider4").value + "%";
})

var switchDisp = document.getElementById("display");
document.getElementById("plus").addEventListener("click", function(){
    createFace();
})

document.getElementById("random").addEventListener("click", function(){
    randomFace();
})

var imgName = 0;
function createFace() {
    
    var newFeat = document.createElement("div");
    var hairImg = document.createElement("img");
    var eyesImg = document.createElement("img");
    var noseImg = document.createElement("img");
    var mouthImg = document.createElement("img");
    switchDisp.appendChild(newFeat);
    imgName++;
    
    newFeat.id = "newface" + imgName;
    
    newFeat.appendChild(hairImg);
    newFeat.appendChild(eyesImg);
    newFeat.appendChild(noseImg);
    newFeat.appendChild(mouthImg);
    
    newFeat.style.display = "inline-block";
    newFeat.style.position = "relative";
    newFeat.style.width = "100px";
    newFeat.style.height = "100px";
    newFeat.style.backgroundColor = document.getElementById("preview").style.backgroundColor;
    
    hairImg.src = document.getElementById("hair").src;
    hairImg.style.width = document.getElementById("slider1").value + "%";
    hairImg.style.top = "0%";
    hairImg.style.left = "0";
    hairImg.style.right = "0";
    hairImg.style.margin = "auto";
    hairImg.style.position = "absolute";
    
    eyesImg.src = document.getElementById("eyes").src;
    eyesImg.style.width = document.getElementById("slider2").value + "%";
    eyesImg.style.top = "40%";
    eyesImg.style.left = "0";
    eyesImg.style.right = "0";
    eyesImg.style.margin = "auto";
    eyesImg.style.position = "absolute";
    
    noseImg.src = document.getElementById("nose").src;
    noseImg.style.width = document.getElementById("slider3").value + "%";
    noseImg.style.top = "54%";
    noseImg.style.left = "0";
    noseImg.style.right = "0";
    noseImg.style.margin = "auto";
    noseImg.style.position = "absolute";
    
    mouthImg.src = document.getElementById("mouth").src;
    mouthImg.style.width = document.getElementById("slider4").value + "%";
    mouthImg.style.top = "75%";
    mouthImg.style.left = "0";
    mouthImg.style.right = "0";
    mouthImg.style.margin = "auto";
    mouthImg.style.position = "absolute";
    
    newFeat.addEventListener("click", function(){
    removeDiv(newFeat.id);
})
}

var makeHair = 3;
var makeEyes = 3;
var makeNose = 3;
var makeMouth = 3;

var r = 255;
var g = 255;
var b = 255;
    
var createH = 70;
var createE = 40;
var createN = 30;
var createM = 35; 

function randomFace() {
    document.getElementById("hair").src = "img/hair" + makeHair + ".png";
    document.getElementById("eyes").src = "img/eyes" + makeEyes + ".png";
    document.getElementById("nose").src = "img/nose" + makeNose + ".png";
    document.getElementById("mouth").src = "img/mouth" + makeMouth + ".png";
      
    document.getElementById("preview").style.backgroundColor = "rgb("+ r +","+ g + ","+ b +")";
    document.getElementById("hair").style.width = createH + "%";
    document.getElementById("eyes").style.width = createE + "%";
    document.getElementById("nose").style.width = createN + "%";
    document.getElementById("mouth").style.width = createM + "%";
    
    makeHair = Math.round (Math.random()*2)+1;
    makeEyes = Math.round (Math.random()*2)+1;
    makeNose = Math.round (Math.random()*2)+1;
    makeMouth = Math.round (Math.random()*2)+1;
    
    r = Math.round (Math.random()*255);
    g = Math.round (Math.random()*255);
    b = Math.round (Math.random()*255);
    
    createH = Math.round (Math.random()*70);
    createE = Math.round (Math.random()*40);
    createN = Math.round (Math.random()*30);
    createM = Math.round (Math.random()*35);
    document.getElementById("slider1").value = createH;
    document.getElementById("slider2").value = createE;
    document.getElementById("slider3").value = createN;
    document.getElementById("slider4").value = createM;
}

function changeType(x) {
    document.getElementById("slider1").type = x;
    document.getElementById("slider2").type = x;
    document.getElementById("slider3").type = x;
    document.getElementById("slider4").type = x;
}

var time1 = null;
var time2 = null;

document.getElementById("auto").addEventListener("click", function(){
    time1 = setInterval(randomFace, 500);
    time2 = setInterval(createFace, 500);
})

document.getElementById("stop").addEventListener("click",function(){
    clearInterval(time1);
    clearInterval(time2);
})

function removeDiv(id){
    document.getElementById(id).remove();
}

