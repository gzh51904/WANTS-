import React, { Component } from "react"
import axios from "axios"
require("./index.css")

class Login extends Component {
    constructor() {
        super();
        this.state = {
            huoqu: '获取验证码',
            shoujihao: "",
            yanzm: "",
            sj: false,
            yz: false
        }
        this.shouji = this.shouji.bind(this)
        this.yanzm = this.yanzm.bind(this)
        this.denglu = this.denglu.bind(this)
        this.huoqu = this.huoqu.bind(this)
        this.goto = this.goto.bind(this)
    }

    goto() {
        this.props.history.push("/zhuye/home/tuijian")
    }
    // 手机号验证
    shouji() {
        let reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        let val = this.refs.shoujihao.value;
        if (!reg.test(val)) {
            this.refs.shoujihao.value = "";
            this.refs.shoujihao.setAttribute("placeholder", "请输入正确手机号")
            this.setState({
                sj: false
            })
        } else {
            this.setState({
                shoujihao: val,
                sj: true
            })
        }
    }
    // 短信验证
    yanzm() {
        let val = this.refs.yanzm.value;
        let { huoqu } = this.state
        if (huoqu === "获取验证码") {
            this.refs.yanzm.value = "";
            this.refs.yanzm.setAttribute("placeholder", "请先获取验证码")
            this.setState({
                yz: false
            })
        } else {
            if (val !== huoqu) {
                this.refs.yanzm.value = "";
                this.refs.yanzm.setAttribute("placeholder", "请输入正确验证码")
                this.setState({
                    yz: false
                })
            } else {
                this.setState({
                    yz: true
                })
            }
        }
    }
    // 登录验证
    async  denglu() {

        let { sj, yz } = this.state
        let phone = this.state.shoujihao
        if (sj === true || yz === true) {
            let { data } = await axios.get("http://47.103.6.17:1904/login", {
                params: {
                    phone
                }
            })
            if (data.code == 1000) {
                localStorage.setItem("phone", `${data.data[0].phone}`)
                this.props.history.push("/zhuye/mine")
            }
            if (data.code == 250) {
                let { data } = await axios.post("http://47.103.6.17:1904/login", {
                    phone
                })
                localStorage.setItem("phone", `${data.data[0].phone}`)
                this.props.history.push("/zhuye/mine")
            }
        }
    }
    // 验证码获取
    huoqu() {
        let arr = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        let res = []
        for (let i = 1; i <= 4; i++) {
            res.push(arr.charAt(parseInt(Math.random() * 62)));
        }
        let res1 = res[0] + res[1] + res[2] + res[3];
        this.setState({
            huoqu: res1
        })
    }
    render() {
        let { huoqu } = this.state
        return (
            <div className="login">
                <div className="header">
                    <i className="iconfont icon-fanhui" onClick={this.goto}></i>
                </div>
                <div className="xxx">手机号登录</div>
                <div className="shouji">
                    <input type="text" placeholder="请输入手机号"
                        ref="shoujihao"
                        onBlur={this.shouji}
                    />
                    <span className="s1">+86</span>
                </div>
                <div className="yzm">
                    <input type="text" placeholder="请输入验证码"
                        ref="yanzm"
                        onBlur={this.yanzm} />
                    <span className="s3" onClick={this.huoqu}>{huoqu}</span>
                </div>
                <div className="denglu">
                    <button onClick={this.denglu}>登录</button>
                </div>
                <div className="xinxi">
                    * 登录即表示你同意>
                    <span>《隐私政策》</span>
                    和
                    <span>用户协议</span>
                </div>
            </div>
        )
    }
}
export default Login;