$(document).on('click',nextSlidea);

function nextSlide(){
  console.log($('.active + .slidea').length);
  if ($('.active + .slidea').length > 0){
    $('.active + .slidea').addClass('active');
    $($('.active')[0]).removeClass('active');
  } else{
    $('.active').removeClass('active');
    $('.slidea:nth-child(1)').addClass('active');
  }
}



$(document).ready(function() {
    // Start autoplay when the document is ready
    startAutoplay();
  });
  
  function startAutoplay() {
    // Set the interval for autoplay (in milliseconds)
    var interval = 3000; // Change this value to adjust the autoplay speed
  
    // Create a timer to trigger the next slide
    var timer = setInterval(nextSlide, interval);
  
    // Pause autoplay when hovering over the slider
    $('.slidea').hover(function() {
      clearInterval(timer);
    }, function() {
      timer = setInterval(nextSlide, interval);
    });
  }
  
  function nextSlide() {
    console.log($('.active + .slidea').length);
    if ($('.active + .slidea').length > 0) {
      $('.active + .slidea').addClass('active');
      $($('.active')[0]).removeClass('active');
    } else {
      $('.active').removeClass('active');
      $('.slidea:nth-child(1)').addClass('active');
    }
  }
  