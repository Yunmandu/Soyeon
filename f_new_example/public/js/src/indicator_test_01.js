//indicator_test_01.js

(function($){
//1번----------------------------------------------------------------
  const miniProduct = $('#miniProduct');
  const indicator = miniProduct.children('.indicator');
  const indiLi = indicator.children('li');
  const indiLink = indiLi.children('a');
  let  indiLiLen = indiLi.length;

  const adverBanner = miniProduct.find('.product').children('ul');
  const adverNth = adverBanner.children('li');

  adverNth.find('a').attr({'tabIndex':-1});
  indiLi.eq(0).addClass('active');
  
//-------------------------------------------------------------------
  let i = 0;
  indiLink.on('focus click', function(e){
    e.preventDefault();
    i = $(this).parent().index();
    adverBanner.animate({marginLeft:(-100 * i)+'%'});

    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');

    // $(this).parent().addClass('active');
    // $(this).parent().siblings.removeClass('active');

    $(this).on('keyup',function(e){
      e.preventDefault();
      if(e.keyCode == 13){
      adverNth.eq(i).children('a').focus();
      }
    });
  });
//자동슬라이드----------------------------------------------------------
  
  let go , timed = 1500;

  const slideGo = function(){
    go = setInterval(function(){
    i++;
    if(i >= indiLiLen){ i=0;} 
    adverBanner.animate({marginLeft:(-100 * i)+'%'});
    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
   },timed);//일정시간마다
  };

  const slideStop = function(){
    clearInterval(go); //setInterval을 취소
  };

  slideGo();
//마우스 대면 슬라이드 멈추기------------------------------------------------
  miniProduct.on('mouseenter',function(){
    slideStop();
  });
  miniProduct.on('mouseleave',function(){
    slideGo();
  });

//---------------------------------------------------------------------------
//2번 -----------------------------------------------------------------------
  const miniProduct1 = $('#miniProduct_01');
  const product1 = miniProduct1.find('.product_01');
  const slideUl = product1.children('ul');
  let slideLi = slideUl.children('li');

  let cloneLi = slideLi.eq(-1).clone(true);

  cloneLi.prependTo(slideUl);

 //--------------------------------------------------li 복제끝 버튼지정
  const btn1 = $('.btn_01');
  const nextBtn = btn1.children('.next')

 //3번----------------------------------------------------------------
  const miniProduct3 = $('#miniProduct_03');
  const productWrap = miniProduct3.find('.product_wrap');
  const slideUl3 = productWrap.children('.product_03');
  let slideLi3 = slideUl3.children('li')

  slideLi3.eq(-1).clone(true).prependTo(slideUl3);

})(jQuery);