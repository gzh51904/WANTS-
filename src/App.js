import React, { Component } from 'react';
import Home from "./pages/Home/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import Mine from "./pages/Mine/index.jsx";
import Login from "./pages/Login/index.jsx"
import { Route, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
require('./App.css');
require('./iconfont/iconfont.css');

let AllRouter = {
  Home,
  Cart,
  Mine
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Home",
          path: "/home",
          title: "首页",
          icon: "iconfont icon-shouye"
        },
        {
          name: "Cart",
          path: "/cart",
          title: "购物车",
          icon: "iconfont icon-gouwuchekong"
        },
        {
          name: "Mine",
          path: "/mine",
          title: "我的",
          icon: "iconfont icon-wode"
        }

      ],
      isSelect: 0
    }

  }

  render() {
    let { data } = this.state
    return (
      <div className="App" id="App">
        {/* 路由配置 */}
        <Switch>
          {
            data.map(item => <Route key={item.name} path={item.path} component={AllRouter[item.name]} />)
          }
          <Route path="/login" component={Login}></Route>
          <Redirect from="/" to="/home" exact />
        </Switch>

        <ul className="Appul">
          {
            data.map((item, i) => {
              return <NavLink className='Appli'
                activeStyle={{ color: 'yellow' }}
                key={item.name} to={item.path}>
                <i className={item.icon}></i>
                <span> {item.title}</span>
              </NavLink>

            })
          }
        </ul>

      </div>
    );
  }
}

App = withRouter(App);
export default App;
