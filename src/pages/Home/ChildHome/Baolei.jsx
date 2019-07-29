import React, { Component } from "react"
import { Carousel, Row, Col } from 'antd'
import Axios from 'axios'
require('./css/Baolei.css');
class Baolei extends Component {
    constructor() {
        super();
        this.state = {
            blocks: [],
            xinpin: [],
            qianbao: [],
            flag: false
        }
        this.goto = this.goto.bind(this)
        this.gogoods = this.gogoods.bind(this)
    }
    async componentWillMount() {
        let { data: { blocks } } = await Axios.get('http://api.wantscart.com/app/layout/tab/13?ua=%7B%22version%22%3A%222.7.1%22%2C%22app_id%22%3A%22h6ybil3f9xuqws98h4%22%2C%22app_name%22%3A%22WANTS%E5%A5%BD%E7%89%A9%22%2C%22gender%22%3A%221%22%2C%22os%22%3A%221%22%7D')
        let { data: xinpin } = await Axios.get('http://api.wantscart.com/aggregator/4043/41/entity?limit=10&limit=10')
        let { data: qianbao } = await Axios.get('http://api.wantscart.com/aggregator/3794/41/entity?limit=10&limit=10')
        this.setState({
            blocks,
            xinpin,
            qianbao,
            flag: true
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
    gogoods(id, e) {
        window.event ? window.event.cancelBubble = true : e.stopPropagation();
        let { history } = this.props;
        let pathname = '/goods/' + id
        history.push({
            pathname
        })
    }
    render() {
        return (
            <div className="Baolei">
                <Carousel autoplay={true}>
                    {
                        this.state.flag ? this.state.blocks[0].block_items.map(item => {
                            return <div key={item.item_id}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </div>
                        }) : null
                    }
                </Carousel>
                <Row>  {
                    this.state.flag ?
                        this.state.blocks[1].block_items.map(item => {
                            return <Col key={item.item_id} span={6} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                }
                </Row>


                <Row>  {
                    this.state.flag ?
                        this.state.blocks[4].block_items.map(item => {
                            return <Col key={item.item_id} span={24} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                }
                </Row>
                {this.state.flag ?
                    <Row style={{ textIndent: '2em', color: 'black', fontWeight: '900', Height: '2%' }}>
                        <Col span={12}>新品上架</Col>
                        <Col style={{ textAlign: 'right' }} span={12}
                            onClick={this.goto.bind(this, this.state.xinpin[0].target_id)} > 查看更多>> </Col>
                    </Row> : null
                }
                <Row>
                    {
                        this.state.flag ? this.state.xinpin.slice(0, 4).map(item => {
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
                {this.state.flag ?
                    <Row style={{ textIndent: '2em', color: 'black', fontWeight: '900', Height: '2%' }}>
                        <Col span={12}>钱包卡包</Col>
                        <Col style={{ textAlign: 'right' }} span={12}
                            onClick={this.goto.bind(this, this.state.qianbao[0].target_id)} > 查看更多>> </Col>
                    </Row> : null
                }
                <Row>
                    {
                        this.state.flag ? this.state.qianbao.slice(0, 4).map(item => {
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

            </div>


        )
    }
}
export default Baolei;