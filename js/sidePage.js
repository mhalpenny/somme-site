function leftPage(){
$("#leftPage").toggle();
$("#home").toggle();
var color = $("#headerBar").css("background-color");
if(color == 'rgb(255, 255, 255)'){
$("#headerBar").css("background-color", "transparent");
$("#leftPage").animate({
  left: '-100%'
}, 600, function() {
  $("#leftPage").css('left', '-100%');
});
}else if(color == 'rgba(0, 0, 0, 0)'){
  $("#headerBar").css("background-color", "white");
  $("#leftPage").animate({
    left: '0%'
  }, 600, function() {
    $(this).css('left', '0%');
  });
  }
  console.log(color);
}


