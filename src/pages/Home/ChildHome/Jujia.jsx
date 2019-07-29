import React, { Component } from "react"
import Axios from "axios";
import { Carousel, Row, Col } from 'antd'
require('./css/Jujia.css');
class Jujia extends Component {
    constructor() {
        super();
        this.state = {
            blocks: [],
            maojin: [],
            chuang: [],
            flag: false
        }
        this.gogoods = this.gogoods.bind(this)
        this.goto = this.goto.bind(this)
    }
    async componentWillMount() {
        let { data: { blocks } } = await Axios.get('http://api.wantscart.com/app/layout/tab/9?ua=%7B%22version%22%3A%222.7.1%22%2C%22app_id%22%3A%22h6ybil3f9xuqws98h4%22%2C%22app_name%22%3A%22WANTS%E5%A5%BD%E7%89%A9%22%2C%22os%22%3A%221%22%7D')
        let { data: maojin } = await Axios.get('http://api.wantscart.com/aggregator/4003/41/entity?token=w1N3dahtnIny9Vaty4WZskJiOcyIDdazFDMriw2bdfNGLwnlmbatVWYnyRXat6EDNszQmIc1gDOazgzdrhNjNdzMDLwv52MaiYmcn6ADdtz1mIsAAAAc%3D%3DQf&Access-Control-Allow-Origin=*')

        let { data: chuang } = await Axios.get('http://api.wantscart.com/aggregator/3472/41/entity?token=w1N3dahtnIny9Vaty4WZskJiOcyIDdazFDMriw2bdfNGLwnlmbatVWYnyRXat6EDNszQmIc1gDOazgzdrhNjNdzMDLwv52MaiYmcn6ADdtz1mIsAAAAc%3D%3DQf&Access-Control-Allow-Origin=*')
        this.setState({
            blocks,
            maojin,
            chuang,
            flag: true
        })
    }
    gogoods(id, e) {
        window.event ? window.event.cancelBubble = true : e.stopPropagation();
        let { history } = this.props;
        let pathname = '/goods/' + id
        console.log(pathname)
        history.push({
            pathname
        })
    }
    goto(id, e) {
        window.event ? window.event.cancelBubble = true : e.stopPropagation();
        let { history } = this.props;
        let pathname = '/lists/' + id
        history.push({
            pathname
        })
    }

    render() {
        return (
            <div className="Jujia">
                {/* 轮播图 */}
                <Carousel autoplay>
                    {
                        this.state.flag ? this.state.blocks[0].block_items.map(item => {
                            return <div key={item.item_id}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </div>
                        }) : null
                    }
                </Carousel>
                {/* 热门分类 1-3*/}
                {this.state.flag ? this.state.blocks[1].block_items.map(item => {
                    return <div key={item.item_id}>
                        <img style={{ width: '100%' }} src={item.item_image} alt="" />
                    </div>
                }) : null}
                {
                    this.state.blocks.slice(2, 4).map(item => {
                        return <Row key={item.block_location}>
                            {
                                item.block_items.map(item => {
                                    return <Col key={item.item_id} span={6} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                        <img style={{ width: '100%' }} src={item.item_image} alt="" />
                                    </Col>

                                })
                            }
                        </Row>
                    })
                }
                {/* 第四条 */}
                <Row>  {
                    this.state.flag ?
                        this.state.blocks[4].block_items.map(item => {
                            return <Col key={item.item_id} span={12} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                }
                </Row>
                {/* 第五条 */}
                <Row>  {
                    this.state.flag ?
                        this.state.blocks[5].block_items.map(item => {
                            return <Col key={item.item_id} span={24} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                }
                </Row>
                {/* 居家毛毯 */}

                {this.state.flag ?
                    <Row style={{ textIndent: '2em', color: 'black', fontWeight: '900', Height: '2%' }}>
                        <Col span={12}>居家毛毯</Col>
                        <Col style={{ textAlign: 'right' }} span={12}
                            onClick={this.goto.bind(this, this.state.maojin[0].target_id)} > 查看更多>> </Col>
                    </Row> : null
                }


                <Row>
                    {
                        this.state.flag ? this.state.maojin.map(item => {
                            return (
                                <Col span={6} key={item.entity.id}
                                    onClick={this.gogoods.bind(this, item.entity_id)}>
                                    <img src={item.entity.small_img} alt="" style={{ width: '100%' }} />
                                    <h6 style={{ textAlign: 'center', color: '#ccc', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.entity.title}</h6>
                                    <p style={{ display: 'flex', justifyContent: 'space-around' }} className="price">
                                        <span style={{ color: 'red' }}>${item.entity.price * 0.01}</span><del>${item.entity.tag_price * 0.01}</del></p>
                                </Col>
                            )
                        }) : null
                    }
                </Row>
                {/*床上套件 */}
                {
                    this.state.flag ? <Row style={{ textIndent: '2em', color: 'black', fontWeight: '900', Height: '2%' }}>
                        <Col span={12}>床上套件</Col>
                        <Col style={{ textAlign: 'right' }} span={12} onClick={this.goto.bind(this, this.state.chuang[0].target_id)}> 查看更多>> </Col>
                    </Row> : null
                }


                <Row>
                    {
                        this.state.flag ? this.state.chuang.map(item => {
                            return (
                                <Col span={6} key={item.entity.id}  >
                                    <img src={item.entity.small_img} alt="" style={{ width: '100%' }} />
                                    <h6 style={{ textAlign: 'center', color: '#ccc', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.entity.title}</h6>
                                    <p style={{ display: 'flex', justifyContent: 'space-around' }} className="price">
                                        <span style={{ color: 'red' }}>${item.entity.price * 0.01}</span><del>${item.entity.tag_price * 0.01}</del></p>
                                </Col>
                            )
                        }) : null
                    }
                </Row>
            </div>
        )
    }
}
export default Jujia;