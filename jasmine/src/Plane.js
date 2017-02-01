function Plane(id) {
  this._id = id
  this._flying = true
  this._airport = null
};

Plane.prototype.land = function(airport) {
  if (this._flying == false) {throw("The plane has already landed");}
  this._flying = false;
  this._airport = airport
};

Plane.prototype.takeOff = function(airport) {
  // if (this._flying == true) {throw("The plane is already flying");}
  this._flying = true;
  this._airport = null;
};
