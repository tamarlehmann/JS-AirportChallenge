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
  this._hangar.push(plane)
  return 'plane has landed'
};

Airport.prototype.clearTakeOff = function(plane) {
  this._hangar.pop(plane)
};





// if(animals.indexOf('cow') > -1) {
//   alert('Mooo');
// }

// Airport.prototype.Land = function(plane) {
//   if this._planes.length < this._capacity
//     this._panes.push(plane)
//   else raise error "cannot land planes, airport full"
// }
//
// Airport.prototype.isFull = function() {
//   this._planes.length < this._capacity ? false : true
// }
