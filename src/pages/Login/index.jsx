import React, { Component } from "react"
import {Input,Button} from 'antd'

class Login extends Component {
    constructor(){
        super();
        this.state={
            random:'获取验证码'
        }
        this.getrandom=this.getrandom.bind(this)
    }
    getrandom(e){
        this.setState({
            random:'5678'
        })
    }
    render() {
        return (
            <div>
                <div style={{padding:'0 5%'}}> 
                <span className="iconfont icon-fanhui"></span>
                <p style={{margin:'13% 0 0 0'}}>手机号登录</p>
                    <Input style={{borderRadius:'100px',padding:'6% 0',
                    margin:'10% 0',}} 
                    placeholder="请入手机号码" type="text"/>
                    <div><Input type= "text" style={{width:'70%',borderRight:'none',
                    borderTopLeftRadius:'100px',borderBottomLeftRadius:'100px',
                    padding:'6% 0'}}/>
                    <span onClick={this.getrandom.bind(this)}
                     style={{display:'inline-block',
                    width:'30%',border:'1px solid #ccc',
                     padding:'2.85% 0',borderLeft:'none',borderTopRightRadius:'100px',
                     borderBottomRightRadius:'100px',textAlign:"center"}}>{this.state.random}</span></div>
                         <Button style={{borderRadius:'100px',background:'#57cb94',
                         border:'0 solid #57cb94',
                    margin:'10% 0',textAlign:'center'}} type="primary" block> 登录</Button>
                </div>
              
            </div>
        )
    }
}
export default Login;