var express = require('express');
var router = express.Router();
var classifyControllerer = require('./../controllers/classify.js');
var userControllerer = require('./../controllers/user.js');
var articleControllerer = require('./../controllers/article.js');
var authController = require('./../controllers/auth.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/classify',classifyControllerer.insert);
router.put('/classify',classifyControllerer.update);
router.delete('/classify',classifyControllerer.delete);
router.post('/user',userControllerer.insert);
router.put('/user',userControllerer.update);
router.delete('/user',userControllerer.delete);
router.post('/article',articleControllerer.insert);
router.put('/article',articleControllerer.update);
router.delete('/article',articleControllerer.delete);
router.post('/login',authController.login);
router.post('/out',authController.out);
module.exports = router;
