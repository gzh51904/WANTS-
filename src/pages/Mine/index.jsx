import React, { Component } from "react"
import axios from "axios"
require('./index.css');
require('../../iconfont/iconfont.css');
class Mine extends Component {
    constructor() {
        super();
        this.state = {
            shezhi: "/shezhi",
            quanbu: "/dingdan/quanbu",
            data: [],
            dingdan: [
                {
                    title: "待付款",
                    name: "Daifukuan",
                    icon: "iconfont icon-daifukuan"
                },
                {
                    title: "待发货",
                    name: "Daifahuo",
                    icon: "iconfont icon-daifahuo"
                },
                {
                    title: "待收货",
                    name: "Daishouhuo",
                    icon: "iconfont icon-daishouhuo"
                },
                {
                    title: "待评价",
                    name: "Daipingjia",
                    icon: "iconfont icon-daipingjia"
                }
            ],
            xinxi: [
                {
                    title: "优惠券",
                    icon: "iconfont icon-ziyuan"
                },
                {
                    title: "收货地址",
                    icon: "iconfont icon-shouhuodizhi"
                },
                {
                    title: "浏览记录",
                    icon: "iconfont icon-zuji-copy"
                },
                {
                    title: "线上投诉",
                    icon: "iconfont icon-erji"
                },
                {
                    title: "电话投诉",
                    icon: "iconfont icon-dianhua"
                },
                {
                    title: "商家入驻",
                    icon: "iconfont icon-shangjiaruzhu"
                },
            ],
            xiaoxi: "/xiaoxi",
        }
        this.goto = this.goto.bind(this)
        this.goto1 = this.goto1.bind(this)
        this.goto2 = this.goto2.bind(this)
        this.goto3 = this.goto3.bind(this)
    }
    async componentWillMount() {
        let { data } = await axios.get("http://m.wantscart.com/aggregator/4087/41/entity?token=w1N3dahtnIny9Vaty4WZskJiOcyIDdazFDMriw2bdfNGLwnlmbatVWYnyRXat6EDNszQmIc1gDOazgzdrhNjNdzMDLwv52MaiYmcn6ADdtz1mIsAAAAc%3D%3DQf&Access-Control-Allow-Origin=*");
        this.setState({
            data: data
        })

    }
    goto(shezhi) {
        let { history } = this.props
        history.push(shezhi)

    }
    goto1(quanbu) {
        let { history } = this.props
        history.push({ pathname: "/dingdan", query: "Quanbu" })
    }
    goto2(data) {
        let { history } = this.props
        history.push({ pathname: "/dingdan", query: data })
    }
    goto3(xiaoxi) {
        this.props.history.push({ pathname: xiaoxi, query: "/zhuye/mine" })
    }
    render() {
        let { data, quanbu, xinxi, shezhi, dingdan, xiaoxi } = this.state

        return (
            <div className="Mine">
                <div className="header">
                    <i className="iconfont icon-shezhi" onClick={this.goto.bind(this, shezhi)}></i>
                    <i className="iconfont icon-xiaoxi" onClick={this.goto3.bind(this, xiaoxi)}></i>
                </div>
                <div className="geren">
                    <img src={[require("../../images/touxiang.jpg")]} alt="" />
                    <span className="title">书生</span>
                </div>
                <div className="dingdan">
                    <div>
                        <span>我的订单</span>
                        <p onClick={this.goto1.bind(this, quanbu)}>
                            <span>查看全部</span>
                            <i className="iconfont icon-qianjin"></i>
                        </p>
                    </div>
                    <ul>
                        {
                            dingdan.map(item => {
                                return <li key={item.icon} onClick={this.goto2.bind(this, item.name)}>
                                    <i className={item.icon}></i>
                                    <span>{item.title}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <ul className="xinxi">
                    {
                        xinxi.map(item => {
                            return <li key={item.icon}>
                                <i className={item.icon}></i>
                                <span>{item.title}</span>
                            </li>
                        })
                    }
                </ul>
                <div className="cainixihuan">
                    <div>
                        <i></i>
                        <span>猜你喜欢</span>
                        <i></i>
                    </div>
                    <ul>
                        {
                            data.map((item, idx) => {
                                return <li key={idx}>
                                    <img src={item.entity.imgs[1]} alt="" />
                                    <p>{item.entity.title}</p>
                                    <span>￥{item.entity.special_price * 0.01}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Mine;