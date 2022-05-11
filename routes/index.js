var express = require('express');
var router = express.Router();

// 引入自定义的controller
const IndexController = require('../controllers/index');
router.post ('/login', IndexController.login);      // 定义登录路由，POST请求

module.exports = router;
