import React, { Component } from "react"
require('../../iconfont/iconfont.css');
require("./index.css")
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    render() {
        let { data } = this.state
        return (
            <div className="Cart">
                <div className="header">购物车</div>
                <div className="content">
                    {
                        data.length > 0 ? "" : <div>
                            <i className="iconfont icon-gouwuchekong"></i>
                            <div><span>购物车空空如也，一起</span><span>去逛逛</span></div>
                        </div>

                    }
                </div>
            </div>
        )
    }
}
export default Cart;