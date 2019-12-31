const Classify = require('./../models/classify.js');

const classifyController = {
  show: async function(req,res,next){
    try{
      const Class = await Classify.all();
      res.locals.Class = Class;
      res.json({ code: 200, data: Class});
    }catch(e){
      res.json({ code: 0, message: "内部错误"});
      console.log(e)
      res.locals.error = e;
      res.render('error')
    }
  },
  insert: async function(req,res,next){
    let name = req.body.name;
    if(!name){
      res.json({ code: 0, message: '缺少必要参数' });
      return
    }
    try{
      const classe = await Classify.insert({ 
        name
      });
      res.json({ code: 200, data: classe})
    }catch(e){
      console.log(e)
      res.json({ code: 0, message: '内部错误' })
    }
  },
  update: async function(req,res,next){
    let id = req.params.id;
    let name = req.body.name;
    if(!name || !id){
      res.json({ code: 0, data: 'params empty!' });
      return
    }

    try{
      const classe = await Classify.update(id,{name});
      res.json({ code: 200, data: classe})
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
      const classe = await Classify.delete(id);
      res.json({ code: 200, data: classe})
    }catch(e){
      res.json({ code: 0, data: e })
    }
  },
  renderClassCreate: function(req,res,next) {
    res.render('admin/classCreate');
  },
  renderindex: async function(req,res,next) {
     try{
      const Class = await Classify.all();
      res.locals.Class = Class;
      res.render('index');
    }catch(e){
      console.log(e)
      res.locals.error = e;
      res.render('error',)
    }
  },
  renderUserEdit: async function(req,res,next) {
    try{
      let id = req.params.id;
      const users = await Classify.select({ id });
      res.locals.user = users[0];
      res.locals.nav = {id};
      res.render('admin/classEdit');
    }catch(e){
      res.locals.error = e;
      res.render('error')
    }
  },
}
module.exports = classifyController;
