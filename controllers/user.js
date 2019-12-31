const User = require('./../models/user.js');
const {formatTime}  = require('./../utils/formdate.js');

const userController = {
  all: async function(req,res,next){
    try{
      console.log(123)
      const users = await User.all();
        res.locals.users = users.map((data)=>{
        data.created_time = formatTime(data.created_time);
        return data
      });
      res.json({ code: 200, data: users})
    }catch(e){
      console.log(e)
      res.json({ code: 0, message: '内部错误' })
    }
  },
  insert: async function(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    console.log(name,phone,password)
    let created_time = new Date();
    if(!name || !phone || !password){
      res.json({ code: 0, message: '缺少必要参数' });
      return
    }
    
    try{
      const users = await User.insert({ 
        name, phone, password, created_time
      });
      res.json({ code: 200, data: users})
    }catch(e){
      console.log(e)
      res.json({ code: 0, message: '内部错误' })
    }
  },
  update: async function(req,res,next){
    let id = req.params.id;
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    console.log(id,name,phone,password)
    if(!name || !id || !phone || !password){
      res.json({ code: 0, data: 'params empty!' });
      return
    }

    try{
      const user = await User.update(id,{ name,phone,password});
      res.json({ code: 200, data: user})
    }catch(e){
      res.json({ code: 0, data: e })
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    if(!id){
      res.json({ code: 0, data: 'params empty!' });
      return
    }

    try{
      const user = await User.delete(id);
      res.json({ code: 200, data: user})
    }catch(e){
      res.json({ code: 0, data: e })
    }
  },
  renderUserCreate: function(req,res,next) {
    res.render('admin/create');
  },
  renderUserEdit: async function(req,res,next) {
    try{
      let id = req.params.id;
      const users = await User.select({ id });
      res.locals.user = users[0];
      res.locals.nav = {id};
      res.render('admin/edit');
    }catch(e){
      res.locals.error = e;
      res.render('error')
    }
  },

}

module.exports = userController;
