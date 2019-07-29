import React, { Component } from "react"
import Axios from "axios";
import { Carousel, Row, Col, Badge } from 'antd'
import { connect } from 'react-redux';
import { addAction } from '../../store/cartActions.js';
class Goods extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            leg: [],
            flag: false,
        }
        this.goback = this.goback.bind(this)
        this.gotoCart = this.gotoCart.bind(this)
        this.addcart = this.addcart.bind(this)
    }
    async componentWillMount() {
        let { id } = this.props.match.params
        let { data } = await Axios.get(`http://api.wantscart.com/product/${id}/`)
        this.setState({
            data: data,
            flag: true
        })
    }
    goback() {
        this.props.history.go(-1)
    }
    gotoCart() {
        this.props.history.push("/zhuye/cart")
    }
    addcart() {
        let { data } = this.state
        this.props.add2cart({
            id: data.id,
            imgurl: data.small_img,
            title: data.title,
            qty: 1,
            price: data.price,
            color: "黑色 S",
            checked: true
        })
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <header><span onClick={this.goback.bind(this)} style={{ padding: '5px' }} className='iconfont icon-fanhui'></span></header>
                {/* 轮播图 */}
                <main style={{ flex: '1', overflowY: "auto" }}>
                    <Carousel autoplay style={{ borderBottom: '1px solid #ccc' }}>
                        {
                            this.state.flag ? this.state.data.imgs.map(item => {
                                return <div key={item} style={{ height: '100px' }}>
                                    <img style={{ width: '100%' }} src={item} alt="" />
                                </div>
                            }) : null
                        }
                    </Carousel>

                    <Col>
                        {/* 商品名 */}
                        <h2 style={{ textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{this.state.data.title}</h2>
                        <p style={{ display: 'flex', justifyContent: 'space-around' }} className="price">
                            <span style={{ color: 'red' }}>￥{this.state.data.price * 0.01}</span><del>￥{this.state.data.tag_price * 0.01}</del></p></Col>

                    {/* 店铺名 */}
                    <h3 style={{ lineHeight: '30px', borderTop: '15px solid #e6e6e6', borderBottom: '1px solid #e6e6e6' }}>品牌介绍</h3>
                    {this.state.flag ?
                        <Row style={{ lineHeight: '60px' }}>
                            <Col span={6} style={{ textAlign: 'center' }}> <img src={this.state.data.creator.head} style={{ width: '30px' }} alt="" /></Col>
                            <h4>{this.state.data.creator.name}</h4>
                        </Row>
                        : null}
                    <h3 style={{ lineHeight: '30px', borderTop: '15px solid #e6e6e6', borderBottom: '1px solid #e6e6e6' }}>商品详情</h3>
                    {
                        this.state.flag ?
                            <div dangerouslySetInnerHTML={{ __html: this.state.data.detail }} /> : null
                    }
                </main>
                <footer style={{ lineHeight: '50px', textAlign: 'center' }}>
                    <Row>
                        <Col style={{ borderRight: '1px solid #e6e6e6' }} span={4}> <span className='iconfont icon-erji'></span><span>客服</span></Col>
                        <Col span={4} style={{ position: "relative" }}>
                            <div style={{ position: "absolute", right: "30px", top: "-18px" }}>
                                <Badge count={this.props.state.goodslist.length}>
                                    <a href="#" className="head-example" />
                                </Badge>
                            </div>
                            <span className='iconfont icon-gouwuchekong'></span>
                            <span onClick={this.gotoCart}>购物车</span>
                        </Col>
                        <Col style={{ background: 'black', color: '#fff' }} span={8} onClick={this.addcart}> 加入购物车</Col>
                        <Col style={{ background: '#fff467' }} span={8}>立即购买</Col>
                    </Row>
                </footer>
            </div >
        )
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
        add2cart(goods) {
            dispatch(addAction(goods))
        }
    }
}
Goods = connect(mapStateToProps, mapDispatchToProps)(Goods)

export default Goods;