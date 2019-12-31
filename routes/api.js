var express = require('express');
var router = express.Router();
var classifyControllerer = require('./../controllers/classify.js');
var userControllerer = require('./../controllers/user.js');
var articleControllerer = require('./../controllers/article.js');
var authController = require('./../controllers/auth.js');
var middlewrers = require('./../middlewrers/auth.js')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/classify',middlewrers,classifyControllerer.show);
router.post('/classify',classifyControllerer.insert);
router.put('/classify/:id',classifyControllerer.update);
router.delete('/classify/:id',classifyControllerer.delete);

router.get('/user',middlewrers,userControllerer.all);
router.post('/user',middlewrers,userControllerer.insert);
router.put('/user/:id',middlewrers,userControllerer.update);
router.delete('/user/:id',middlewrers,userControllerer.delete);

router.get('/article',articleControllerer.show);
router.post('/article',articleControllerer.insert);
router.put('/article/:id',articleControllerer.update);
router.delete('/article/:id',articleControllerer.delete);
router.get('/article/:id',articleControllerer.item);

router.post('/login',authController.login);
router.post('/out',authController.out);
module.exports = router;
