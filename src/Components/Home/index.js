import React,{ Component } from "react";
import css from "./index.module.scss";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import axios from "axios";
import Navlist from "./navlist.js";

class Home extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	swiperData : null,
	  	topbannerisshow:true
	  };
	}
	render(){
		return <div className={css.bigbox}>
			{
				this.state.topbannerisshow?
				<div className={css.topbanner}>
					<img src="http://m.gjw.com/Images/appdown0105.jpg"/>
					<p onClick={this.handleClick.bind(this)}></p>
				</div>
				:null
			}
			<div className={"swiper-container cc "+css.top}>
			    <div className="swiper-wrapper">
			      <div className="swiper-slide">
			      	<img src="http://img0.gjw.com/famous/2018/1130/ea558143431d4c6c9068907b00091d4e.jpg"/>
			      </div>
			      <div className="swiper-slide">
  			      	<img src="http://img0.gjw.com/famous/2018/1203/3086ba888b684d71aa546a3bd8ec3f74.jpg"/>
  			      </div>
  			      <div className="swiper-slide">
  			      	<img src="http://img0.gjw.com/famous/2018/1203/cdace0e2d61d44ec8cc73b51f2a7289e.jpg"/>
  			      </div>
  			      <div className="swiper-slide">
  			      	<img src="http://img0.gjw.com/famous/2018/1110/a7ea08ee1a294506ae17df2bf57cca3b.jpg"/>
  			      </div>
  			      <div className="swiper-slide">
  			      	<img src="http://img0.gjw.com/famous/2018/1129/4ba50188cdaf4c858e653c6031eb3b12.jpg"/>
  			      </div>
  			      <div className="swiper-slide">
  			      	<img src="http://img0.gjw.com/famous/2018/1129/ea27ad9b6f4b47f1b6e5d803ad0ea78e.jpg"/>
  			      </div>
			    </div>
			   <div className="swiper-pagination"></div>
			   <div className={css.kuang}>
				   	<i className="iconfont icon-sousuo"></i>
				   	<input type="text" placeholder="请输入商品名称"/>
			   </div>
			</div>

			<Navlist></Navlist>


			<div className={"swiper-container product " + css.banner}>
			    <div className="swiper-wrapper">
			    	{
			    		this.state.swiperData?
			    		this.state.swiperData.AppSeckillProList.map(item=>

		      		      <div className="swiper-slide " key={item.Id}>
		      		      	<div className={css.cont}>
			      		      	<img src={'http://img0.gjw.com/product/'+item.imgUrl}/>
			      		      	<div className={css.right}>
			      		      		<div className={css.tittle}>{item.ProductName}</div>
			      		      		<div className={css.price}>￥{item.Price}</div>

			      		      	</div>
			      		    </div>
		      		      </div>
			    		)
			    		:null
			    	}
			    </div>
			  </div>

			<div className={css.bannerlist}>
				<ul>
					<li><img src="http://img0.gjw.com/famous/2018/1203/0d04fd2799ec442a994777cac5f1bc5d.jpg"/></li>
					<li><img src="http://img0.gjw.com/famous/2018/1203/2e5677df8b6d476da87b60ac341e3a9d.jpg"/></li>
					<li><img src="http://img0.gjw.com/famous/2018/1203/4ca318641f844acfbb58e6fb7ea46b74.jpg"/></li>
					<li>
						<img src="http://img0.gjw.com/famous/2018/1201/9645a1287b8845d2b24f5c9c1ae20f7f.jpg"/>
						<img src="http://img0.gjw.com/famous/2018/1201/56fc75840c554e1e97c0293ee5f7ec0e.jpg"/>
					</li>
				</ul>
				<ul>
					<li><i className="iconfont icon-duihaocheckmark17"></i><span>正品保证</span></li>
					<li><i className="iconfont icon-dunpai"></i><span>开箱验货</span></li>
					<li><i className="iconfont icon-yusan01"></i><span>赔付保障</span></li>
				</ul>

				<img src="http://img0.gjw.com/famous/2018/0927/1c03a0b10a934f5fa5a6c2409a0caaa8.jpg"/>
				<img src="http://img0.gjw.com/famous/2018/1201/e1963721ea2f4358be87e70b83f076d5.jpg"/>
			</div>
		</div>
	}
	handleClick(){
		this.setState({
			topbannerisshow:false
		})
	}
	componentWillMount(){
		
		axios.get("/BtCApi/Home/SeckillList?userid=0").then(res=>{
			console.log(res.data.data[0].AppSeckill);
			this.setState({
				swiperData:res.data.data[0].AppSeckill
			},()=>{
				var swiper = new Swiper('.product', {
				     // slidesPerView: 1,
				     freeMode: true
				   });
			})
		
	   });
	}
	componentDidMount(){
		var swiper = new Swiper(".cc", {
		     pagination: {
		       el: '.swiper-pagination',
		     },
		     loop: true,
     	     autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
                },
		   });
	}
}

export default Home;