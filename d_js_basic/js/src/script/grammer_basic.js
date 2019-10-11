//grammer_basic.js
//javascript 기초이해하기

/** 문법
 * 조건문: 특정한 조건을 이용하여 해당 조건이 참이면 수행하고,
   거짓이면 수행하지 않도록 처리하게 만드는 것
 * 반복문: 2번이상의 반복수행할 경우, 단순반복하여 수행하게 하는것이 아니라 자동으로 수행하도록 처리
 */

 // 조건문 - 단순분기(하나의 조건을 기준으로 참/거짓)-if~else, 다수분기(다양한 조건중에 하나) -switch
//  if(조건을 비교){조건이 참일경우 수행}

/* 
var myNum = function(par){
  var i = par;
  var text;
 
  if(i<10) { text = "주어진 숫자는 10보다 작은 수 입니다.";
 } else if(i === 10){
   text = "주어진 숫자는 10 입니다.";
 } else{
   text = "주어진 수는 10보다 큰 수 입니다.";  
 }
 
 return console.log(text);
};

myNum(10);
myNum(30);
myNum(5);
 */

//  () ? 참이면 수행 : 거짓이면 수행;

// if(){참이면 수행} else {거짓이면 수행}

// () ? 참 : () ? 참 : () ? 참 : 거짓 ;

/* 
if(){
  참
} else if() {
  참
} else if() {
  참
} else {
  거짓
} */

/* 
var i = 10;
switch(i){
  case 1:
     text = "숫자는 1입니다";
     break;
  default:
     text = "집에가셔도 됩니다.";
     break;
}
console.log(text);

 */

 // switch case, break, default

 
 //  var coffee = 'americano';
 //  var menu = ['americano', 'latte', 'mocha'];
 //  var text;
 
 var myMenu = function(){

  let coffee, text, menu;
  menu = ['americano', 'latte', 'mocha','vanilla','esspresso'];
  coffee = prompt('원하시는 메뉴를 입력해 주세요 \n 메뉴는:' +menu);
 
  switch(coffee){
    case menu[0]: 
     text = '얼어 죽어도 아이스 아메리카노'; 
     break;
 
    case menu[1]:  
     text = '커피는 믹스처럼 부드럽게...';   
     break;
 
    case menu[2]:  
     text = '깊고 진한 크림과 함께';         
     break;
 
    case menu[3]: 
     text = '달콤한 분위기와 함께 커피한잔'; 
     break;
 
    case menu[4]: 
     text = '쓰디쓴 인생과 함께...';         
     break;
 
    default:
      text = '난 그냥 물이나 한잔...';
     break;
 } 
 //  console.log(text);

   let myP = document.getElementsByTagName('p')[0]; // p{}
   myP.innerHTML = text;
};


var myBtn = document.getElementById('coffeeMenu'); //#coffeeMenu{}
myBtn.addEventListener('click',function(){
  myMenu();
});

//  js: if,switch 
//  css: Transform, animation 

//  while, do-while,
//  for, for-in, for-of, forEach
