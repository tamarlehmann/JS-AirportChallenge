function Plane(id) {
  this._id = id
  this._flying = true
  this._airport = null
};

Plane.prototype.land = function(airport) {
  if (this._flying == false) {throw("The plane has already landed");}
  else {
  airport.clearLanding(this);
  this._flying = false;
  this._airport = airport };
};

Plane.prototype.takeOff = function(airport) {
  airport.clearTakeOff(this)
  this._flying = true;
  this._airport = null;
};

Plane.prototype.flying = function() {
  this._flying
};
