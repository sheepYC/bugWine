import React,{Component} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import css from "./index.module.scss";
import {NavLink} from "react-router-dom";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

class Detail extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist:[],
	  	piclist:[]
	  };
	}
	render(){
		return (
			<div>
				这是详情页
				<header>
					<i className="iconfont icon-zuojiantou"></i>
					<p className={css.title}>{this.state.datalist.ProductName}</p>
				</header>
				<div className={css.nav}>
					<ul className={css.navlist}>
						<li className={css.on} onClick={this.handleClick.bind(this,1)} ref="product">商品</li>
						<li onClick={this.handleClick.bind(this,2)} ref="info">详情</li>
						<li onClick={this.handleClick.bind(this,3)} ref="evaluate">评价</li>
					</ul>
				</div>
				<div className={"swiper-container wen "+css.ss}>
				    <div className="swiper-wrapper">
				      {
				      	this.state.piclist.map(item=>
				      			<div className="swiper-slide" key={item}>
				      				<img src={item}/>
				      			</div>
				      		)
				      }
				    </div>
				   <div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
	handleClick(index){
		if(index===1){
			this.refs.info.className = this.refs.evaluate.className = '';
			this.refs.product.className = css.on;
		}else if(index===2){
			this.refs.product.className = this.refs.evaluate.className = '';
			this.refs.info.className = css.on;
		}else if(index===3){
			this.refs.info.className = this.refs.product.className = '';
			this.refs.evaluate.className = css.on;
		}
	}
	componentWillMount(){
		this.props.hideNav()
	}
	componentDidMount(){
		axios.post("/BtCApi/Item/GetProduct","Id=4322&UserID=299220&Signid=57bba7b4-aedf-491c-8987-c0d1d2642ecd&DeviceId=54fc0e7a-12c1-4d2a-a09f-91ee95ccecc0&PhoneVersion=null&ClientVersion=1.0.0.1&ClientType=0&ProvinceId=9").then(res=>{
			console.log(res.data);
			this.setState({
				datalist:res.data.data
			},()=>{
				var a = res.data.data.APPIntro
				var b = /http\b.*?(?:.jpg)/gi;
				var arr = [];
				arr = a.match(b)
				console.log(a.match(b))
				this.setState({
					piclist:arr
				},()=>{
					var swiper = new Swiper(".wen",{
					     pagination: {
					       el: '.swiper-pagination',
					     },
					     loop: true,
			     	     autoplay: {
			                  delay: 2500,
			                  disableOnInteraction: false,
			                }
					   });
				});
			})
		})
		
	}
	componentWillUnmount(){
		this.props.showNav();
	}

}

export default connect(null,{
	showNav(){
		return{
			type:'showNav',
			payload:true
		}
	},
	hideNav(){
		return{
			type:'hideNav',
			payload:false
		}
	}
})(Detail)
