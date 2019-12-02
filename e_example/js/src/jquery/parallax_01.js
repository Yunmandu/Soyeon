(function($){
  let win=$(window);
  const vb=$('#viewBox');
  let par=[];
  for(let i=0;i<vb.children('div').length;i++){
    let p='.par_0'+i;
    par.push(p);
  }
  let winW=win.outerWidth();
  let winH=win.outerHeight();

  win.on('scroll',function(){
    let scroll=win.scrollTop();
    // console.log(scroll);
    for(let j=0;j<par.length;j++){
      $(par[j]).css({top:-scroll/(par.length-j)});
    }

    const conBox = $('#conBox');
    const conList = conBox.find('li');
    const liOffset = [];


    for(let i=0; i<conList.length; i++){
     //liOffset.push(conList.eq(i).offset().top);
     liOffset[i] = conList.eq(i).offset().top;
    }
    // console.log(liOffset);

    win.on('scroll', function(e){
      e.preventDefault();
      let scroll = win.scrollTop();
      let scRel =[];
      for(let i=0; i<conList.length; i++){
        scRel[i] = liOffset[i] - scroll - (winH/2) ;
        conList.eq(i).find('span').css({transform:'translateX(-'+ scRel[i]/2 + 'px)'});
      }

    //  console.log(scRel[0]);
    })

  });
})(jQuery);