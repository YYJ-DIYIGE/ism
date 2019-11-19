const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#userSubmit').on('click',this.submit);
        console.log('132')
  },
  submit:function(){

    let name = $('#userName').val();
    if (!name) {
      alert('请输入必要参数');
      return;
    }
    $.ajax({
      type: 'POST',
      url : '/api/classify',
      data:{name},
      beforeSend:()=>{
        $('#userSubmit').attr('disable', true);
      },
      success: res =>{
        if (res.code === 200) {
          alert('新增成功');
          location.href = '/admin/classify';
        }else {
           alert('res.message');
         }
      },
      error: err =>{
        console.log(err);
      },
      complete:() =>{
          $('#userSubmit').attr('disable', false);
      },
    })
  }
}
PAGE.init();