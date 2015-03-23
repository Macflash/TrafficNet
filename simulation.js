function update(road,cars,roaddiv){
  //clear roadway
  road.reset();
  
  //draw cars
  drawCars(cars, road);
  
  //car decisions
  
  //car movement
  moveCars(cars, road);
  
  //check for collisions?
  
  //display roadway
  displayroadway(roaddiv, road);
}

function drawCars(cars,rw){
  for(i=0;i<cars.length;i++){
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

