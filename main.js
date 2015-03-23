var roadwaydiv;
var rw = roadway(3,10);
var dcar = dumbcar(1,50,10);

function init(){
  roadwaydiv = document.getElementById('roadway');
  dcar.draw(rw);
  createroadwaydiv(roadwaydiv,rw);
} 

function createroadwaydiv(rdiv,rway){
  
  for(row = 0; row < rway.length; row++){
      //add a row div
      var newdiv = document.createElement("div");
      newdiv.style.class = "tilemarker";
      rdiv.appendChild(newdiv);
      for(lane = 0; lane < rway.numLanes; lane++){
      //add some lane-marker divs
      
      
    }
  }
}

function displayroadway(rdiv,rway){
  
}
