import React, { Component } from 'react'
import Axios from 'axios';
import { Row, Col } from 'antd'

class Lists extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            banner: [],
            flag: false
        }
        this.gogoods = this.gogoods.bind(this)
        this.goback = this.goback.bind(this)
    }
    async componentWillMount() {
        let { id } = this.props.match.params
        let { data: banner } = await Axios.get(`http://m.wantscart.com/subject/${id}?token=w1N3dahtnIny9Vaty4WZskJiOcyIDdazFDMriw2bdfNGLwnlmbatVWYnyRXat6EDNszQmIc1gDOazgzdrhNjNdzMDLwv52MaiYmcn6ADdtz1mIsAAAAc%3D%3DQf&Access-Control-Allow-Origin=*`)
        let { data } = await Axios.get(`http://m.wantscart.com/aggregator/${id}/41/entity?token=w1N3dahtnIny9Vaty4WZskJiOcyIDdazFDMriw2bdfNGLwnlmbatVWYnyRXat6EDNszQmIc1gDOazgzdrhNjNdzMDLwv52MaiYmcn6ADdtz1mIsAAAAc%3D%3DQf&Access-Control-Allow-Origin=*`)
        this.setState({
            data,
            banner,
            flag: true
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
    goback() {
        this.props.history.go(-1)
    }
    render() {
        // console.log(this.props)
        return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <header><span onClick={this.goback.bind(this)} style={{ padding: '5px' }} className='iconfont icon-fanhui'></span></header>
            <main style={{ flex: '1', overflowY: "auto" }}>
                <header>
                    <img style={{ width: '100%' }} src={this.state.banner.cover} alt="" />
                </header>

                <Row>
                    <Col span={24} style={{ padding: '3%', color: '#ccc' }}>{this.state.banner.descp}</Col>
                </Row>

                {/*  */}
                <Row gutter={8} justify="space-around" >
                    {
                        this.state.flag ?
                            this.state.data.map(item => {
                                return <Col key={item.id} span={12} onClick={this.gogoods.bind(this, item.entity.id)}>
                                    <img style={{ width: '100%' }} src={item.entity.small_img} alt="" />

                                    <h6 style={{ textAlign: 'center', color: '#ccc', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.entity.title}</h6>
                                    <p style={{ display: 'flex', justifyContent: 'space-around' }} className="price">
                                        <span style={{ color: 'red' }}>${item.entity.price * 0.01}</span><del>${item.entity.tag_price * 0.01}</del></p></Col>
                            }) : null

                    }
                </Row>
            </main>
        </div>
    }
}
export default Lists