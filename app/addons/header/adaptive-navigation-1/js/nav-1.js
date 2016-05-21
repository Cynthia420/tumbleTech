$(document).ready(function() {

  $('.mobile-nav-toggle').on('click',function(){

    if($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0)
      $(".mobile-nav, .mobile-nav-toggle").addClass( "is-open" );
      } else {
      $(this).attr('data-click-state', 1)
      $(".mobile-nav, .mobile-nav-toggle").removeClass( "is-open" );
    }

  });
});
