import React, { Component } from "react"
import { connect } from 'react-redux'
require("./index.css")
class Daifahuo extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        this.setState({
            data: this.props.state.jiesuanlist[0]
        })
    }
    render() {
        let { data } = this.state
        return (
            <div className="daikukuan">
                {
                    data.length > 0 ?
                        data.map(item => {
                            return <div key={item.id}>
                                <img src={item.imgurl} alt="" />
                                <div className="d1">
                                    <p>{item.title}</p>
                                    <span>{item.price}</span>
                                </div>
                                <div className="d2">已付款</div>
                            </div>
                        }) :
                        <div className="content">
                            {
                                data.length > 0 ? "" : <div>
                                    <i className="iconfont icon-info-1-copy"></i>
                                    <div>暂无消息</div>
                                </div>
                            }
                        </div>
                }
            </div>
        )
    }
}
let mapStateToProps = (state, ownprops) => {
    return {
        state
    }
}

Daifahuo = connect(mapStateToProps)(Daifahuo)
export default Daifahuo;