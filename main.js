var roadwaydiv;

function init(){
  roadwaydiv = document.getElementById('roadway');
  var rw = new roadway(4,100);
  console.log(rw);
  console.log(rw.length);
  createroadwaydiv(roadwaydiv,rw);
} 

function createroadwaydiv(rdiv,rway){
  for(row = 0; row < rway.length; row++){
      //add a row div
      var newdiv = document.createElement("div");
      newdiv.setAttribute('class', 'rowmarker');
      for(lane = 0; lane < rway.numLanes; lane++){
      //add some lane-marker divs
        var newtile = document.createElement("div");
        newtile.setAttribute('class', 'tilemarker');
        newdiv.appendChild(newtile);
      }
      rdiv.appendChild(newdiv);
  }
}

function displayroadway(rdiv,rway){
  
}
