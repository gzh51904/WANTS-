import React,{Component} from 'react'
import Axios from 'axios';
import {Row,Col} from 'antd'

class Lists extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            banner:[],
            flag:false
        }
    }
    async componentWillMount(){
    let {id}=this.props.match.params
    let {data:banner}=await Axios.get(`http://m.wantscart.com/subject/${id}?token=w1N3dahtnIny9Vaty4WZskJiOcyIDdazFDMriw2bdfNGLwnlmbatVWYnyRXat6EDNszQmIc1gDOazgzdrhNjNdzMDLwv52MaiYmcn6ADdtz1mIsAAAAc%3D%3DQf&Access-Control-Allow-Origin=*`)
    let {data}=await Axios.get(`http://m.wantscart.com/aggregator/${id}/41/entity?token=w1N3dahtnIny9Vaty4WZskJiOcyIDdazFDMriw2bdfNGLwnlmbatVWYnyRXat6EDNszQmIc1gDOazgzdrhNjNdzMDLwv52MaiYmcn6ADdtz1mIsAAAAc%3D%3DQf&Access-Control-Allow-Origin=*`)
    console.log(data)
    console.log(banner)
    this.setState({
        data,
        banner,
        flag:true
    })
}
    render(){
        // console.log(this.props)
        return <div>
         <header>
             <img style={{width:'100%'}} src={this.state.banner.cover} alt=""/>
         </header>
         <Row>
             <Col span={24} style={{padding:'3%',color:'#ccc'}}>{this.state.banner.descp}</Col>
         </Row>
         
         {/*  */}
          <Row  gutter={8} justify="space-around" >
            {
            this.state.flag? 
            this.state.data.map(item=>{
                console.log(item)
                 return  <Col span={12}>
                 <img style={{width:'100%'}} src={item.entity.small_img} alt=""/>
              
                 <h6 style={{textAlign:'center',color:'#ccc',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{item.entity.title}</h6>
                 <p style={{display:'flex',justifyContent:'space-around'}} className="price">
                 <span style={{color:'red'}}>${item.entity.price*0.01}</span><del>${item.entity.tag_price*0.01}</del></p></Col>               
         }) :null
             
         }
         </Row>
        
   </div>
    }
}
export default Lists