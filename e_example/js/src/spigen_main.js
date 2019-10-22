// spigen_main.js
(function($){
  const body = $('body')
  const header = $('#headBox');
  const adver = $('#viewBox');
  const content = $('#conBox');
  const footer = $('#footBox')
// ================================
  let tempUrl = "./spigen_main_pc/";
  

  header.load(tempUrl+ 'spigen_header.html',function(){
    //body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"> </script>');
    // $(this).after('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"> </script>');
  });
  adver.load(tempUrl+ 'spigen_main_adver.html');
  content.load(tempUrl+ 'spigen_main_content_01.html');
  footer.load(tempUrl+ 'spigen_footer.html');

  //setTimeout(function(){},'시간'); // 일정시간이ㅣ 지난후에 함수를 수행해라!

  setTimeout(function(){
    body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"> </script>');
  }, 100);


})(jQuery);