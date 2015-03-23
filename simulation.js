function update(road,cars,roaddiv){
  //clear roadway
  road.reset();
  
  //draw cars
  drawCars(cars, road);
  
  //car decisions
  decideCars(cars, road);
  
  //car movement
  moveCars(cars, road);
  
  //check for collisions?
  
  //display roadway
  displayroadway(roaddiv, road);
}

function drawCars(cars,rw){
  for(k=0;k<cars.length;k++){
    var type = cars[k].type;
    
    for(i = 0; i < length; i++){
      var s = this.location + i;
      if(s >= roadway.length){
        s = s - roadway.length;
      }
      roadway.lanes[this.lane][s] = type;
    }
  }
}

function decideCars(cars,rw){
  for(k=0;k<cars.length;k++){
    cars[k].decide(rw);
  }
}

function moveCars(cars,rw){
  for(i=0;i<cars.length;i++){
    cars[i].location = cars[i].location - cars[i].speed;
    if(cars[i].location < 0){
      cars[i].location = cars[i].location + rw.length;
    }
    else if(cars[i].location >= rw.length){
      cars[i].location = cars[i].location - rw.length;
    }
  }
}

