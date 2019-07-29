import React, { Component } from "react"
import { connect } from 'react-redux'
require("./index.css")
class Quanbu extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        console.log(this.props.state.goodslist);
        this.setState({
            data: this.props.state.goodslist
        })
    }
    render() {
        let { data } = this.state
        return (
            <div className="daikukuan">
                {
                    data.length > 0 ?
                        "" :
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
    console.log(state)
    return {
        state
    }
}

Quanbu = connect(mapStateToProps)(Quanbu)
export default Quanbu;