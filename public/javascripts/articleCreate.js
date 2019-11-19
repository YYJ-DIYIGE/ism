const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
   $('#articleSubmit').on('click',this.submit);
  },
  submit:function(){
    let title = $('#articleTitle').val();
    let id = $('#articleID').val();
    let content = $('#articleContent').val();
    if (!title || !id || !content) {
      alert('缺少重要参数！！！');
      return
    }
    $.ajax({
      type: 'POST',
      url: '/api/article',
      data:{title,content,id},
       beforeSend:()=>{
        $('#articleSubmit').attr('disable', true);
      },
     success: res =>{
        if (res.code === 200) {
          alert('新增成功');
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