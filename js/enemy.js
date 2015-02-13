// Enemy class

var Enemy = function(x, y) {
  this.xBound = x;
  this.yBound = y;
  this.x = rnd(x);
  this.y = rnd(y);
};

var rnd = function(num) {
  return Math.floor(Math.random() * num);
};

Enemy.prototype.move = function() {
  this.x = rnd(this.xBound);
  this.y = rnd(this.yBound);
};

Enemy.prototype.getCoords = function() {

};
