//jq_mousewheel_01.js
(function($){
 
/* 
  let myarr = [];
  let myplus = [11, 'aa',900];
  myarr.push(10); //뒤에추가
  myarr.pop(); //마지막요소 제거
  myarr.unshift(10023); //앞에추가
  myarr.shift(); // 앞요소 제거
  let myarrPlus = myarr.concat(myplus); // 두개의 배열을 합치는 것
*/

const htmlEl = $('html, body');
 const wrap = $('#wrap');
 const scrollEl = wrap.find('.scroll');

 htmlEl.animate({scrollTop:0});
 let myscrollElTop = [];
 let scrollLen = scrollEl.length;
 let timed = 700;

 for(let i = 0; i< scrollLen; i++){
  let scTop = scrollEl.eq(i).offset().top;
  myscrollElTop.push(scTop);
 }
//  console.log(myscrollElTop);
//-----------------------------------------------------------------
let myStatus = true , n, useN=0;
 //================================================================
 const ScrollMagic = function(){
  htmlEl.animate({scrollTop:myscrollElTop[useN]},timed,'easeOutElastic',function(){
  myStatus = true;});
}//ScrollMagic()


//================================================================

$(window).on('mousewheel DOMMouseScroll', function(e){
  // e.preventDefault();
  // console.log(e.detail);
  if(e.originalEvent.wheelDelta){
    n = e.originalEvent.wheelDelta * -1;
  }else{
    n = e.detail * 40;
  }
 

  // console.log(n);
  //최초의 스크롤 위치값 설정-----------------------------------------
  // $('html, body').scrollTop(myscrollElTop[0]);
  if(myStatus){
    myStatus = false;
    if(n > 0){
      useN++;
      if(useN >= scrollLen){
        useN = scrollLen-1;
      }
      ScrollMagic()
    }else{
      useN--;
      if(useN < 0){
        useN = 0;
      }
      ScrollMagic()
    }
  }
});//마우스 휠

//------------------------------------------------------------------------
const gnb = $('#gnb');
const gnbUl = gnb.find('ul');
const gnbLi = gnbUl.find('li');
const gnbLink = gnbLi.find('a');

gnbLink.on('click',function(e){
 e.preventDefault();
 //  let thisLink =  $(this).attr('herf');//경로가 있어야 가능
 // let thisOffset =  $(thisLink).offset().top;
 useN = $(this).parent('li').index();
 ScrollMagic();
});
// 터치패드 사용시----------------------------------------------------------

let startP,endP;
$(window).on('touchstart',function(e){
 startP = e.originalEvent.touches[0].pageY;
});//touchstart

$(window).on('touchmove',function(e){
  htmlEl.animate({scrollTop:myscrollElTop[useN]},0)
});//touchmove

$(window).on('touchend',function(e){
  endP = e.originalEvent.changedTouches[0].pageY;

  if(myStatus){
    myStatus = false;
    if(startP > endP){
      useN++;
      if(useN >= scrollLen){
        useN = scrollLen-1;
      }
      ScrollMagic();
    }else{
      useN--;
      if(useN < 0){
        useN = 0;
      }
      ScrollMagic();
    }
  }
});//touchend()





//-------------------------------------------------------------------------

})(jQuery);