import React, { Component } from "react"
import { Carousel, Row, Col } from 'antd'
import Axios from 'axios'
require('./css/Xiexue.css');
class Xiexue extends Component {
    constructor() {
        super();
        this.state = {
            blocks: [],
            flag: false
        }
        this.goto = this.goto.bind(this)
    }
    async componentWillMount() {
        let { data: { blocks } } = await Axios.get('http://api.wantscart.com/app/layout/tab/8?ua=%7B%22version%22%3A%222.7.1%22%2C%22app_id%22%3A%22h6ybil3f9xuqws98h4%22%2C%22app_name%22%3A%22WANTS%E5%A5%BD%E7%89%A9%22%2C%22gender%22%3A%221%22%2C%22os%22%3A%221%22%7D')

        this.setState({
            blocks,
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
    render() {
        return (
            <div className="Xiexue">
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
                        this.state.blocks[2].block_items.map(item => {
                            return <Col key={item.item_id} span={24} onClick={this.goto.bind(this, item.item_target.target_id)}>
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
            </div>


        )
    }
}
export default Xiexue;