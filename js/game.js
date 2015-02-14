// Game class
//

var Game = function(x, y) {
  this.width = parseInt(x.split('px')[0]);
  this.height = parseInt(y.split('px')[0]);
  this.player = new Player(this.width/2, this.height/2, 20);
  this.enemies = [];
};

var pythagDist = function(a, b) {
  return Math.pow(Math.pow((a.x - b.x),2) + Math.pow((a.y - b.y),2),(1/2));
};

Game.prototype.init = function(n) {
  for (var i = 0; i < n; i++) {
    this.enemies.push(new Enemy(this.width, this.height, 20));
  }
};

Game.prototype.update = function() {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].move();
  }
};

Game.prototype.checkCollisions = function() {
  for (var i = 0; i < this.enemies.length; i++) {
    if (pythagDist(this.player, this.enemies[i]) <= (this.player.radius + this.enemies[i].radius)) {
      console.log('FIREEEE');
    }
  }
};
