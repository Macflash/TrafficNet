var roadwaydiv;
var gamerw;

function init(){
  roadwaydiv = document.getElementById('roadway');
  var gamerw = new roadway(4,300);
  createroadwaydiv(roadwaydiv,gamerw);
  console.log(roadway.lanes[1][1]);
  update();
  setInterval(update, tstep);
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
