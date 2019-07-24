import React, { Component } from "react"
import Tuijian from "./ChildHome/Tuijian.jsx"
import Jujia from "./ChildHome/Jujia.jsx"
import Fuzhuang from "./ChildHome/Fuzhuang.jsx"
import Xiexue from "./ChildHome/Xiexue.jsx"
import Baolei from "./ChildHome/Baolei.jsx"
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Input, Menu } from 'antd';
require('../../iconfont/iconfont.css');
require('./index.css');
const { Search } = Input;

class Home extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    name: "Tuijian",
                    path: "/home/tuijian",
                    title: "推荐",
                },
                {
                    name: "Jujia",
                    path: "/home/jujia",
                    title: "居家",
                },
                {
                    name: "Fuzhuang",
                    path: "/home/fuzhuang",
                    title: "服装",
                },
                {
                    name: "Xiexue",
                    path: "/home/xiexue",
                    title: "鞋靴",
                },
                {
                    name: "Baolei",
                    path: "/home/baolei",
                    title: "包类",
                }
            ],
            current: 'Tuijian'
        }
        // 改变This指向
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(data) {
        this.setState({
            current: data.key
        })
        // console.log(data);
        // 路由跳转
        // 获取点击的路由路径
        let currentRouter = this.state.data.filter(item => item.name === data.key)[0];
        this.props.history.push(currentRouter.path)

    }
    render() {
        let { data, current } = this.state
        return (
            <div className="Home">
                <div className="header">
                    <img src={[require("../../images/qiehuan.jpg")]} alt="" />
                    <Search
                        placeholder="潮流新品特卖"
                        onSearch={value => console.log(value)}
                        style={{ width: 320 }}
                    />
                    <i className="iconfont icon-xiaoxi"></i>
                </div>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{ display: "flex", justifyContent: "space-around", borderBottom: "none", }}>
                    {
                        data.map(item => {
                            return <Menu.Item key={item.name}>
                                {item.title}
                            </Menu.Item>
                        })
                    }
                </Menu>
                <Switch>
                    <Route path="/home/tuijian" component={Tuijian} />
                    <Route path="/home/jujia" component={Jujia} />
                    <Route path="/home/Fuzhuang" component={Fuzhuang} />
                    <Route path="/home/Xiexue" component={Xiexue} />
                    <Route path="/home/Baolei" component={Baolei} />
                    <Redirect from="/home" to="/home/tuijian" exact />
                </Switch>
            </div>
        )
    }
}
export default Home;