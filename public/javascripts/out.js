  const AGE = {
    init:function(){
      this.bind();
    },
    bind:function(){
     $('#out').on('click',this.out);
    },
    out:function(){
      console.log(123123)
      $.ajax({
        type: 'POST',
        url: '/api/out',
        success: res =>{
          location.href = 'http://localhost:3000';
        },
        error: err =>{
          console.log(err)
        }
      })
    }
  }
AGE.init();