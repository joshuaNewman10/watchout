// Enemy class

var Enemy = function(x, y, r) {
  this.type = 'enemy';
  this.xBound = x;
  this.yBound = y;
  this.x = rnd(x);
  this.y = rnd(y);
  this.radius = r;
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
