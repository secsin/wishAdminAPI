var express = require ('express');                        // 引入Express对象
var router = express.Router ();                           // 引入路由对象
// 引入自定义的controller
const WishController = require('../controllers/wish');
router.get ('/', WishController.list);                // 定义许愿列表路由，GET请求
router.get ('/:id', WishController.info);             // 定义单条许愿路由，GET请求
router.post ('/', WishController.add);                // 定义添加许愿路由，POST请求
router.put ('/', WishController.update);              // 定义修改许愿路由，PUT请求
router.delete ('/', WishController.remove);           // 定义删除许愿路由，DELETE请求
module.exports = router;                              // 导出路由，供app.js文件调用