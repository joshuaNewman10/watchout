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
    d3.select(this).attr('x', d3.event.x - 20);
    d3.select(this).attr('y', d3.event.y - 20);
  });

var initialize = function() {
  svg.selectAll('circle')
    .data(newGame.enemies)
    .enter()
    .append('circle')
    .attr('class', 'enemy')
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('r', '20px');

  svg.selectAll('rect')
    .data([newGame.player])
    .enter()
    .append('rect')
    .attr('class', 'player')
    .attr('x', function(d) { return d.x; })
    .attr('y', function(d) { return d.y; })
    .attr('width', 40)
    .attr('height', 40)
    .call(drag);
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
