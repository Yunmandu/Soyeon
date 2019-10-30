//database_main.js
(function($){
 const body = $('body');
 const wrap = $('#wrap');

 wrap.append('<section id = "viewBox"></section>');
 const view = $('#viewBox');

 const JsLink = (temp) => {
   return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
 };

 viewBox.lode('./temp/database_sild.html',() => {
  JsLink('database_slide');
 });

})(jQuery);