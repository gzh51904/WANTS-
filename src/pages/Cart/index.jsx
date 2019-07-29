import React, { Component } from "react"
import { connect } from 'react-redux'
import { changeQtyAction, removeAction, add2Action } from '../../store/cartActions.js';
require('../../iconfont/iconfont.css');
require("./index.css")

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            AllCheck: true,
            background: "yellow",
            jiesuan: true,
            bianji: true,
            prc: 0
        }
        this.change = this.change.bind(this)
        this.quanxuan = this.quanxuan.bind(this)
        this.bianji = this.bianji.bind(this)
        this.genxin = this.genxin.bind(this)
        this.gotohome = this.gotohome.bind(this)
    }
    componentWillMount() {
        let { goodslist } = this.props.state
        this.setState({
            data: goodslist
        })
    }
    genxin() {
        let { data, jiesuan } = this.state
        if (jiesuan === false) {
            let newdata = data.filter(item => {
                if (item.checked === true) {
                    return item
                }
            })
            let qq = data.filter(item => { return !item.checked === true })
            this.setState({
                data: qq
            })
            this.props.jisuan({
                id: newdata[0].id
            })
        }
        if (jiesuan === true) {
            let newdata = data.filter(item => {
                if (item.checked === true) {
                    return item
                }
            })
            let qq = data.filter(item => { return !item.checked === true })
            this.setState({
                data: qq
            })
            this.props.jiesuan(newdata)
            this.props.jisuan({
                id: newdata[0].id
            })
        }
    }
    change(item) {
        item.checked = !item.checked;
        console.log(item.checked);
        // 每点击一次更新状态
        this.setState({
            data: this.state.data
        })
        // 如果全选之后，取消勾选其中的一个或多个，则会把全选也取消勾选掉
        // every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。
        // some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。
        let fanxuan = this.state.data.some(j => {
            // 如果有一项不勾选，则返回true
            if (!j.checked) {
                return true;
            }
        })
        if (fanxuan) {
            this.setState({
                AllCheck: false
            })
        }
        // 控制结算功能背景颜色
        let beijing = this.state.data.some(j => {
            if (j.checked) {
                return true
            } else {
                return false
            }
        })
        if (beijing) {
            this.setState({
                background: "yellow"
            })
        } else {
            this.setState({
                background: "#ccc"
            })
        }
        // 如果每一项都勾选，则返回true
        let quanxuan = this.state.data.every(j => {
            if (j.checked) {
                return true;
            } else {
                return false
            }
        })
        if (quanxuan) {
            this.state.AllCheck = true;
        }

    }
    quanxuan(AllCheck) {
        let { data } = this.state
        AllCheck = !AllCheck
        console.log(AllCheck);

        // 每点击一次更新状态
        this.setState({
            AllCheck: AllCheck
        })
        if (AllCheck === true) {
            this.setState({
                background: "yellow"
            })
            data.map((item, i) => {
                item.checked = true;
            })
        } else {
            this.setState({
                background: "#ccc"
            })
            data.map((item, i) => {
                item.checked = false;
            })
        }
    }
    bianji(bianji) {
        let { data } = this.state
        this.setState({
            bianji: !bianji
        })
        if (bianji) {
            this.setState({
                jiesuan: false,
                AllCheck: false,
                background: "#ccc"
            })
            data.map((item, i) => {
                item.checked = false;
            })
        } else {
            data.map((item, i) => {
                item.checked = true;
            })
            this.setState({
                jiesuan: true,
                AllCheck: true,
                background: "yellow"
            })
        }
    }
    gotohome() {
        this.props.history.push("/zhuye/home/tuijian")
    }
    render() {
        let { data, AllCheck, background, jiesuan, bianji, prc } = this.state
        let { jianshao, zengjia } = this.props
        data.map(item => {
            return item.checked == true ? prc = prc + item.price * item.qty : prc
        })
        return (
            <div className="Cart">
                <div className="header">购物车<span className="bj" onClick={this.bianji.bind(this, bianji)}>
                    {
                        bianji ? "编辑" : "完成"
                    }
                </span></div>
                <div className="content">
                    {
                        data.length > 0 ?
                            <div className="d0">
                                <div>
                                    <div className="mianfei">
                                        <span>本单已免运费</span>
                                        <span>去逛逛 &gt;</span>
                                    </div>
                                    {
                                        data.map(item => {
                                            return <div className="d1" key={item.id}>
                                                <input type="checkbox"
                                                    className="checked"
                                                    checked={item.checked}
                                                    onChange={this.change.bind(this, item)} />
                                                <img src={item.imgurl} alt="" />
                                                <div className="d2">
                                                    <p>{item.title}</p>
                                                    <div className="d3">
                                                        <div className="d4">
                                                            <span className="s1">{item.color}</span>
                                                            <span className="span2">￥{item.price * .01}</span>
                                                        </div>
                                                        <div className="d5">
                                                            <i className="i1" onClick={() => {
                                                                jianshao({
                                                                    id: item.id,
                                                                    qty: (item.qty - 1)
                                                                })
                                                            }
                                                            }>-</i>
                                                            <span className="shuliang">{item.qty}</span>
                                                            <i className="i2" onClick={() => {
                                                                zengjia({
                                                                    id: item.id,
                                                                    qty: (item.qty + 1)
                                                                })
                                                            }
                                                            }>+</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        })
                                    }
                                </div>
                                <div className="d6">
                                    <input type="checkbox" checked={AllCheck} onChange={this.quanxuan.bind(this, AllCheck)} />
                                    {
                                        bianji ? <div className="d7">
                                            <p>
                                                <span>合计：</span>
                                                <span>￥{prc > 10 ? (prc * .01 - 10).toFixed(2) : prc}</span>
                                                <span>（包邮）</span>
                                            </p>
                                            <p>
                                                <span>总额：</span>
                                                <span>￥{(prc * .01).toFixed(2)}
                                                </span>
                                                <span>优惠金额：{prc > 10 ? 10 : 0}</span>
                                            </p>
                                        </div> : null
                                    }

                                    <div className="d8" onClick={this.genxin} style={{ background: `${background}` }}>
                                        {
                                            jiesuan ? "结算" : "删除"
                                        }
                                    </div>
                                </div>
                            </div>
                            : <div>
                                <i style={{
                                    fontSize: '80px',
                                    color: 'yellowgreen'
                                }} className="iconfont icon-gouwuchekong"></i>
                                <div><span>购物车空空如也，一起</span><span className="guangguang" onClick={this.gotohome}>去逛逛</span></div>
                            </div>

                    }
                </div>
            </div>
        )
    }
}

// 获取改变后的值
let mapStateToProps = (state, ownprops) => {
    return {
        state: state,
    }
}
// 改变值
let mapDispatchToProps = (dispatch, ownprops) => {
    return {
        jianshao(goods) {
            if (goods.qty < 1) {
                return goods.qty = 1
            }
            dispatch(changeQtyAction(goods))
        },
        zengjia(goods) {
            dispatch(changeQtyAction(goods))
        },
        jisuan(id) {
            dispatch(removeAction(id))
        },
        jiesuan(goods) {
            dispatch(add2Action(goods))
        },
    }
}
Cart = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default Cart;