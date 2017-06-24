var roadwaydiv;
var overlaydiv;
var gamerw;
var gamecars;

function init() {
    roadwaydiv = document.getElementById('roadway');
    overlaydiv = document.getElementById('overlay');
    gamerw = new roadway(5, 400);
    gamecars = new Array();


    gamecars.push(new fastcar(1, 0, 15));
    gamecars.push(new fastcar(1, 60, 20));
    gamecars.push(new dumbcar(1, 90, 15));
    gamecars.push(new fastcar(1, 160, 20));
    gamecars.push(new fastcar(1, 270, 15));

    gamecars.push(new fastcar(1, 250, 15));

    gamecars.push(new fastcar(0, 50, 15));
    gamecars.push(new fastcar(0, 180, 15));

    gamecars.push(new fastcar(0, 150, 15));

    gamecars.push(new dumbcar(2, 200, 40));
    gamecars.push(new fastcar(2, 100, 15));

    gamecars.push(new dumbcar(3, 100, 15));
    gamecars.push(new fastcar(3, 5, 15));

    console.log(gamecars);

    createroadwaydiv(overlaydiv, roadwaydiv, gamerw);

    update(gamerw, gamecars, roadwaydiv);
    setInterval("update(gamerw,gamecars,roadwaydiv)", 50);
}

function createroadwaydiv(odiv, rdiv, rway) {
    for (row = 0; row < rway.length; row++) {
        //add a row div
        var newrdiv = document.createElement("div");
        newrdiv.setAttribute('class', 'rowmarker');

        var newodiv = document.createElement("div");
        newodiv.setAttribute('class', 'rowmarker');

        for (lane = 0; lane < rway.numLanes; lane++) {
            //add some lane-marker divs
            var newtile = document.createElement("div");
            newtile.setAttribute('class', 'tilemarker');
            newtile.setAttribute('id', 'r' + row + 'l' + lane);
            newrdiv.appendChild(newtile);

            newtile = document.createElement("div");
            newtile.setAttribute('class', 'hovermarker');
            newtile.onclick = new Function("overlayClicked(" + row + "," + lane + ")");
            newodiv.appendChild(newtile);
        }
        rdiv.appendChild(newrdiv);
        odiv.appendChild(newodiv);
    }
}

function overlayClicked(row, lane) {
    gamecars.push(new autocar(lane, row, 15));
}

function getTile(row, lane) {
    var tile = document.getElementById('r' + row + 'l' + lane);
    return tile;
}

function displayroadway(rdiv, rway) {
    for (r = 0; r < rway.length; r++) {
        for (l = 0; l < rway.numLanes; l++) {
            var tile = getTile(r, l);
            if (typeof rway.lanes[l][r] != 'undefined') {
                tile.style.background = "blue";
                if (rway.lanes[l][r] == "blocked") {
                    tile.style.background = "black";
                }
                if (rway.lanes[l][r] == "fast") {
                    tile.style.background = "red";
                }
                if (rway.lanes[l][r] == "auto") {
                    tile.style.background = "green";
                }
            }
            else {
                tile.style.background = "grey";
            }
        }
    }
}
