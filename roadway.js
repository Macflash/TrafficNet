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
  this.speed = 2;
  this.maxspeed = 2;
  
  this.draw = function(roadway){
    for(i = 0; i < length; i++){
      var s = this.location + i;
      if(s > roadway.length){
        s = s - roadway.length;
      }
      roadway.lanes[lane][s] = "dumb";
    }
  }
  
  this.decide = function(roadway){
    //check how far ahead the next car is
  }
  
}

function fastcar(lane,location,length){
  this.lane = lane;
  this.location = location;
  this.length = length;
  this.speed = 2;
  this.maxspeed = 5;
  
  this.draw = function(roadway){
    for(i = 0; i < length; i++){
      var s = this.location + i;
      if(s > roadway.length){
        s = s - roadway.length;
      }
      roadway.lanes[lane][s] = "fast";
    }
  }
  
  this.decide = function(roadway){
    //check how far ahead the next car is
    var gap = getGap(roadway, this.lane, this.location);
    console.log(gap);
    if(gap > this.speed * 10){
      if(this.speed < this.maxspeed){
        this.speed++;
      }
    }
    else{
      if(gap < this.speed * 2){
        this.speed--;
      }
    }
  }
}

function getGap(road,lane,location){
  var r = location - 1;
  var l = road.lanes[lane];
  var gap = 0;
  while(typeof l[r] == 'undefined'){
    r--;
    gap++;
    if(r < 0){
      r += road.length;
    }
  }
  return gap;
}
