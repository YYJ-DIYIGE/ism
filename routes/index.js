var express = require('express');
var router = express.Router();
var userControllerer = require('./../controllers/user.js');
var classifyControllerer = require('./../controllers/classify.js');
var articleControllerer = require('./../controllers/article.js');
var authMiddleware = require('./../middlewrers/auth.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/exhibibtion',articleControllerer.renderexhibition);
router.get('/index',authMiddleware,classifyControllerer.renderindex);
router.get('/admin/user',authMiddleware,userControllerer.show);
router.get('/admin/user/:id/edit',authMiddleware,userControllerer.renderUserEdit);
router.get('/admin/user/create',authMiddleware,userControllerer.renderUserCreate);
router.get('/admin/classify',authMiddleware,classifyControllerer.show);
router.get('/admin/classify/classCreate',authMiddleware,classifyControllerer.renderClassCreate);
router.get('/admin/classify/:id/classEdit',authMiddleware,classifyControllerer.renderUserEdit);
router.get('/admin/article',authMiddleware,articleControllerer.show);
router.get('/admin/article/create',authMiddleware,articleControllerer.renderarticleCreate);
router.get('/admin/article/:id/articleEdit',authMiddleware,articleControllerer.renderarticleEdit);
router.get('/exhibibtion/:id/content',articleControllerer.rendercontent);
router.get('/exhibibtion/:id/edit',articleControllerer.renderEdit);
module.exports = router;