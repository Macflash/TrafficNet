var roadwaydiv;
var rw = roadway(3,10);


function init(){
  roadwaydiv = document.getElementById('roadway');
 createroadwaydiv(roadwaydiv,rw);
} 

function createroadwaydiv(rdiv,rway){
  
  for(row = 0; row < rway.length; row++){
      //add a row div
      var newdiv = document.createElement("div");
      newdiv.style.class = "rowmarker";
      for(lane = 0; lane < rway.numLanes; lane++){
      //add some lane-marker divs
        var newtile = document.createElement("div");
        newtile.style.class = "tilemarker";
        newdiv.appendChild(newtile);
      }
      rdiv.appendChild(newdiv);
  }
}

function displayroadway(rdiv,rway){
  
}
