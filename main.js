x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

function setup(){
    createCanvas(900,600);

}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening pls speak.";
    recognition.start();

}
 recognition.onresult = function(event){
     console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech is recognisized as :"+content;

    if(content == "circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started drawing circle.";
        draw_circle = "set";
    
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started drawing rectangle.";
        draw_rect = "set";
    
    }

 }
 function draw(){
     r = Math.floor(Math.random()*255);
     g = Math.floor(Math.random()*255);
     b = Math.floor(Math.random()*255);
     if(draw_circle == "set"){
         radius = Math.floor(Math.random()*100);
         fill(r,g,b);
         stroke(r,g,b);
         circle(x,y,radius);
         document.getElementById("status").innerHTML = "Circle is drawn"; 
         draw_circle = "";

     }
     if(draw_rect == "set"){
        fill(r,g,b);
        stroke(r,g,b);
        rect(x,y,100,70);
        document.getElementById("status").innerHTML = "rectangle is drawn"; 
        draw_rect = "";
        
    }
 }

 

