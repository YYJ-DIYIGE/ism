const article = require('./../models/article.js');
const Classify = require('./../models/classify.js');
const {formatTime}  = require('./../utils/formdate.js');
const articleController = {
  show: async function(req,res,next){
    try{
      const articles = await article.all()
        .leftJoin('classify','article.classify_id','classify.id')
        .column({'article_id':'article.classify_id'},'article.title',"article.id",
          'classify.name','article.content','article.created_time',
          'article.updated_time')
      res.locals.article = articles;
      res.json({ code: 200, data: articles});
    }catch(e){
      console.log(e)
      res.locals.error = e;
      res.json({ code: 0, message: 'error' })
    }
  },
  insert: async function(req,res,next){
    let title = req.body.title;
    let content = req.body.content;
    let classify_id =  req.body.classify_id;
    let created_time = new Date();
    console.log(classify_id)
    if(!title || !content || !classify_id){
      res.json({ code: 0, message: '缺少必要参数' });
      return
    }
    
    try{
      const users = await article.insert({ 
        title,content,classify_id,created_time
      });
      res.json({ code: 200, data: users})
    }catch(e){
      console.log(e)
      res.json({ code: 0, message: '内部错误' })
    }
  },
  update: async function(req,res,next){
    let id = req.params.id;
    let classify_id = req.body.classify_id;
    let title = req.body.title;
    let content = req.body.content;
    console.log(id,title)
    if(!title || !id || !content || !classify_id ){
      res.json({ code: 0, data: 'params empty!' });
      return
    }

    try{
      const user = await article.update(id,{ title,content,classify_id});
      res.json({ code: 200, data: user})
    }catch(e){
      res.json({ code: 0, data: e })
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    console.log(id)
    if(!id){
      res.json({ code: 0, data: 'params empty!' });
      return
    }
    try{
      const user = await article.delete(id);
      res.json({ code: 200, data: user})
    }catch(e){
      res.json({ code: 0, data: e })
    }
  },
  renderarticleCreate: async function(req,res,next) {
    try{
      const Classifys = await Classify.all()
      res.locals.Classifys = Classifys;
      res.render('admin/articleCreate');
    }catch(e){
      console.log(e)
      res.locals.error = e;
      res.render('error',)
    }
  },
  renderexhibition: async function(req,res,next) {
    try{
      const Class = await Classify.all();
      res.locals.Class = Class;
      const articles = await article.all()
      res.locals.articles = articles.map(data=>{
        data.time_es = formatTime(data.created_time)
        return data
      });
      res.render('exhibition');
    }catch(e){
      console.log(e)
      res.locals.error = e;
      res.render('error',)
    }
  },
  renderEdit: async function(req,res,next) {
    try{
      const Class = await Classify.all();
      res.locals.Class = Class;
      let id = req.params.id;
      const articles = await article.select({ classify_id:id });
      console.log(articles)
      res.locals.articles = articles.map(data=>{
        data.time_es = formatTime(data.created_time)
        return data
      });
      res.render('exhibitionEdit');
    }catch(e){
      console.log(e)
      res.locals.error = e;
      res.render('error',)
    }
  },
  renderShow: async function(req,res,next) {
     try{
      let id = req.params.id;
      const articles = await article.select({ classify_id:id });
      console.log(articles,111)
      res.locals.articles = articles.map(data=>{
        data.time_es = formatTime(data.created_time)
        return data
      });
      res.json({code: 200, data: articles});
      }catch(e){
      console.log(e)
      res.locals.error = e;
      res.render('error',)
    }
  },
  renderarticleEdit: async function(req,res,next) {
    try{
      const Classifys = await Classify.all()
      res.locals.Classifys = Classifys;
      let id = req.params.id;
      const articles = await article.select({id});
      res.locals.articles = articles[0];
      res.locals.nav = {id};
     res.json({ code: 200, data: articles});
    }catch(e){
      res.locals.error = e;
      res.render('error')
    }
  },
  rendercontent:async function(req,res,next){
   try{
    const Class = await Classify.all();
    res.locals.Class = Class;
    let id = req.params.id;
    const articles = await article.select({id });
    res.locals.articles = articles[0];
    res.locals.nav = {id};
    res.render('content');
   }catch(e){
    res.locals.error = e;
    res.render('error')
   }
  },
  item: async function(req,res,next){
    try{
      const id = req.params.id;
      if (!id) {
        res.json({ code: 0, message: '缺少ID' });
        return
      }
      const articles = await article.select({id });
      const articless = articles[0];
      console.log(articless)
      res.json({
        code:200,
        data: articless
      })
    }catch(e){
      console.log(e)
      res.json({ 
        code: 0,
        message: '内部错误'
      })
    }
  }

}

module.exports = articleController;
