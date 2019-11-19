 const PAGE = {
    init:function(){
      this.bind();
    },
    bind:function(){
      $('#userSubmit').on('click',this.Submit);
    },
    Submit:function(){
      let phone = $('#userPhone').val().trim();
      let password = $('#userPassword').val().trim();
      if (!phone || !password) {
        alert('请输入账号密码')
        return
      }
      $.ajax({
        type: 'POST',
        url: '/api/login',
        data:{phone,password},
        beforeSend: function() {
          $("#userSubmit").attr("disabled",true);
        },
        success: (res) => {
          if(res.code === 200) {
            alert('登陆成功！');
            location.href = '/admin/classify';
          }else {
            alert('请输入正确的账号密码！');
           }
        },
        error: (err) => {
        console.log(err)
        },
        complete: function() {
          $("#userSubmit").attr("disabled",false);
        }
      }),
      $('#userPhone').val('');
      $('#userPassword').val('');
    }
  }
  PAGE.init();