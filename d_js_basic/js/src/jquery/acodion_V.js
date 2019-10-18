// acodion_V.js

(function($){
  const menuV = $('.accordion_menu_v');
  const menuDt = menuV.find('dt');
  const menuDd = menuV.find('dd');

  menuDd.eq(0).show();

  // let t = menuDt.eq(0).contents(); //내용에 들어있는 모든 요소를 파악
  // menuDt.wrap('<div>'); // wrap: 부모요소를 생성하거나 파악
  
  menuDt.contents().wrap('<a href="#"></a>') //js사용시엔 반복문으로 처리해야한다.
  const menuDtLink = menuDt.find('a');

  menuDtLink.css({'display':'block','width':'100%','height':'100%','colot':'inherit'});

  //  menuDt.on('click',function(){
  //    $(this).next(menuDd).siblings('dd').slideUp();
  //    $(this).next( menuDd ).stop().slideToggle();

  // 선택요소의 뒤에오는 모든 dd부터 그다음 dt이전의 요소인 dd까지...
  console.log($(this).nextAll('dd').next('dt').prev('dd'));
  //  });
  
  menuDt.on('click',function(){
    let i = $(this).index()/2;
    // console.log(i);
    menuDd.eq(i).siblings('dd').stop().slideUp();
    menuDd.eq(i).slideToggle();
  });

  // menuDtLink.on('focus', function () {$(this).addClass('action');});

  const addC = function() { $(this).addClass('action');};
  
  addC();

  const removeC = function () { $(this).removeClass('action');};
  removeC();

  //  menuDtLink.on('focus', addC );

  //  menuDtLink.on('blur', removeC);

  menuDtLink.on({"focus":addC,"blur":removeC});

})(jQuery);