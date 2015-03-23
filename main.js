var roadwaydiv;
var gamerw;
var gamecars;

function init(){
  roadwaydiv = document.getElementById('roadway');
  gamerw = new roadway(4,300);
  gamecars = new Array();
  gamecars.push(new dumbcar(1,20,15));
  gamecars.push(new dumbcar(0,50,15));
  gamecars.push(new dumbcar(3,100,15));
  gamecars.push(new dumbcar(1,60,20));
  gamecars.push(new dumbcar(4,200,40));
  
  console.log(gamecars);
  
  createroadwaydiv(roadwaydiv,gamerw);
  
  //console.log(gamerw);
  //console.log(gamerw.lanes[1]);
  //console.log(gamerw.lanes[1][1]);
  
  //console.log(getTile(1,1));
  
  update(gamerw,gamecars,roadwaydiv);
  setInterval("update(gamerw,gamecars,roadwaydiv)", 50);
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
        newtile.setAttribute('id', 'r' + row + 'l' + lane);
        newdiv.appendChild(newtile);
      }
      rdiv.appendChild(newdiv);
  }
}

function getTile(row,lane){
  var tile = document.getElementById('r' + row + 'l' + lane);
  return tile;
}

function displayroadway(rdiv,rway){
  for(r = 0; r < rway.length; r++){
    for(l = 0; l < rway.numLanes; l++){
      var tile = getTile(r,l);
      if(typeof rway.lanes[l][r] != 'undefined'){
        tile.style.background = "blue";
      }
      else{
        tile.style.background = "grey";
      }
    }
  }
}
