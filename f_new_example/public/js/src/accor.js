//accor.js

(function($){
  const accor = $('.accor');
  const dt = accor.find('dt');
  const dd = accor.find('dd');
  const a = dt.children('a');

  a.on('click',function(){
    $(this).parent('dt').next().siblings('dd').slideUp();
    $(this).parent('dt').next().stop().slideDown();
  });

})(jQuery);
