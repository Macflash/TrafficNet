//object to hold collision information for a roadway
function roadway(lanes, length) {
    this.numLanes = lanes;
    this.length = length;
    this.lanes = new Array(lanes);
    for (i = 0; i < this.numLanes; i++) {
        this.lanes[i] = new Array(this.length);
    }

    this.reset = function () {
        this.lanes = new Array(lanes);
        for (i = 0; i < this.numLanes; i++) {
            this.lanes[i] = new Array(this.length);
        }
    }
}

function dumbcar(lane, location, length) {
    this.lane = lane;
    this.location = location;
    this.length = length;
    this.speed = 2;
    this.maxspeed = Math.round(Math.random() * 2) + 3; // 3 - 5

    this.cartype = "dumb";

    this.decide = function (roadway) {
        //check how far ahead the next car is
        var gap = getGap(roadway, this.lane, this.location);
        if (gap > this.speed * 10) {
            if (this.speed < this.maxspeed) {
                this.speed++;
            }
        }
        if (gap < this.speed * 3 && this.speed > 0) {
            this.speed--;
        }
    }

}

function fastcar(lane, location, length) {
    this.lane = lane;
    this.location = location;
    this.length = length;
    this.speed = 2;
    this.maxspeed = Math.round(Math.random() * 2) + 5; //5 - 7
    this.turnTimer = 0;

    this.cartype = "fast";

    this.decide = function (roadway) {
        if (this.turnTimer > 0) {
            this.turnTimer--;
        }

        //check how far ahead the next car is
        var gap = getGap(roadway, this.lane, this.location);
        if (gap > this.speed * 10) {
            if (this.speed < this.maxspeed) {
                this.speed++;
            }
        }
        else {
            if ((gap < (this.speed * 5)) && (this.speed < this.maxspeed) && (this.turnTimer == 0)) {
                //check other lanes to see if no collision!
                var lgap = getGap(roadway, this.lane - 1, this.location + this.length);
                var rgap = getGap(roadway, this.lane + 1, this.location + this.length);
                if (lgap >= rgap) {
                    if (lgap > this.length) {
                        //change lanes!
                        this.lane--;
                        this.turnTimer = 10;
                    }
                }
                else {
                    if (rgap > this.length) {
                        //change lanes!
                        this.lane++;
                        this.turnTimer = 10;
                    }
                }
            }
            var gap = getGap(roadway, this.lane, this.location);
            if (gap < this.speed * 2 && this.speed > 0) {
                this.speed--;
            }
        }
    }
}

function autocar(lane, location, length, speed) {
    this.lane = lane;
    this.location = location;
    this.length = length;
    this.speed = 2;
    this.maxspeed = 5; //FAST cars go: 5 - 7, DUMB cars go: 1 - 4
    this.turnTimer = 0;
    
    this.cartype = "auto";

    this.decide = function (roadway) {
        if (this.turnTimer > 0) {
            this.turnTimer--;
        }

        //check how far ahead the next car is
        var gap = getGap(roadway, this.lane, this.location);
        if (gap > this.speed * 10) {
            if (this.speed < this.maxspeed) {
                this.speed++;
            }
        }
        else {
            // TODO: how to adjust these values? Want these to be conservative in changing lanes
            if ((gap < (this.speed * 5)) && (this.speed < .8 * this.maxspeed) && (this.turnTimer == 0)) {
                //check other lanes to see if no collision!
                var lgap = getGap(roadway, this.lane - 1, this.location + this.length);
                var rgap = getGap(roadway, this.lane + 1, this.location + this.length);
                if (lgap >= rgap) {
                    if (lgap > this.length) {
                        //change lanes!
                        this.lane--;
                        this.turnTimer = 30;
                    }
                }
                else {
                    if (rgap > this.length) {
                        //change lanes!
                        this.lane++;
                        this.turnTimer = 30;
                    }
                }
            }
            var gap = getGap(roadway, this.lane, this.location);
            if (gap < this.speed * 2 && this.speed > 0) {
                this.speed--;
            }
        }
    }
}

function getGap(road, lane, location) {
    if (lane < 0) { return 0; }
    if (lane >= road.numLanes) { return 0; }
    var r = location - 1;
    var l = road.lanes[lane];
    var gap = 0;
    while (typeof l[r] == 'undefined') {
        r--;
        gap++;
        if (r < 0) {
            r += road.length;
        }
    }
    return gap;
}
