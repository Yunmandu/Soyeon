

(function($){
 const win = $(window);
 const viewBox = $('#viewBox');

 viewBox.find('.fix_img').wrap('<div class="outer_wrap"></div>');
 $('.outer_wrap').css({height:'2000px'});

 viewBox.find('.fix_img').css({position:'sticky',top:'50px'});

 let fixImgOffset = viewBox.find('.fix_img').offset().top;
 console.log(fixImgOffset);
 
 //이미지 담기
 
 const viewFix = viewBox.find('.fix_img');
 const url = "../img/mac/";

 let j;

 for(let i = 0; i<122; i++){
   if(i < 10){
     j = 'large_000' + i;
   }else if(i < 100){
     j = 'large_00' + i;
   }else if(i < 1000){
     j = 'large_0' + i;
   }
   j += '.jpg';

 viewFix.append(`<img src="${url+j}" alt="0001이미지">`);
 viewFix.children('img').eq(i).css({zIndex:122-i});
 }//for
 viewFix.css({zIndex:50})
 viewFix.children('img').eq(0).show();

 // 스크롤 기능
 win.on('scroll',function(){
  let thisS = $(this).scrollTop(); //현 화면의 스크롤 위치값
  // console.log(thisS);
  
 // 글씨 투명해지게 만들기
  let op = 1 - (thisS * 0.001);//절대값(무조건 +)
  if(op <= 0){op = 0 }
  viewBox.find('.title').css({top:(-thisS/3) + 'px' , opacity: op})

  // .fix_img 위치 고정인 것처럼 조금 변경
  if(thisS >= fixImgOffset){
    let i = thisS - fixImgOffset;
    let imgI = parseInt( i/ 4);
    if(i > 400){i = 400;
    }else if(i < 0){i = 0}
    viewBox.find('.fix_img').css({transform:`translateY(${-400 + i}px)`})

  //이미지 교체하기
    if(imgI >= 121){imgI = 121;
    }else if(imgI <0){imgI = 0}
    // console.log(imgI);
    viewFix.children('img').eq(imgI).siblings().hide();
    viewFix.children('img').eq(imgI).show();
  }
  });

})(jQuery);