const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#articleSubmit').on('click',this.submit);
  },
  submit:function(){
    let title = $('#articleTitle').val();
    let classify_id = $('#articleID').val();
    let id = $('#articleId').val();
    let content = $('#articleContent').val();
    if (!title || !classify_id || !content) {
      alert('请输入必要参数');
      return;
    }
    $.ajax({
      type: 'PUT',
      url: '/api/article',
      data:{title,id,content,classify_id},
      beforeSend:()=>{
        $('#articleSubmit').attr('disable', true);
      },
      success: res =>{
        if (res.code === 200) {
          alert('修改成功');
          location.href = '/admin/article';
        }else {
           alert('res.message!!!');
        }
      },
      error: err =>{
        console.log(err);
      },
      complete:() =>{
        $('#articleSubmit').attr('disable', false);
      },
    })
  }
}
PAGE.init();
