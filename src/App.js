import React, { Component } from 'react';
import Zhuye from "./xuanran/zhuye/index.jsx"
import Shezhi from "./xuanran/shezhi/index.jsx"
import Dingdan from "./xuanran/dingdanxiangqing/index.jsx"
import Xiaoxi from "./xuanran/xiaoxi/index.jsx"
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
        }
      ],
      path: "/zhuye/home",
    }

  }
  render() {
    let { data } = this.state
    return (
      <div className="App">
        <Switch>
          <Route path="/zhuye" component={Zhuye}></Route>
          <Route path="/shezhi" component={Shezhi}></Route>
          <Route path="/dingdan" component={Dingdan}></Route>
          <Route path="/xiaoxi" component={Xiaoxi}></Route>
          <Redirect from="/" to="/zhuye/home"></Redirect>
        </Switch>
      </div>
    );
  }
}

App = withRouter(App);
export default App;
