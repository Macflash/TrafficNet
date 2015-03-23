var gamecars = new Array();
gamecars.push(new dumbcar(0,0,10));

function update(){
  //clear roadway
  gamerw.reset();
  
  //draw cars
  drawCars(gamecars, gamerw);
  
  //car decisions
  
  //car movement
  moveCars(gamecars, gamerw);
  
  //check for collisions?
  
  //display roadway
  displayroadway(roadwaydiv, gamerw);
}

function drawCars(cars,rw){
  for(i=0;<cars.length;i++){
    cars[i].draw(rw);
  }
}

function moveCars(cars,rw){
  for(i=0;i<cars.length;i++){
    cars[i].location = cars[i].location + cars[i].speed;
    if(cars[i].location >= rw.length){
      cars[i].location = cars[i].location - rw.length;
    }
  }
}

