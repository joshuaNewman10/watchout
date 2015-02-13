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

var initialize = function() {
  svg.selectAll('circle')
    .data(newGame.enemies)
    .enter()
    .append('circle')
    .attr('class', 'enemy')
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('r', '20px');
};

var update = function() {
  newGame.update();

  svg.selectAll('circle')
    .data(newGame.enemies)
    .transition()
    .duration(difficulty)
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; });
    // update the enemies
};

var gameLoop = (function() {

  newGame = new Game(screenWidth, screenHeight);
  newGame.init(5);
  initialize();

  setInterval(update, 2000);

})();
