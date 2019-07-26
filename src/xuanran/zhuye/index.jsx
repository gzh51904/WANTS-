import React, { Component } from 'react';
import Home from "../../pages/Home/index.jsx"
import Cart from "../..//pages/Cart/index.jsx";
import Mine from "../../pages/Mine/index.jsx";
import Login from "../../pages/Login/index.jsx"
import { Route, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
require('./index.css');
require('../../iconfont/iconfont.css');

let AllRouter = {
    Home,
    Cart,
    Mine
}
class Zhuye extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    name: "Home",
                    path: "/zhuye/home",
                    title: "首页",
                    icon: "iconfont icon-shouye"
                },
                {
                    name: "Cart",
                    path: "/zhuye/cart",
                    title: "购物车",
                    icon: "iconfont icon-gouwuchekong"
                },
                {
                    name: "Mine",
                    path: "/zhuye/mine",
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
            <div className="Zhuye" id="Zhuye">
                <Switch>
                    {
                        data.map(item => <Route key={item.name} path={item.path} component={AllRouter[item.name]} />)
                    }
                    <Redirect from="/" to="/zhuye/home/tuijian" exact />
                </Switch>

                <ul className="Zhuyeul">
                    {
                        data.map((item, i) => {
                            return <NavLink className='Zhuyeli'
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

Zhuye = withRouter(Zhuye);
export default Zhuye;