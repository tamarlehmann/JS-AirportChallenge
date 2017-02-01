function Weather() {
};

Weather.prototype.stormy = function(){
  return Math.floor((Math.random() * 10) +1) < 3
};
