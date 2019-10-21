// woorisenior.js
(function($){

  const gnb = $('#gnb');
  const mainUl = gnb.children('ul');
  const mainLi = mainUl.children('li');
  const gnbDl = mainLi.children('dl');
  const gnbDt = gnbDl.children('dt');
  const gnbDd = gnbDt.next('dd');
  const gnbDtLink = gnbDt.children('a');
  const gnbDdLink = gnbDd.children('a');

  gnb.on('mouseenter',function(){
    gnbDd.stop().slideDown();
  });
  gnb.on('mouseleave',function(){
    gnbDd.stop().slideUp();
  });

  gnbDtLink.on('focus',function(){
    gnbDd.stop().slideDown();
  });
  
  gnbDdLink.eq(-1).on('blur', function(){
    gnbDd.stop().slideUp();
  });
  


})(jQuery);