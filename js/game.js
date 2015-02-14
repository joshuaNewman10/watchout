// Game class
//

var Game = function(x, y) {
  this.width = parseInt(x.split('px')[0]);
  this.height = parseInt(y.split('px')[0]);
  this.player = new Player(this.width/2, this.height/2);
  this.enemies = [];
};

Game.prototype.init = function(n) {
  for (var i = 0; i < n; i++) {
    this.enemies.push(new Enemy(this.width, this.height));
  }
};

Game.prototype.update = function() {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].move();
  }
};
