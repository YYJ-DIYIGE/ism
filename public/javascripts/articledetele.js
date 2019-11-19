const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('.dele').on('click',this.del);
  },
  del:function(){
   let id = $(this).data('id');
   console.log(id)
    $.ajax({
      type: 'DELETE',
      url: '/api/article',
      data:{id},
      success: res =>{
        alert('删除了');
        location.reload();
      },
      error: err =>{
        console.log(err)
      }
    })
  }
}
PAGE.init();