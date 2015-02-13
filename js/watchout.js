// start slingin' some d3 here.

// selectAll('svg').data(enemies)
// .attr('x',function(d) { return d.x; })
// .append('circle');

// var width = 500;
// var height = 1000;
// var game = d3.select('body').append('svg').attr('width', width).attr('height', height);
// var game = d3.select('game-area').

var svg = d3.select('.game-area');
var screenWidth = svg.style('width');
var screenHeight = svg.style('height');

var gameLoop = (function() {

  var newGame = new Game(screenWidth, screenHeight);
  newGame.init(5);

  svg.selectAll('circle')
    .data(newGame.enemies)
    .enter()
    .append('circle')
    .attr('class', 'enemy')
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('r', '20px');

})();
