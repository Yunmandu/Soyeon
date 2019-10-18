// jq_06_load.js

(function($){
 //jquery 기초
 /**
  * (html문서에서 불러온 경우)
  * js문서에서는 기준경로가 작성하고 있는 js 문서가 아니다!
  * html문서로 연결된 경우는 불러온 html문서기준으로 경로를 설정
  */
//  ../../html/jquery/temp/header.html
//  ./temp/header.html

const wrap = $('#wrap');
wrap.prepend('<div class="head_wrap"></div>');
const headWrap = $('.head_wrap');

wrap.append('<div class="foot_wrap"></div>');
const footWrap = $('.foot_wrap')

headWrap.load('./temp/header.html',function(data){
  console.log(data);
  const headBox = $('#headBox');
  headBox.css({'backgroundColor':'#3ff'});
});

// =====================================

footWrap.load('./temp/footer.html',function(data){
  console.log(data);
});

wrap.load('../../data/test.json',function(data){
  console.log(data);
});


})(jQuery);