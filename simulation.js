function update(road, cars, roaddiv) {
    //clear roadway
    road.reset();

    //draw cars
    drawCars(cars, road);

    //car decisions
    decideCars(cars, road);

    //car movement
    moveCars(cars, road);

    //check for collisions?

    //display roadway
    displayroadway(roaddiv, road);

    //compute statistics
    computeStats(cars);

}

function drawCars(cars, rw) {
    for (k = 0; k < cars.length; k++) {
        var t = cars[k].cartype;

        for (i = 0; i < cars[k].length; i++) {
            var s = cars[k].location + i;
            if (s >= rw.length) {
                s = s - rw.length;
            }

            rw.lanes[cars[k].lane][s] = "blocked";
        }
    }
}

function drawCar(car, rw) {
    var t = car.cartype;
    for (i = 0; i < car.length; i++) {
        var s = car.location + i;
        if (s >= rw.length) {
            s = s - rw.length;
        }

        rw.lanes[car.lane][s] = t;
    }
}

function decideCars(cars, rw) {
    for (k = 0; k < cars.length; k++) {
        cars[k].decide(rw);
        drawCar(cars[k], rw);
    }
}

function moveCars(cars, rw) {
    for (i = 0; i < cars.length; i++) {
        cars[i].location = cars[i].location - cars[i].speed;
        if (cars[i].location < 0) {
            cars[i].location = cars[i].location + rw.length;
        }
        else if (cars[i].location >= rw.length) {
            cars[i].location = cars[i].location - rw.length;
        }
    }
}

