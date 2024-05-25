function setup() {
    createCanvas(600, 600);
    background("Black")
  }
  
  function draw() {
    
    stroke("blue");
    fill("red");
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
    rect(mouseX, mouseY, 30, 35);
    }
  }