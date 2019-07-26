import React, { Component } from "react"
require('./index.css');
class Shezhi extends Component {
    constructor() {
        super();
        this.state = {
            data: "/zhuye/mine"
        }
        this.goto = this.goto.bind(this)
    }
    goto(data) {
        let { history } = this.props
        history.push(data)
    }
    render() {
        let { data } = this.state
        return (
            <div className="shezhi">
                <div className="header">
                    <i className="iconfont icon-fanhui" onClick={this.goto.bind(this, data)}></i>
                    <span>系统设置</span>
                </div>
                <div>
                    <div>
                        <span>清除缓存</span>
                        <i className="iconfont icon-qianjin"></i>
                    </div>
                    <div>
                        <span>关于WANTS</span>
                        <i className="iconfont icon-qianjin"></i>
                    </div>
                    <div>
                        <span>注销账号</span>
                        <i className="iconfont icon-qianjin"></i>
                    </div>
                </div>
                <div>退出登录</div>
            </div>)
    }
}
export default Shezhi;