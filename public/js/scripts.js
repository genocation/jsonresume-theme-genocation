jQuery(function ($) {

   var os = new OnScreen({
      tolerance: 200,
      debounce: 100,
      container: window
   });

   os.on('enter', '#skills', (element) => {
      $('#skills .progress-bar').removeClass("zero");
   });

   os.on('enter', '#languages', (element) => {
      $('#languages .progress-bar').removeClass("zero");
   });


   $('#scroll-spy').on('activate.bs.scrollspy', function(e) {
      let currentSection = $(".nav li.active > a").attr("href");
      $("div.thumbnail.active").removeClass("active");
      $(currentSection+" div.thumbnail").addClass("active");
   });

   // Open floating navigation menu
   $(".flt-button a").on("click", function(e) {
      e.preventDefault();
      $("#flt-menu").slideDown(300);
   });

   $(".flt-close a").on("click", function(e) {
      e.preventDefault();
      $("#flt-menu").slideUp(300);
   });

   // Add smooth scrolling to all links inside a navbar
   $(".nav a").on('click', function(event){

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {

         // Prevent default anchor click behavior
         event.preventDefault();

         // Store hash (#)
         var hash = this.hash;

         // Close floating menu if it's open
         if ($("#flt-menu").length > 0) {
            $("#flt-menu").hide();
         }

         // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds
         // it takes to scroll to the specified area (the speed of the animation)
         $('html, body').animate({
            scrollTop: $(hash).offset().top - 20
         }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
         }); // End if statement
      }
   });
});
