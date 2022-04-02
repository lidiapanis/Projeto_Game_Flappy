window.onload = function() {
    let count = 0;
    var speed = 25;
    var t = Date.now();
    
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    var x = 300;
    var y = 350;
  
       context.beginPath();
       context.arc(x, y, 50, 0, 2 * Math.PI);
       context.fillStyle="black";
       context.fill();
  
       context.beginPath();
       context.font ="25px Arial";
       context.fillStyle = "white";
       context.fillText("Count: "+ count, 20, 30);
  
  
  document.onkeydown = function() {
        
        speed = 50;
        draw()
        count++;
        y -= 50;
            
        };
  
  document.ontouchstart = function() {
        
        speed = 50;
        draw()
        count++;
        y -= 50;
         
        };
        
  function draw(){
       
        var timePassed = Math.round(Date.now() - t) / 1000;
        t = Date.now();
        
        if(y < 350) {
           speed += (500 * timePassed);
           y += Math.round(speed * timePassed);
        }
        
        if(y > 350) {
            count = 0;
            y = 350;
        }
        
        if(y < 50) {
            count = 0;
            y = 50;
        }
        
       context.clearRect(0, 0, 600, 400);
       
       context.beginPath();
       context.arc(x, y, 50, 0, 2 * Math.PI);
       context.fillStyle="pink";
       context.fill();
       
       context.beginPath();
       context.font ="25px Arial";
       context.fillStyle = "white";
       context.fillText("Count: "+ count, 20, 30);
  
  window.requestAnimationFrame(draw);
    
  };
  } 