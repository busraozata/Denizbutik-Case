$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").addClass("active");
  });

  $("#sidebarCollapseX").on("click", function() {
    $("#sidebar").removeClass("active");
  });

  $("#sidebarCollapse").on("click", function() {
    if ($("#sidebar").hasClass("active")) {
      $(".overlay").addClass("visible");
      console.log("it's working!");
    }
  });

  $("#sidebarCollapseX").on("click", function() {
    $(".overlay").removeClass("visible");
  });
});


//Caorousel

$('#owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 5
    },
    1000: {
      items: 9
    }
  }
});

$('#owl-carousel2').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    
    "<i class='fal fa-angle-left'></i>",
    "<i class='fal fa-angle-right'></i>"
    
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});


$('#owl-carousel3').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fal fa-angle-left'></i>",
    "<i class='fal fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$('#owl-carousel4').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    
    "<i class='fal fa-angle-left'></i>",
    "<i class='fal fa-angle-right'></i>"
    
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});




$('#owl-carousel5').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fal fa-angle-left'></i>",
    "<i class='fal fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})


$(document).ready(function(){
  var video1 = document.getElementById("ban_video");
  video1.currentTime = 1;
  $(".mute-bt").click(function(){
     if($(this).hasClass("stop"))
     {
       var ban_video = document.getElementById("ban_video");
       $("#ban_video").prop('muted', false);
       $(this).removeClass("stop");
     }
     else{
       var ban_video = document.getElementById("ban_video");
       $("#ban_video").prop('muted', true);
       $(this).addClass("stop");
     }
  });
   
  $(".play-bt").click(function(){
     $(".play-bt").hide();
     $(".pause-bt").show();
        var ban_video = document.getElementById("ban_video");
      if($(".stop-bt").hasClass("active")){
        ban_video.currentTime = 0;
      }
        ban_video.play();                                         
    });
   $(".pause-bt").click(function(){
     $(".play-bt").show();
     $(".pause-bt").hide();
     $(".pause-bt").addClass("active");
     $(".stop-bt").removeClass("active");
        var ban_video = document.getElementById("ban_video");
        ban_video.pause();                                         
      });
   $(".stop-bt").click(function(){
     $(".play-bt").show();
     $(".pause-bt").hide();
     $(".pause-bt").removeClass("active");
     $(".stop-bt").addClass("active");
        var ban_video = document.getElementById("ban_video");
          stop
          ban_video.pause();                                         
    });
});	 


$(document).ready(function(){
  var video1 = document.getElementById("ban_video1");
  video1.currentTime = 1;

   
  $(".play-bt1").click(function(){
     $(".play-bt1").hide();
     $(".pause-bt1").show();
        var ban_video1 = document.getElementById("ban_video1");
      if($(".stop-bt").hasClass("active")){
        ban_video1.currentTime = 0;
      }
      ban_video1.play();                                         
    });
   $(".pause-bt1").click(function(){
     $(".play-bt1").show();
     $(".pause-bt1").hide();
     $(".pause-bt1").addClass("active");
     $(".stop-bt").removeClass("active");
        var ban_video1 = document.getElementById("ban_video1");
        ban_video1.pause();                                         
      });
   $(".stop-bt").click(function(){
     $(".play-bt1").show();
     $(".pause-bt1").hide();
     $(".pause-bt1").removeClass("active");
     $(".stop-bt").addClass("active");
        var ban_video1 = document.getElementById("ban_video1");
          stop
          ban_video1.pause();                                         
    });
});	


$(document).ready(function(){
  var video1 = document.getElementById("ban_video2");
  video1.currentTime = 1;
  $(".play-bt2").click(function(){
     $(".play-bt2").hide();
     $(".pause-bt2").show();
        var ban_video1 = document.getElementById("ban_video2");
      if($(".stop-bt").hasClass("active")){
        ban_video1.currentTime = 0;
      }
      ban_video1.play();                                         
    });
   $(".pause-bt2").click(function(){
     $(".play-bt2").show();
     $(".pause-bt2").hide();
     $(".pause-bt2").addClass("active");
     $(".stop-bt").removeClass("active");
        var ban_video1 = document.getElementById("ban_video2");
        ban_video1.pause();                                         
      });
   $(".stop-bt").click(function(){
     $(".play-bt2").show();
     $(".pause-bt2").hide();
     $(".pause-bt2").removeClass("active");
     $(".stop-bt").addClass("active");
        var ban_video1 = document.getElementById("ban_video2");
          stop
          ban_video1.pause();                                         
    });
});	


$(document).ready(function(){
  var video1 = document.getElementById("ban_video3");
  video1.currentTime = 1;
  $(".play-bt3").click(function(){
     $(".play-bt3").hide();
     $(".pause-bt3").show();
        var ban_video3 = document.getElementById("ban_video3");
      if($(".stop-bt").hasClass("active")){
        ban_video3.currentTime = 0;
      }
      ban_video3.play();                                         
    });
   $(".pause-bt3").click(function(){
     $(".play-bt3").show();
     $(".pause-bt3").hide();
     $(".pause-bt3").addClass("active");
     $(".stop-bt").removeClass("active");
        var ban_video3 = document.getElementById("ban_video3");
        ban_video3.pause();                                         
      });
   $(".stop-bt").click(function(){
     $(".play-bt3").show();
     $(".pause-bt3").hide();
     $(".pause-bt3").removeClass("active");
     $(".stop-bt").addClass("active");
        var ban_video3 = document.getElementById("ban_video3");
          stop
          ban_video3.pause();                                         
    });
});	



var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// requires jquery

jQuery(document).ready(function($) {  

  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  
  });



  