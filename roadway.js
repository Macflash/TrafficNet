//object to hold collision information for a roadway
function roadway(lanes,length){
  this.numLanes = lanes;
  this.length = length;
  this.lanes = new Array(lanes);
  for(i = 0; i < this.numLanes; i++){
    this.lanes[i] = new Array(this.length);
  }
  this.reset = function(){
    this.lanes = new Array(lanes);
    for(i = 0; i < this.numLanes; i++){
      this.lanes[i] = new Array(this.length);
    } 
  }
}

function dumbcar(lane,location,length){
  this.lane = lane;
  this.location = location;
  this.length = length;
  this.speed = 1;
  
  this.draw = function(roadway){
    for(i = 0; i < length; i++){
      var s = this.location + i;
      if(s > roadway.length){
        s = s - roadway.length;
      }
      roadway.lanes[lane][s] = this.speed;
    }
  }
  
  this.drive = function(roadway){
    location = location + speed;
    if(location >= roadway.length){
      location = location - roadway.length;
    }
  }
  
}
