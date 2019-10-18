//gnb_01.js

/**
 * 1.마우스 또는 키보드 포커스 처리시, 하위메뉴 전체가 나타나게만들기 (배경 하얗게)
 * 2.마우스 또는 키보드 포커스 처리시, 하위메뉴 전체가 나타나게만들기 (별도배경 없이)
 * 3.마우스 또는 키보드 포커스 처리시, 해당 메뉴 하위하나만 나타나게 만들기
 */




(function($){

 const gnb = $('#gnb');
 const gnbArea = gnb.children('ul');
 const gnbArLi = gnbArea.children('li');
 
//  gnbArLi.children('a').attr('class','titleLink') =
 gnbArLi.children('a').addClass('titleLink');

 const titleLink = $('.titleLink');
 const partList = titleLink.next('ul');
 const subLink = partList.find('a');
 let timed = 500;

//  =======================================================
// 1번기능 수행하기
/*  
 gnb.css({'backgroundColor':'transparent'});
 gnbArea.css({'height':'auto','backgroundColor':'#fff','boxShadow':'0.2rem 0.2rem 0.2rem rgba(0,0,0,0.3)'});

 // 포커스 잡히면 보이게하기
 titleLink.on('focus',function(e){
  // e.preventDefault();
   partList.stop().slideDown(timed);
 });

 //마지막요소 블러처리되면 사라지게
  subLink.eq(-1).on('blur',function(){
    partList.stop().slideUp(timed);
  });

  subLink.on('mouseenter',function(){
    partList.stop().slideDown(timed);
  });

  gnb.on('mouseleave',function(){
    partList.stop().slideUp(timed);
  });

// ==========================================

//2번기능 수행하기
  gnbArea.css({'height':'100%'})

 */
  
// ==========================================
// 3번기능 수행하기

titleLink.on('mouseenter focus',function(){
  let ulSlide = $(this).next(partList);
  ulSlide.parent().siblings().find(partList).slideUp();
  ulSlide.stop().slideDown();

  ulSlide.find('a').eq(-1).on('blur',function(){
    ulSlide.stop().slideUp();
  });
});

gnb.on('mouseleave',function(){
  partList.stop().slideUp();
});

})(jQuery);