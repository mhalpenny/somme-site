let left = false;
let right = false;
let bottom = false;

function leftPage(){
  $("#leftPage").css('z-index', '900');
  $("#leftPage").animate({
    opacity: '1.0'
  }, 400, function() {
    $(this).css('opacity', '1.0');
  });
  $("#homeL").animate({
    opacity: '1.0',
    visibility: "visible"
  }, 400, function() {
    $(this).css('opactiy', '1.0');
    // $("#headerBar").css("background-color", "white");
  });
  left = true;
  }


function rightPage(){
  $("#rightPage").css('z-index', '900');
    $("#rightPage").animate({
      opacity: '1.0'
    }, 400, function() {
      $(this).css('opacity', '1.0');
    });
    $("#homeR").animate({
      opacity: '1.0',
      visibility: "visible"
    }, 400, function() {
      $(this).css('opactiy', '1.0');
      // $("#headerBar").css("background-color", "white");
    });
    right = true;
    }

    function bottomPage(){
      if(bottom == false){
      $("#bottomPage").animate({
        bottom: '0%'
      }, 400, function() {
        $(this).css('bottom', '0%');
      });
      bottom = true;
    }else if(bottom == true){
        $("#bottomPage").animate({
          bottom: '-100%'
        }, 400, function() {
          $(this).css('bottom', '-100%');
        });
        bottom = false;
    }
      }

  function home(){

    if(left == true){
      $("#leftPage").animate({
        opacity: '0'
      }, 400, function() {
        $(this).css('opacity', '0');
        $("#leftPage").css('z-index', '-900');
      });
    $("#homeL").animate({
      opacity: '0',
    }, 400, function() {
      $(this).css('opacity', '0');
    });
    left = false;
    }else if(right == true){
      $("#rightPage").animate({
        opacity: '0'
      }, 400, function() {
        $(this).css('opacity', '0');
        $("#rightPage").css('z-index', '-900');
      });
    $("#homeR").animate({
      opacity: '0'
    }, 400, function() {
      $(this).css('opacity', '0');
    });
      right = false;
  }
}


