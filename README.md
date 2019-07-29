This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 项目：wants（webapp +后台管理系统）

### 已上线

项目官网：http://www.wantscart.com/

webApp上线地址：http://47.103.6.17:1905

后台管理系统上线地址：http://47.103.6.17:1906

github仓库地址：git@github.com:gzh51904/gaosijiaoyu.git

### 团队分工

组长：程健

组员：杨蕾、黄常平

负责模块说明：
程 健：统筹项目，搭建项目构架，底层路由编写， 性能优化，实现页面数据流逻辑，各模块功能实现、数据处理，修复BUG
杨 蕾：负责首页模块数据处理，前后端接口api测试,商品详情页、列表页、等页面UI渲染，后台页面数据处理、部分路由编写
黄常平：负责后台管理系统的构建，路由编写，数据处理，登录功能实现


### 项目目录

├─shujuku   ....................数据库文件  
│  └─src  
│      ├─api    ...............接口API
│      ├─db     ...............数据库类型文件 
│      └─utils  ...............token配置文件
│              
└─src
    │  App.css
    │  App.js
    │  App.test.js
    │  index.js
    │  serviceWorker.js
    │  
    ├─iconfont   ..............字体图标  
    ├─images     ..............图片文件
    ├─pages      ..............主页组件文件
    │  ├─Cart   ..............购物车组件
    │  ├─Home   ..............首页组件          
    │  └─Mine   ..............我的组件 
    ├─store      ..............路由配置文件
    └─xuanran    ..............各页面渲染组件
