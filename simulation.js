var gamecars = new Array();
gamecars.push(new dumbcar(0,0,10));

function update(){
  //clear roadway
  gamerw.reset();
  
  //draw cars
  drawCars(gamecars, gamerw);
  
  //car decisions
  
  //car movement
  
  //check for collisions?
  
}

function drawCars(cars,rw){
  for(i=0;<cars.length;i++){
    cars[i].draw(rw);
  }
}
