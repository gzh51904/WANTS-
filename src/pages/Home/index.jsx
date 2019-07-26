import React, { Component } from "react"
import Tuijian from "./ChildHome/Tuijian.jsx"
import Jujia from "./ChildHome/Jujia.jsx"
import Fuzhuang from "./ChildHome/Fuzhuang.jsx"
import Xiexue from "./ChildHome/Xiexue.jsx"
import Baolei from "./ChildHome/Baolei.jsx"
import { Switch, Route, Redirect } from 'react-router-dom';
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
                    path: "/zhuye/home/tuijian",
                    title: "推荐",
                },
                {
                    name: "Jujia",
                    path: "/zhuye/home/jujia",
                    title: "居家",
                },
                {
                    name: "Fuzhuang",
                    path: "/zhuye/home/fuzhuang",
                    title: "服装",
                },
                {
                    name: "Xiexue",
                    path: "/zhuye/home/xiexue",
                    title: "鞋靴",
                },
                {
                    name: "Baolei",
                    path: "/zhuye/home/baolei",
                    title: "包类",
                }
            ],
            xiaoxi: "/xiaoxi",
            current: 'Tuijian',
            sousuo: "/sousuo"

        }
        // 改变This指向
        this.handleClick = this.handleClick.bind(this)
        this.goto = this.goto.bind(this)
        this.goto1 = this.goto1.bind(this)
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
    goto(xiaoxi) {
        this.props.history.push({ pathname: xiaoxi, query: "/zhuye/home" })
    }
    goto1(sousuo) {
        this.props.history.push(sousuo)
    }
    render() {
        let { data, current, xiaoxi, sousuo } = this.state
        return (
            <div className="Home">
                <div>
                    <div className="header">
                        <img src={[require("../../images/qiehuan.jpg")]} alt="" />
                        <Search
                            placeholder="潮流新品特卖"
                            onSearch={value => console.log(value)}
                            style={{ width: 300 }} onClick={this.goto1.bind(this, sousuo)}
                        />
                        <i className="iconfont icon-xiaoxi" onClick={this.goto.bind(this, xiaoxi)}></i>
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
                </div>
                <Switch>
                    <Route path="/zhuye/home/tuijian" component={Tuijian} />
                    <Route path="/zhuye/home/jujia" component={Jujia} />
                    <Route path="/zhuye/home/Fuzhuang" component={Fuzhuang} />
                    <Route path="/zhuye/home/Xiexue" component={Xiexue} />
                    <Route path="/zhuye/home/Baolei" component={Baolei} />
                    <Redirect from="/home" to="/zhuye/home/tuijian" exact />
                </Switch>
            </div>
        )
    }
}
export default Home;