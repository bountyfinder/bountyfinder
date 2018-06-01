$("div").find("a").click(function(e) {
    e.preventDefault();

    var section = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(section).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = section;
      });

});