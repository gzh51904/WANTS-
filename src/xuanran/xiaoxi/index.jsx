import React, { Component } from "react"
require('../../iconfont/iconfont.css');
require("./index.css")
class Xiaoxi extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            fanhui: ""
        }
        this.goto = this.goto.bind(this)
    }
    // 从那个页面点击过来，就返回那个页面
    goto(fanhui) {
        this.props.history.push(fanhui)
    }
    // 监听是从那个页面点击过来
    componentWillMount() {
        let res = this.props.location.query
        this.setState({
            fanhui: res
        })
    }

    render() {
        let { data, fanhui } = this.state
        return (
            <div className="Xiaoxi">
                <div className="header">
                    <i className="iconfont icon-fanhui" onClick={this.goto.bind(this, fanhui)}></i>
                    <span>消息</span>
                </div>
                <div className="content">
                    {
                        data.length > 0 ? "" : <div>
                            <i className="iconfont icon-info-1-copy"></i>
                            <div>暂无消息</div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default Xiaoxi;