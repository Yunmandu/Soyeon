//join_check.js
(function($){
  //form 그닝에서 사용하는 jQuery 메소드
  //val(); -> value값을 가져오는 기능
  // $('#box').hasClass('link') -> class의 이름을 유무 판단
  // is(':checked') -> 속성 기능의 상태 파악
  // prop('checked',true) -> 속성의 상황묘사해서 역할 부여

  //-------------------------------------------------------------
  //전체 동의를 클릭하면 전체가 체크되게 만들기
  const allCheck=$('#allCheck');
  const cbSel = $('.cb_sel');
  let ck;

  const allCheckT = function(ck){
    if(ck){
      cbSel.prop('checked', true);      cbSel.attr('checked', true);
      allCheck.prop('checked', true);   allCheck.attr('checked', true);
     }else{
    cbSel.prop('checked', false);     cbSel.attr('checked', false);
    allCheck.prop('checked', false);  allCheck.attr('checked', false);
     }
  }
 //---------------------------------------------------------------
 allCheck.on('click',function(e){
  ck = allCheck.is(':checked');
  allCheckT(ck);
 })

 //----------------------------------------------------------------

  cbSel.on('click',function(){
   
    let idCheck = $(this).attr('id');
    let idN = $('#' + idCheck);
    let idnIs = idN.is(':checked');
    (idnIs) ? idN.attr('checked',true).prop('checked',true)://() ? 참 : 거짓
    idN.attr('checked',false).prop('checked',false);

    

//------------------------------------------------------------------
    for(let i = 0; i<cbSel.length; i++){
      let ck = cbSel.eq(i).is(':checked');
      console.log(ck);
      if(ck == false){
        allCheck.prop('checked', false);
        allCheck.attr('checkde', false);
        break;
        //break 멈추고 빠져나가기 : continue 건너뛰기
      }else{
        allCheck.prop('checked', true);
        allCheck.attr('checkde', true);
      }
    }
  //  cbSel.each(function(data){
  //   ck = $(this).is(':checked');
  //    console.log(ck);
  //  });
  });

})(jQuery);