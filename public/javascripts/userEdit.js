 const PAGE = {
    init:function(){
      this.bind();
    },
    bind:function(){
      $('#userSubmit').on('click',this.submit);
    },
    submit:function(){
      let name = $('#userName').val().trim();
      let phone = $('#userPhone').val().trim();
      let password = $('#userPassword').val().trim();
      let id = $('#userId').val();
      if (!name || !phone || !password) {
         alert('请输入必要参数');
         return;
      }
      $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/api/user',
        data:{name, phone,password,id},
        beforeSend: () => {
          $('#userSubmit').attr("disabled",true);
        },
        success: (res) =>{
          if (res.code === 200) {
            alert('编辑成功！');
            location.href = '/admin/user';
          }else{
             alert('缺少重要参数！！！');
          }
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          $('#userSubmit').removeAttr('disabled');
        }
      })
    }
  }
  PAGE.init();