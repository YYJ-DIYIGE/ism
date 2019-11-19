const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#userSubmit').on('click',this.submit);

  },
  submit:function(){
    let id = $('#userId').val();
    console.log(id)
    let name = $('#userName').val();
    if (!name || !id) {
      alert('请输入必要参数');
      return;
    }
    $.ajax({
      type: 'PUT',
      url : '/api/classify',
      data:{name,id},
      beforeSend:()=>{
        $('#userSubmit').attr('disable', true);
      },
      success: res =>{
        if (res.code === 200) {
          alert('修改成功');
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