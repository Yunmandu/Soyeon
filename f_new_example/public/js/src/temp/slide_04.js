// slide_04.js
(function($){
  //이미지 경로, 이미지파일명
  const url = "../img/" //html문서 기준
  let sample = {
                title:'slide title_01',
                content:'slide content ......',
                linkTest:'바로가기',
                link:'http://naver.com',
                bgimg:'myslideImage_01.jpg'
               };



  const imgList = [
    {title:'slide title_01', content:'slide content 웅앵우애웅.',
    linkTest:'첫번째 바로가기', link:'http://naver.com',
    bgimg:'myslideImage_01.jpg'},

    {title:'slide title_02', content:'slide coten웅앵',
    linkTest:'두번째 바로가기', link:'http://daum.net',
    bgimg:'myslideImage_02.jpg'},

    {title:'slide title_03', content:'slide coten웅앵웅앵앵',
    linkTest:'세번째 바로가기', link:'http://google.com',
    bgimg:'myslideImage_03.jpg'},

    {title:'slide title_04', content:'slide 큐브 웅앵웅웅',
    linkTest:'네번째 바로가기', link:'http://www.cubeent.co.kr/',
    bgimg:'myslideImage_04.jpg'},

    {title:'slide title_05', content:'slide 큐비웅앵웅앵웅',
    linkTest:'다섯번째 바로가기', link:'http://www.cubee.co.kr/',
    bgimg:'myslideImage_05.jpg'},
   ];
//-----------------------------------------
//기본선택자 및 내용(기본틀) 생성
 const slide_04 = $('#viewBox_04');
 slide_04.append('<div class="slide_form"></div>');
 const slideForm = slide_04.children('.slide_form');
 slideForm.append('<ul></ul>');
 const slideGuide = slideForm.children('ul');

 let imglen = imgList.length;
 let slideCon = '<dl><dt></dt><dd class="con"></dd>\
 <dd class="link"><a herf="#"></a></dd></dl>';

 for(let i = 0; i < imgList.length; i++){
 slideGuide.append(`<li class="slide4th_0${i+1}"></li>`);
 //슬라이드가 10개 이상은 if문 쓰기
 let li_nth = slideGuide.children('li').eq(i);
//  li_nth.text(imgList[i].title)

 li_nth.html(slideCon);

 li_nth.css({'backgroundImage':`url(${url + imgList[i].bgimg})`});
//  li_nth.css({'backgroundImage':"url("+ url + imgList[i]+")"});

 li_nth.find('dt').text(imgList[i].title);
 li_nth.find('.con').text(imgList[i].content);
 let link = li_nth.find('.link').children('a');
 link.text(imgList[i].linkTest);
 link.attr({'href':imgList[i].link,'target':'_blank'})
 }
 let cloneLi = slideGuide.children('li').eq(-1).clone(true);
 cloneLi.prependTo(slideGuide);

 imglen++; //li 마지막요소 추가하여 갯수 다시파악
 const slide4thLi = slideGuide.children('li');

 slideGuide.css({'width':100 * imglen+'%'});
 slide4thLi.css({'width':100 / imglen +'%',
                               'boxSizing':'border-box',
                               'border':'1px solid #28f'});


})(jQuery);