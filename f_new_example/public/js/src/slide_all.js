//slide_all.js

(function($){
  const body = $('body');
  const wrap = $('#wrap');
  wrap.append('<section id = "viewBox"></section>');
  const vieWBox = wrap.find('#viewBox');

  vieWBox.load('./temp/slideAll_viewBox.html',function(){
    body.append('<script src="../js/src/temp/slideAll_viewBox.js"></script>');
  });
})(jQuery);