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
      roadway.lanes[this.lane][s] = "dumb";
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
      roadway.lanes[this.lane][s] = "fast";
    }
  }
  
  this.decide = function(roadway){
    //check how far ahead the next car is
    var gap = getGap(roadway, this.lane, this.location);
    if(gap > this.speed * 10){
      if(this.speed < this.maxspeed){
        this.speed++;
      }
    }
    else{
      if(gap < this.speed * 5 && this.speed < this.maxspeed){
        //check other lanes to see if no collision!
        var lgap = getGap(roadway,this.lane - 1, this.location + this.length);
        var rgap = getGap(roadway,this.lane + 1, this.location + this.length);
        console.log(lgap);
        console.log(rgap);
        if (lgap >= rgap){
          if(lgap > this.length){
            //change lanes!
            this.lane--;
          }
        }
        else {
          if(rgap > this.length){
            //change lanes!
            this.lane++;
          }
        }
      }
      if(gap < this.speed * 2 && this.speed > 0){
        this.speed--;
      }
    }
  }
}

function getGap(road,lane,location){
  if(lane < 0){ return 0; }
  if(lane >= roadway.numLanes){ return 0; }
  var r = location - 1;
  var l = road.lanes[lane];
  var gap = 0;
  console.log(l);
  while(typeof l[r] == 'undefined'){
    r--;
    gap++;
    if(r < 0){
      r += road.length;
    }
  }
  return gap;
}
