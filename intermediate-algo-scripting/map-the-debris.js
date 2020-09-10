function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  let time = avgAlt => Math.round(2*Math.PI*(Math.sqrt(Math.pow(avgAlt + earthRadius, 3)/GM)))

  return arr.map(element => ({
    name: element.name,
    orbitalPeriod: time(element.avgAlt)
  }));
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
