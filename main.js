var roadwaydiv;
var rw = roadway(3,100);
var dcar = dumbcar(1,50,10);

function init(){
  roadwaydiv = document.getElementById('roadway');
  dcar.draw(rw);
  
} 

function createroadwaydiv(rdiv,rway){
  for(lane = 0; lane < rway.numLanes; lane++){
    for(row = 0; row < rway.length; row++){
      //add a row div
      //add some lane-marker divs
    }
  }
}

function displayroadway(rdiv,rway){
  
}
