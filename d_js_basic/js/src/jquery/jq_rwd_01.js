(function($){
 // 디바이스 정의
 let mob = 480, tab = 768, pc = 1280 , laptop = 1366;
 let mySet = ['mobile','tablet','pc','laptop','pcfull'];


  //반응형 크기에따라 불러오는 파일 정의
  //mobile tablet pc laptop pcfull
  const wrap = $('#wrap');
  let tempFile = './rwd_temp/';

  const LoadFile = function(w){
    switch(w){
      case mySet[0]:
        wrap.load(tempFile + 'mob.html');
      break;
      
      case mySet[1]:
        wrap.load(tempFile + 'tab.html');
      break;

      case mySet[2]:
        wrap.load(tempFile + 'pcbase.html');
      break;

      case mySet[3]:
        wrap.load(tempFile + 'laptop.html');
      break;
      
      case mySet[4]:
        wrap.load(tempFile + 'pcfull.html');
      break;
    }//switch(w)
  }//LoadFile()

  //-----------------------------------------------------------------------
  // 현재 디바이스 크기 파악하여 정의
  // let mob = 480, tab = 768, pc = 1280 , laptop = 1366;

  let nowDevice = null;

  const DeviceCheck = function(w){

  if(w <= mob){nowDevice = mySet[0];
  }else if(w > mob && w <= tab){nowDevice = mySet[1];
  }else if(w > tab && w <= pc){nowDevice = mySet[2];
  }else if(w > pc && w <= laptop){nowDevice = mySet[3];
  }else{nowDevice = mySet[4];}
  // console.log(nowDevice);
  return nowDevice;
  }//DeviceCheck();
  //------------------------------------------------------------------------
  const win = $(window);
  let winW = win.outerWidth();
  // console.log(winW);
  // document.write(winW);
  
  let beforeDevice = DeviceCheck(winW);
  console.log('beforDevice',beforeDevice);
    LoadFile(beforeDevice);
  //-----------------------------------------------------------------------
  win.on('resize',function(){
    let nowWinW = win.outerWidth();
    // console.log(nowWinW);
    let afterDevice = DeviceCheck(nowWinW);

    console.log(afterDevice);

    if(winW !== nowWinW && beforeDevice !== afterDevice){
    location.reload(); //새로고침 
    }
  });

})(jQuery);