import React, { Component } from "react"
import { Input, Row, Col } from 'antd';
import Axios from "axios";
const { Search } = Input;
require("./index.css")

class Sousuo extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            flag: false,
            key: [],
            flag1: false,
            showmenu: true
        }
        this.goback = this.goback.bind(this)
        this.gogoods = this.gogoods.bind(this)
        this.searchkey = this.searchkey.bind(this)
    }
    async componentWillMount() {
        let { data } = await Axios.get('http://api.wantscart.com/config?key=search_hotwords')
        data = data[0]
        console.log(data)
        this.setState({
            data,
            flag: true
        })

    }

    async searchkey(wkey) {
        console.log(wkey)
        let { data: key } = await Axios.get(`http://api.wantscart.com/product/w/${wkey}?m=1&limit=18`)
        this.setState({
            ...this.state,
            key,
            flag1: true,
            showmenu: false
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
    goback() {
        this.props.history.go(-1)
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%' }}>
                <header style={{ padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
                    <span style={{ fontWeight: "900", fontSize: '26px' }} onClick={this.goback}
                        className="iconfont icon-fanhui"></span>
                    <Search
                        style={{}}
                        allowClear
                        placeholder="请输入搜索内容"
                        onSearch={value => this.searchkey(value)}
                        style={{ width: "70%" }} />
                </header>
                {
                    this.state.showmenu ? <main style={{ flex: '1', overflowY: "auto" }}>
                        <h2 style={{ background: ' #fbfbfb', padding: '10px' }}>热门搜索</h2>
                        <Row gutter={16}>
                            {this.state.flag ? this.state.data.map(item => {
                                return <Col key={item} span={6}>
                                    <div onClick={this.searchkey.bind(this, item)}
                                        style={{ background: '#FFF465', margin: '10px', textAlign: 'center', border: '1px solid black' }}> {item}</div>
                                </Col>
                            }) : null
                            }
                        </Row>
                    </main> :
                        <section style={{ flex: '1', overflowY: "auto" }}>
                            <Row gutter={8} justify="space-around" >
                                {
                                    this.state.flag1 ?
                                        this.state.key.map(item => {
                                            return <Col key={item.id} span={12} onClick={this.gogoods.bind(this, item.id)}>
                                                <img style={{ width: '100%' }} src={item.small_img} alt="" />
                                                <h6 style={{ textAlign: 'center', color: '#ccc', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.title}</h6>
                                                <p style={{ display: 'flex', justifyContent: 'space-around' }} className="price">
                                                    <span style={{ color: 'red' }}>${item.price * 0.01}</span><del>${item.tag_price * 0.01}</del></p></Col>
                                        }) : null

                                }
                            </Row>
                        </section>
                }


            </div>
        )

    }
}
export default Sousuo