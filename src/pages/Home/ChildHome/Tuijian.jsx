import React, { Component } from "react"
import axios from "axios"
import { Row, Col, Carousel } from "antd"
require('./css/Tuijian.css');
class Tuijian extends Component {
    constructor() {
        super();
        this.state = {
            blocks: [],
            flag: false
        }
        this.goto = this.goto.bind(this)
        this.gogoods = this.gogoods.bind(this)
    }
    async componentWillMount() {
        let { data: { blocks } } = await axios.get('http://api.wantscart.com/app/layout/tab/12?ua=%7B%22version%22%3A%222.7.1%22%2C%22app_id%22%3A%22h6ybil3f9xuqws98h4%22%2C%22app_name%22%3A%22WANTS%E5%A5%BD%E7%89%A9%22%2C%22gender%22%3A%221%22%2C%22os%22%3A%221%22%7D')
        this.setState({
            blocks,
            flag: true
        })
    }
    goto(id) {
        let { history } = this.props;
        let pathname = '/lists/' + id
        history.push({
            pathname
        })
    }
    gogoods(id) {
        let { history } = this.props;
        let pathname = '/goods/' + id
        history.push({
            pathname
        })
    }
    render() {
        return (
            <div className="Tuijian">
                {/* 推荐 */}
                {
                    this.state.blocks.slice(0, 6).map(item => {

                        return <Row key={item.block_location}>
                            {
                                item.block_items.map(item => <Col onClick={this.gogoods.bind(this, item.item_target.target_id)}
                                    key={item.item_id} span={8}>
                                    <img style={{ width: '100%' }} src={item.item_image} alt="" />
                                </Col>)
                            }
                        </Row>
                    })
                }
                {/* 轮播图 */}

                <Carousel autoplay={this.state.flag}>
                    {
                        this.state.flag ? this.state.blocks[6].block_items.map(item => {
                            return <div key={item.item_id}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </div>
                        }) : null
                    }

                </Carousel>
                {/* 第八条 */}
                <div style={{ display: 'flex' }}>
                    {
                        this.state.flag ? this.state.blocks[8].block_items.map(item => {
                            return (
                                <div key={item.item_id} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                    <img style={{ width: '100%' }} src={item.item_image} alt="" />
                                </div>
                            )
                        }) : null
                    }
                </div>
                {/* 9-11 */}
                {/* {
                    this.state.blocks.slice(9, 12).map(item => {

                        return <Row key={item.block_location}>
                            {
                                item.block_items.map(item => {
                                    return <Col key={item.item_id} span={12} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                        <img style={{ width: '100%' }} src={item.item_image} alt="" />
                                    </Col>

                                })
                            }


                        </Row>
                    })
                } */}
                {/* 9 */}
                <Row>
                    {this.state.flag ?
                        this.state.blocks[9].block_items.map(item => {
                            return <Col key={item.item_id} span={12} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                    }
                </Row>

                {/* 10 */}
                <Row>
                    {this.state.flag ?
                        this.state.blocks[10].block_items.map(item => {
                            return <Col key={item.item_id} span={8} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                    }
                </Row>
                {/* 11 */}
                {this.state.flag ?
                    this.state.blocks[11].block_items.map(item => {
                        return <Col key={item.item_id} span={12} onClick={this.goto.bind(this, item.item_target.target_id)}>
                            <img style={{ width: '100%' }} src={item.item_image} alt="" />
                        </Col>
                    }) : null
                }
                {/* 12 */}
                <Row>  {
                    this.state.flag ?
                        this.state.blocks[12].block_items.map(item => {
                            return <Col key={item.item_id} span={12}  >
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                }
                </Row>
                {/*13 */}
                <Row>  {
                    this.state.flag ?
                        this.state.blocks[13].block_items.map(item => {
                            return <Col key={item.item_id} span={12} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                }
                </Row>

                {/* 14 */}
                <Row>  {
                    this.state.flag ?
                        this.state.blocks[14].block_items.map(item => {
                            return <Col key={item.item_id} span={12} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                }
                </Row>
                {/* 15 */}
                <Row>  {
                    this.state.flag ?
                        this.state.blocks[15].block_items.map(item => {
                            return <Col key={item.item_id} span={12} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                }
                </Row>
                {/* 16 */}
                <Row>  {
                    this.state.flag ?
                        this.state.blocks[16].block_items.map(item => {
                            return <Col key={item.item_id} span={6} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                <img style={{ width: '100%' }} src={item.item_image} alt="" />
                            </Col>
                        }) : null
                }
                </Row>
                {/* 18-19 */}
                {
                    this.state.blocks.slice(18, 20).map(item => {

                        return <Row key={item.block_location}>
                            {
                                item.block_items.map(item => {
                                    return <Col key={item.item_id} span={12} onClick={this.goto.bind(this, item.item_target.target_id)}>
                                        <img style={{ width: '100%' }} src={item.item_image} alt="" />
                                    </Col>

                                })
                            }

                        </Row>
                    })
                }
                {/* 20 */}
                {
                    <Row>  {
                        this.state.flag ?
                            this.state.blocks[20].block_items.map(item => {
                                return <Col key={item.item_id} span={24} >
                                    <img style={{ width: '100%' }} src={item.item_image} alt="" />
                                </Col>
                            }) : null
                    }
                    </Row>
                }
                {/* 21-23 */}
                {
                    this.state.blocks.slice(21, 24).map(item => {

                        return <Row key={item.block_location}>
                            {
                                item.block_items.map(item => {
                                    return <Col key={item.item_id} span={6}>
                                        <img style={{ width: '100%' }} src={item.item_image} alt="" />
                                    </Col>

                                })
                            }


                        </Row>
                    })
                }


            </div>
        )
    }
}
export default Tuijian;

