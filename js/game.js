// Game class
//

var Game = function(x, y) {
  this.width = parseInt(x.split('px')[0]);
  this.height = parseInt(y.split('px')[0]);
  this.enemies = [];
};

var rnd = function(num) {
  return Math.floor(Math.random() * num);
};

Game.prototype.init = function(n) {
  for (var i = 0; i < n; i++) {
    this.enemies.push(new Enemy(rnd(this.width), rnd(this.height)));
  }
};


