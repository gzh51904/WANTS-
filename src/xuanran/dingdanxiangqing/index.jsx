import React, { Component } from "react"
import { Switch, Route, Redirect } from 'react-router-dom';
import { Menu } from "antd"
import Daifukuan from "./daifukuan/index.jsx"
import Daifahuo from "./daifahuo/index.jsx"
import Daishouhuo from "./daishouhuo/index.jsx"
import Daipingjia from "./daipingjia/index.jsx"
import Quanbu from "./quanbu/index.jsx"
require('./index.css');

class Dingdan extends Component {
    constructor() {
        super();
        this.state = {
            fanhui: "/zhuye/mine",
            data: [
                {
                    name: "Daifukuan",
                    path: "/dingdan/daifukuan",
                    title: "待付款",
                },
                {
                    name: "Daifahuo",
                    path: "/dingdan/daifahuo",
                    title: "待发货",
                },
                {
                    name: "Daishouhuo",
                    path: "/dingdan/daishouhuo",
                    title: "待收货",
                },
                {
                    name: "Daipingjia",
                    path: "/dingdan/daipingjia",
                    title: "待评价",
                },
                {
                    name: "Quanbu",
                    path: "/dingdan/quanbu",
                    title: "全部",
                }
            ],
            current: ''
        }
        // 改变This指向
        this.handleClick = this.handleClick.bind(this)
        this.goto = this.goto.bind(this)
    }

    handleClick(data) {
        this.setState({
            current: data.key
        })
        let currentRouter = this.state.data.filter(item => item.name === data.key)[0];
        this.props.history.push(currentRouter.path)
    }

    componentWillMount() {
        let res = this.props.location.query
        this.setState({
            current: res
        })
    }

    goto(fanhui) {
        let { history } = this.props
        history.push(fanhui)
    }

    render() {
        let { data, fanhui, current } = this.state
        return (
            <div className="Dingdanxiangqing">
                <div>
                    <div className="header">
                        <i className="iconfont icon-fanhui" onClick={this.goto.bind(this, fanhui)}></i>
                        <span>我的订单</span>
                    </div>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{ display: "flex", justifyContent: "space-between", borderBottom: "none", }}>
                        {
                            data.map(item => {
                                return <Menu.Item key={item.name} style={{ padding: "0" }}>
                                    {item.title}
                                </Menu.Item>
                            })
                        }
                    </Menu>
                </div>
                <Switch>
                    <Route path="/dingdan/daifukuan" component={Daifukuan} />
                    <Route path="/dingdan/daifahuo" component={Daifukuan} />
                    <Route path="/dingdan/daishouhuo" component={Daishouhuo} />
                    <Route path="/dingdan/daipingjia" component={Daipingjia} />
                    <Route path="/dingdan/quanbu" component={Quanbu} />
                    {
                        data.map(item => {
                            return item.name === current ? <Redirect to={item.path} key={item.name}></Redirect> : ""
                        })

                    }
                </Switch>
            </div>
        )
    }
}
export default Dingdan;