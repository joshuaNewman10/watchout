// Player class

var Player = function(x, y, r) {
  this.type = 'player';
  this.x = x;
  this.y = y;
  this.radius = r;
};

Player.prototype.move = function(x, y) {
  this.x = x;
  this.y = y;
};
