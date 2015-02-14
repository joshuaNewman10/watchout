// start slingin' some d3 here.

var newGame;
var svg = d3.select('.game-area');
var screenWidth = svg.style('width');
var screenHeight = svg.style('height');
var difficulty = 1500;
var id;

var drag = d3.behavior.drag()
  .on('drag', function() {
    newGame.player.x = d3.event.x;
    newGame.player.y = d3.event.y;
    d3.select(this).attr('cx', d3.event.x);
    d3.select(this).attr('cy', d3.event.y);
  });

var checkEnemy  = function(i) {
  if (newGame.checkCollisions(i)) {
    endGame();
  }
};

var initialize = function() {
  svg.selectAll('circle')
    .data(newGame.enemies.concat(newGame.player))
    .enter()
    .append('circle')
    .attr('class', function(d) { return d.type; })
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('r', function(d) { return d.radius; });

  svg.selectAll('.enemy').style('fill', 'url(#image)')
  svg.select('.player').style('fill', 'url(#sun)').call(drag);
};

var update = function() {
  newGame.update();
  newGame.score++;

  d3.select('.current')
    .select('span')
    .text(newGame.score);

  svg.selectAll('circle')
    .data(newGame.enemies)
    .transition()
    // .tween('attr', function() {
    //   console.log(d3.select(this).attr('cx'));
    // })
    .attrTween('cx', function(d, i) {
      var x = parseInt(d3.select(this).attr('cx'));
      var interpolator = d3.interpolateRound(x, d.destX);

      return function(t) {
        var xVal = interpolator(t);
        d.x = xVal;

        return interpolator(t);
      };
    })
    .attrTween('cy', function(d, i) {
      var y = parseInt(d3.select(this).attr('cy'));
      var interpolator = d3.interpolateRound(y, d.destY);

      return function(t) {
        var yVal = interpolator(t);
        d.y = yVal;
        checkEnemy(i);

        return interpolator(t);
      };
    })
    .duration(difficulty);
    // .attr('cx', function(d) { return d.x; })
    // .attr('cy', function(d) { return d.y; });
};

var endGame = function() {
  // console.log('player x:' + newGame.player.x, 'player y: ' + newGame.player.y);
  // d3.selectAll('.enemy').call(function(d, i){
    // console.log(d3.select(this).attr('cx'));
    // console.log('enemy x: ' + d3.select(this).attr('cx'), 'enemy y: ' + d3.select(this).attr('cy'));
  // });
  // for(var i=0; i<newGame.enemies.length; i++) {
  //   var enemy = newGame.enemies[i];
  //   console.log('enemy x: ' + enemy.x + ' ' + lastX[i], 'enemy y: ' + enemy.y + ' ' + lastY[i]);
  // }
  clearInterval(id);
  svg.selectAll('circle').remove();
  gameLoop();
};

var gameLoop = function() {

  newGame = new Game(screenWidth, screenHeight);
  newGame.init(10);
  initialize();
  id = setInterval(update, 2000);

};

gameLoop();
