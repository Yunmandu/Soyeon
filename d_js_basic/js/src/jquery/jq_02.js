// jq_02.js
( function($){
//jQurey 내용작성하는곳.
// 선택자
/* 
document.getElementById('box');
document.querySelector('#box');
$('#box')

document.getElementsByTagName('p')[0];
document.querySelector('p');
$('p')
 */

/* 
$('.box p').css({"padding":"0.5rem", "backgroundColor":"#fa0"});
$('.box').find('p').css({"color":"#f03","textShadow":"0.2rem 0.2rem 0.2rem rgba(0,0,0,0.7)"});


$('.box > p').css({"borderBottom":"2px solid #111"});
$('.box').children('p').css({"transform":"rotate(45deg)"});
 */

// $('dl > dt + dd').css({"backgroundColor":"#acc"});
// $('dl').children('dt').next('dd').css({"fontSize":"2rem"});

// $('dl > dt ~ dd').css({"marginLeft":"2rem"});
// $('dl').children('dt').nextAll('dd').css({"color":"#f03"});

// $('ul > li:nth-child(1)').css({"backgroundColor":"#ffa"});
// $('ul').children('li:nth(0)').css({"color":"#077"});
// $('ul').children('li:nth(-1)').css({"color":"#f77"});
// $('ul').children('li').eq(0).css({"borderBottom":"2px solid #333"})
// $('ul').children('li').eq(-1).css({"borderBottom":"2px solid #f05"})

// $('ul').find('li:eq(-2)').siblings().css({"borderLeft":"3px solid #f05"})


// 자식 : children
// 자손 : find
// 인접형제(동생) : next
// 형제(동생들) : nextAll

// 부모 : parent
// 조부모(그 위도 포함) : parents, parentsUntil, closest
// 형제(바로위 형) : prev
// 형제(형들) : prevAll
// 다른형제(나를제외) : siblings

let first = $('#first')
let str =  first.find('strong');

first.css({'padding':'0.5rem','backgroundColor':'#fcc'});
str.css({'color':'#07f'});

// ========================================================

str.parent().css({'padding':'0.3rem','backgroundColor':'#ccf'})
str.parents('#first').css({'padding':'0.2rem','border':'1px solid #333'});
 //()에 언급된 당사자부모에게 지정(지칭하지않으면 타고타서 전부 동작)
// str.parentsUntil('#first').css({'padding':'0.2rem','border':'1px dotted #99f'});
 //()에 언급된 당사자를 제외한 부모에게 지정 (지칭하지않으면 타고타서 전부 동작)
// str.closest('#first').css({ 'padding': '0.2rem', 'border': '1px dotted #f04'}); 
 //()에 대상을 지칭하지않으면 적용이 안됨 현재로는 잘 사용안함

 //parentsUntil: 부모(선택된 상위) 선택자 제외한 자식까지
 //closest : 부모(상위포함) 선택자만

 //https://oscarotero.com/jquery

 /* 
 parent() : 부모만(값을 작성하지않아도 동작)
 parents([selector]) : 부모이자 조상에해당하는 요소,선택값을 작성하면 선택요소만
 parentsUntil([selector]) : parents와 기본은 같은내용, 선택값을 작성하면 선택요소 자식까지
 colosest(selector) : 선택값이 없으면 동작하지 않음, 선택값을 작성하면 선택요소만(1.8까지)
 */

})( jQuery );