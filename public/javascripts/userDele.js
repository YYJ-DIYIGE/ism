const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('.dele').on('click',this.del);
  },
  del:function(){
   let id = $(this).data('id');
    $.ajax({
      type: 'DELETE',
      url: '/api/user',
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