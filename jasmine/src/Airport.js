function Airport() {
  this._hangar = [];
  this._capacity = 20;
};

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.capacity = function(){
  return this._capacity;
};

Airport.prototype.clearLanding = function(plane) {
  if (this._capacity == this._hangar.length) {throw('The airport is full');}
  else {
  this._hangar.push(plane)
  return 'The plane has landed' };
};

Airport.prototype.clearTakeOff = function(plane) {
  this._hangar.pop(plane)
  return 'The plane has taken off'
};
