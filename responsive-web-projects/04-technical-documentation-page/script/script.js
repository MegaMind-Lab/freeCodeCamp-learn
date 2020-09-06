'use strict';

// https://stackoverflow.com/questions/32395988/highlight-menu-item-when-scrolling-down-to-section
// to-do : can be improved 
$(window).scroll(function() {
 
  var position = $(this).scrollTop();

  $('.main-section header').each(function(){
    var target = $(this).offset().top;
    var id = $(this).attr('id');

    if(position >= target) {
      console.log(id);
      $("#navbar > ul > li > a").removeClass("active");
      $("#navbar > ul > li > a[href=\\#" + id + "]").addClass("active");
    }
  });
});
