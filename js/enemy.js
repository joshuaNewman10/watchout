// Enemy class

var Enemy = function(x, y, r) {
  this.type = 'enemy';
  this.xBound = x;
  this.yBound = y;
  this.x = rnd(x);
  this.y = rnd(y);
  this.destX;
  this.destY;
  this.radius = r;
};

var rnd = function(num) {
  return Math.floor(Math.random() * num);
};

Enemy.prototype.move = function() {
  this.destX = rnd(this.xBound);
  this.destY = rnd(this.yBound);
};

Enemy.prototype.getCoords = function() {

};
