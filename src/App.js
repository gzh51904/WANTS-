import React, { Component } from 'react';
import Zhuye from "./xuanran/zhuye/index.jsx"
import Shezhi from "./xuanran/shezhi/index.jsx"
import Dingdan from "./xuanran/dingdanxiangqing/index.jsx"
import Xiaoxi from "./xuanran/xiaoxi/index.jsx"
import Sousuo from "./xuanran/sousuo/index.jsx"
import Login from "./xuanran/login/index.jsx"
import Lists from "./xuanran/lists/index.jsx"
import Goods from "./xuanran/goods/index.jsx"
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
require('./App.css');

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Zhuye",
          path: "/zhuye",
          title: "主页",
        },
        {
          name: "Shezhi",
          path: "/shezhi",
          title: "系统设置",
        },
        {
          name: "Dingdan",
          path: "/dingdan",
          title: "我的订单",
        },
        {
          name: "Xiaoxi",
          path: "/xiaoxi",
          title: "我的订单",
        },
        {
          name: "Sousuo",
          path: "/sousuo",
          title: "搜索输入框",
        },
        {
          name: "Login",
          path: "/login",
          title: "登陆",
        },
        {
          name: "Lists",
          path: "/lists",
          title: "商品分类页",
        },
        {
          name: "Goods",
          path: "/goods",
          title: "商品详情页",
        }
      ],
      path: "/zhuye/home",
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/zhuye" component={Zhuye}></Route>
          <Route path="/shezhi" component={Shezhi}></Route>
          <Route path="/dingdan" component={Dingdan}></Route>
          <Route path="/xiaoxi" component={Xiaoxi}></Route>
          <Route path="/sousuo" component={Sousuo}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/lists/:id" component={Lists}></Route>
          <Route path="/goods/:id" component={Goods}></Route>
          <Redirect from="/" to="/zhuye/home/tuijian"></Redirect>
        </Switch>
      </div>
    );
  }
}

App = withRouter(App);
export default App;
