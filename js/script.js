$(document).ready(function(){
$('.box').each(animateDiv);
});

function makeNewPosition(){

  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 230;
  var w = $(window).width() - 400;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh,nw];

}

function animateDiv(){
var el = $(this);
  var newq = makeNewPosition();
  var oldq = $(el).offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $(el).animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateDiv.apply(this);
  });

};


function calcSpeed(prev, next) {

  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = .03;

  var speed = Math.ceil(greatest/speedModifier);

  return speed;

}

$('.box').hover(function() {
$(this).pause();
}, function() {
$(this).resume();
});







var boxDims = new Array();

function setRandomPos(elements,x,dx){
  elements.each(function(){
    var conflict = true;
    while (conflict) {
        fixLeft=(Math.floor(Math.random()*x)*10) + dx;
        fixTop = (Math.floor(Math.random()*40)*10) + 180;
        $(this).offset({
            left: fixLeft,
            top: fixTop
        });
        var box = {
            top: parseInt(window.getComputedStyle($(this)[0]).top),
            left: parseInt(window.getComputedStyle($(this)[0]).left),
            width: parseInt(window.getComputedStyle($(this)[0]).width),
            height: parseInt(window.getComputedStyle($(this)[0]).height)
        }
        conflict = false;
        for (var i=0;i<boxDims.length;i++) {
            if (overlap(box,boxDims[i])) {
                conflict = true;
                break;
            } else {
                conflict = false;
            }
        }
    }
    boxDims.push(box)

  });
}



setRandomPos($(".box"),40,40);





var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
});
