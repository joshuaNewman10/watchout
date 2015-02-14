// start slingin' some d3 here.

// selectAll('svg').data(enemies)
// .attr('x',function(d) { return d.x; })
// .append('circle');

// var width = 500;
// var height = 1000;
// var game = d3.select('body').append('svg').attr('width', width).attr('height', height);
// var game = d3.select('game-area').

var newGame;
var svg = d3.select('.game-area');
var screenWidth = svg.style('width');
var screenHeight = svg.style('height');
var difficulty = 1500;

var drag = d3.behavior.drag()
  .on('drag', function() {
    newGame.player.x = d3.event.x;
    newGame.player.y = d3.event.y;
    d3.select(this).attr('cx', d3.event.x);
    d3.select(this).attr('cy', d3.event.y);
    newGame.checkCollisions();
  });

var initialize = function() {
  svg.selectAll('circle')
    .data(newGame.enemies.concat(newGame.player))
    .enter()
    .append('circle')
    .attr('class', function(d) { return d.type; })
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('r', function(d) { return d.radius; });

  svg.select('.player').call(drag);
};

var update = function() {
  newGame.update();

  svg.selectAll('circle')
    .data(newGame.enemies)
    .transition()
    .duration(difficulty)
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; });
};

var gameLoop = (function() {

  newGame = new Game(screenWidth, screenHeight);
  newGame.init(5);
  initialize();

  setInterval(update, 2000);

})();
