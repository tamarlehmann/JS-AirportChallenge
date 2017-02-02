function Airport(weather) {
  this._hangar = [];
  this._capacity = 20;
  // this.weather = typeof weather !== 'undefined' ? weather : new Weather();
};
weather = new Weather;

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.capacity = function(){
  return this._capacity;
};

Airport.prototype.setCapacity = function(n){
  this._capacity = n
};

Airport.prototype.clearLanding = function(plane) {
  if (this._capacity == this._hangar.length) {throw('The airport is full');}
  else if (weather.stormy()) {
    throw('Cannot land in stormy weather')
  } else {
  this._hangar.push(plane)
  return 'The plane has landed' };
};

Airport.prototype.clearTakeOff = function(plane) {
  if (weather.stormy()) { throw('Cannot take off in stormy weather');}
  this._hangar.pop(plane);
  return 'The plane has taken off'
};

// weather.stormy
