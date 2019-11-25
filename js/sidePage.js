let left = false;
let right = false;
let bottom = false;

function leftPage(){
  $("#leftPage").animate({
    left: '0%'
  }, 400, function() {
    $(this).css('left', '0%');
  });
  $("#homeL").animate({
    left: '1.5%'
  }, 400, function() {
    $(this).css('left', '2%');
  });
  $("#headerBar").css("background-color", "white");
  left = true;
  }


function rightPage(){
    $("#rightPage").animate({
      right: '0%'
    }, 400, function() {
      $(this).css('right', '0%');
    });
    $("#homeR").animate({
      left: '1.5%'
    }, 400, function() {
      $(this).css('left', '2%');
    });
    $("#headerBar").css("background-color", "white");
    right = true;
    }

    function bottomPage(){
      if(bottom == false){
      $("#bottomPage").animate({
        bottom: '0%'
      }, 400, function() {
        $(this).css('bottom', '0%');
      });
      $("#headerBar").css("background-color", "white");
      bottom = true;
    }else if(bottom == true){
        $("#bottomPage").animate({
          bottom: '-100%'
        }, 400, function() {
          $(this).css('bottom', '-100%');
        });
        $("#headerBar").css("background-color", "transparent");
        bottom = false;
    }
      }

  function home(){

    if(left == true){
      $("#leftPage").animate({
        left: '-100%'
      }, 400, function() {
        $(this).css('left', '-100%');
      });
    $("#homeL").animate({
      left: '-50%'
    }, 400, function() {
      $(this).css('left', '-50%');
      $("#headerBar").css("background-color", "transparent");
    });
    left = false;
    }else if(right == true){
      $("#rightPage").animate({
        right: '-100%'
      }, 400, function() {
        $(this).css('right', '-100%');
      });
    $("#homeR").animate({
      left: '-50%'
    }, 400, function() {
      $(this).css('left', '-50%');
      $("#headerBar").css("background-color", "transparent");
    });
      right = false;
  }
}


