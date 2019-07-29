import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from "../../pages/Home/index.jsx"
import Cart from "../..//pages/Cart/index.jsx";
import Mine from "../../pages/Mine/index.jsx";
import { Badge } from "antd"
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
            isSelect: 0,
        }

    }
    componentWillMount() {
        let phone = localStorage.getItem("phone")
        if (phone == null) {
            this.setState({
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
                        path: "/login",
                        title: "我的",
                        icon: "iconfont icon-wode"
                    }
                ]
            })
        }
    }
    render() {
        let { data, leg } = this.state
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
                            return item.path == "/zhuye/cart" ?
                                < NavLink className='Zhuyeli'
                                    activeStyle={{ color: 'yellow' }}
                                    key={item.name} to={item.path} style={{ position: "relative" }}>
                                    <div style={{ position: "absolute", right: "25px", top: "-10px" }}>
                                        <Badge count={this.props.state.goodslist.length}>
                                            <i className="head-example" />
                                        </Badge>
                                    </div>
                                    <i className={item.icon}></i>
                                    <span> {item.title}</span>
                                </NavLink> :
                                < NavLink className='Zhuyeli'
                                    activeStyle={{ color: 'yellow' }}
                                    key={item.name} to={item.path} >
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
// 获取改变后的值
let mapStateToProps = (state, ownprops) => {
    return {
        state
    }
}
// 改变值
let mapDispatchToProps = (dispatch, ownprops) => {
    return {

    }
}

Zhuye = connect(mapStateToProps, mapDispatchToProps)(Zhuye)
Zhuye = withRouter(Zhuye);
export default Zhuye;