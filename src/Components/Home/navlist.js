import React,{Component} from "react";
import Swiper from "swiper";
import css from "./navlist.module.scss";
import "swiper/dist/css/swiper.css";

class Navlist extends Component{
	render(){
		return <div>
			<div className={css.box}>
				<img src="http://m.gjw.com/images/hot.png"/>
				<div className="swiper-container small">
				    <div className="swiper-wrapper">
				      <div className="swiper-slide">古井贡酒 兰花淡雅 清仓仅需59元</div>
				      <div className="swiper-slide">古井贡酒 兰花淡雅 清仓仅需59元</div>
				    </div>
				</div>
			</div>
			<ul className={css.list}>
				<li>
					<img src="http://img0.gjw.com/famous/2018/0713/34c90a46f767478897208adca7681ae4.jpg"/>
				</li>
				<li>
					<img src="http://img0.gjw.com/famous/2018/0713/3f257a2d80cb49e5a1e65340201329f0.jpg"/>
				</li>
				<li>
					<img src="http://img0.gjw.com/famous/2018/0713/a8da83fed83c44f2a7a9f64862cd6489.jpg"/>
				</li>
				<li>
					<img src="http://img0.gjw.com/famous/2018/0713/229cbdd4a909417ba6218c7e21b48131.jpg"/>
				</li>
				<li>
					<img src="http://img0.gjw.com/famous/2018/0801/8bf04e420aa64ccfbb9ae530f82ddd7d.jpg"/>
				</li>
			</ul>
			<ul className={css.list}>
				<li>
					<img src="http://img0.gjw.com/famous/2018/0713/b0041913b9844e519782312fa1c66118.jpg"/>
				</li>
				<li>
					<img src="http://img0.gjw.com/famous/2018/0713/07223d7582de4438875efedac3d9cd90.jpg"/>
				</li>
				<li>
					<img src="http://img0.gjw.com/famous/2018/0713/c7ee25ce88144ebe9f1c743c64df2000.jpg"/>
				</li>
				<li>
					<img src="http://img0.gjw.com/famous/2018/0801/8fccd4a2c00947869641bd32c0a4c42f.jpg"/>
				</li>
				<li>
					<img src="http://img0.gjw.com/famous/2018/0801/a4b34eda8bc24782994a4d86cd2528ce.jpg"/>
				</li>
			</ul>
		</div>
	}

	componentDidMount(){
		var swiper = new Swiper('.small', {
		     direction: 'vertical',
		     loop: true,
		     autoplay: {
	             delay: 2500,
	             disableOnInteraction: false,
	           },
		   });
	}
}
export default Navlist;