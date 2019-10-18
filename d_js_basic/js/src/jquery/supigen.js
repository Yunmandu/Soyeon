// supigen.js

(function(){

  const gnb = $('#gnb');
  const gnbArea = gnb.children('ul');
  const gnbArLi = gnbArea.children('li');

  gnbArLi.children('a').addClass('titleLink');

  const titleLink = $('.titleLink');
  const pList = titleLink.next('ul');
  const sLink = pList.find('a');

  gnbArea.css({ 'height': 'auto', 'backgroundColor': '#fff' });

  titleLink.on('mouseenter focus',function(){
   pList.stop().slideDown();
  });
   sLink.eq(-1).on('blur',function(){
   pList.stop().slideUp();
  });

  gnbArea.on('mouseleave', function(){
    pList.stop().slideUp();
  });


  



})(jQuery);