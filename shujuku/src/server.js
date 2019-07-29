// 引入express模块
const express = require("express");

// 引入端口文件
const {
    PORT
} = require("./config.json");

const app = express();

// 引入路由
let allRouter = require('./api');
app.use(allRouter)

// 设置静态服务器
app.use(express.static("./"));

// 设置端口监听
app.listen(PORT, () => {
    console.log('server is running');
})