// make_spigen_main_pc.js
(function($){
  //1, #gnb영역 내부에 있는 ul의 내용을  .side_gnb_area에 복사해서 붙여넣기
  // clone() 메서드를 사용

  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area')

  let gnbContnets = gnb.contents().clone();
  // console.log(gnbContnets);
  sideGnbArea.append(gnbContnets);
  //---------------------------------------------------------
  //버튼 클릭시 .side_gnb 나타나게 만들기

  const openGnbBtn = $('.gnb_btn > button');
  const colseGnbBtn = $('.close_gnb_btn > button');
  const sideGnb = $('.side_gnb');
  const gnbDl = gnb.find('dl');
  const gnbDd = gnb.find('dd');
  const gnbDt = gnb.find('dt');
  const gnbTitleLink = gnbDt.children('a');
  const gnbListLink = gnbDd.children('a');

  let time = 600;

  openGnbBtn.on('click', function(e){
    e.preventDefault();
    // sideGnb.css({'display':'block'});
    // sideGnb.show();
    sideGnb.fadeIn(time/2);
  });
  colseGnbBtn.on('click', function(e){
    e.preventDefault();
    // sideGnb.css({'display':'none'});
    // sideGnb.hide();
    sideGnb.fadeOut(time);
  });

  //#gnb에 마우스 올렸을 경우 dd를나오게 만들기
 const addAction = function () {
   let li = $(this).parents('li');
  li.find(gnbTitleLink).addClass('action');
  li.siblings().find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideDown();}

const removeAction = function(){
  $(this).find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideUp();}

// gnbDl.on('mouseenter', addAction);
// gnbDl.on('mouseleave', removeAction);
 gnbDl.on({'mouseenter':addAction,'mouseleave':removeAction});
//-------------------------------
//#gnb > dt에 focus처리되면 dd가 나타나게 만들기
  // gnbTitleLink.on('focus',function(){
  //   gnbDd.stop().slideDown();
  // });
  gnbTitleLink.on('focus',addAction);

  // gnbListLink.eq(-1).on('blur', function () {
  // gnbDd.stop().slideUp();
  // });
  gnbListLink.eq(-1).on('blur', removeAction);

  
  // .side_gnb_area 내부의 마지막 a요소에서 blur처리되면, .close_gnb_btn위치로 다시 focus처리 되어라
   const sideLink = sideGnbArea.find('a');
   const sideLastLink = sideLink.eq(-1);
   sideLastLink.css({'fontSize':'2rem'});

   $('h1').find('a').focus();
   $('h1').find('a').on('focus');

  // .side_gnb_area 에서 키보드 esc키를 부르면, 빠져 나가고, 이전의 위치로 돌아가라
  
})(jQuery);