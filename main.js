var roadwaydiv;
var gamerw;
var gamecars;
function init(){
  roadwaydiv = document.getElementById('roadway');
  gamerw = new roadway(4,300);
  gamecars = new Array();
  gamecars.push(new dumbcar(0,0,10));
  
  createroadwaydiv(roadwaydiv,gamerw);
  console.log(gamerw);
  console.log(gamerw.lanes[1]);
  console.log(gamerw.lanes[1][1]);
  update(gamerw,gamecars,roadwaydiv);
  setInterval("update(gamerw,gamecars,roadwaydiv)", 100);
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
