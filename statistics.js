function typestat(cartype){
  this.cartype = cartype;
  this.spdsum = 0;
  this.num = 0;
  this.avg = function(){
    return spdsum/num;
  }
  this.add = function(car){
    this.spdsum = this.spdsum + car.speed;
    this.num++;
  }
}

function computeStats(cars){
  var fast = new typestat("fast");
  var dumb = new typestat("dumb");
  for(i = 0; i < cars.length; i++){
    if(cars[i].cartype == "fast"){
      fast.add(cars[i]);
    }
    else{
      dumb.add(cars[i]);
    }
  }
  console.log("fast: " + fast.avg());
  console.log("dumb: " + dumb.avg());
}
