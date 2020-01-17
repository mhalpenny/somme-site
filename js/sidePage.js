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
      
      $("#bottomPage").animate({
        bottom: '0%'
      }, 400, function() {
        $(this).css('bottom', '0%');
      });
      $("#homeB").animate({
        opacity: '1.0',
        visibility: "visible"
      }, 400, function() {
        $(this).css('opactiy', '1.0');
        // $("#headerBar").css("background-color", "white");
      });
      bottom = true;
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
  }else if(bottom == true){
    $("#bottomPage").animate({
      opacity: '0'
    }, 400, function() {
      $(this).css('opacity', '0');
      $("#bottomPage").css('z-index', '-900');
    });
  $("#homeB").animate({
    opacity: '0'
  }, 400, function() {
    $(this).css('opacity', '0');
  });
    bottom = false;
}
}


