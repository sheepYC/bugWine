import React,{Component} from 'react';
import axios from 'axios';
import css from './contnetList.module.scss';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'

class contentList extends Component{
	constructor(props){
		super(props)
		this.state = {
			arr: [],
			zonghe: {},
			pd: 0,
			index: 1,
			isshow: false
		}
	}
	render(){
		return (
			<div>
				{this.state.zonghe.a?
					<div className={css.bigworld} onClick={this.dels.bind(this)}></div>
				:''}
				<div className={css.top}>
					<div className={css.sousuo}>
						<NavLink to="/list/list"><i className={'iconfont icon-zuojiantou ' + css.icon}></i></NavLink>
						<div className={css.inputBox}>
							<div className={css.fakeinput}>
								<i className={'iconfont icon-sousuo ' + css.icons}></i>
								<input type="text" className={css.input} placeholder="请输入商品名称"/>
							</div>
							<span className={css.sousuos}>搜索</span>
						</div>
					</div>
					<div className={css.paixu}>
						<div className={css.c} onClick={this.zonghe.bind(this)}>综合</div>
						<div className={css.c} onClick={this.xiaoliang.bind(this,true)}>销量</div>
						<div className={css.c} onClick={this.jiage.bind(this)}>价格</div>
					</div>
					{this.state.zonghe.c === 'pingjiazuiduo'?
					<div className={css.xianshi}>
						<p className={css.xxx} onClick={this.pingjiazuiduo.bind(this,true)}>{this.state.zonghe.a}</p>
						<p onClick={this.zuixinchanpin.bind(this,true)}>{this.state.zonghe.b}</p>
					</div>
					:''
					}
					{this.state.zonghe.c === 'youdidaogao'?
					<div className={css.xianshi}>
						<p className={css.xxx} onClick={this.youdidaogao.bind(this,true)}>{this.state.zonghe.a}</p>
						<p onClick={this.yougaodaodi.bind(this,true)}>{this.state.zonghe.b}</p>
					</div>
					:''
					}
				</div>
				<div className={css.tops}></div>
				<div className={css.content}>
					{
						this.state.arr.length?
						this.state.arr.map(data=>{
							return<div key={data.ID} className={css.box}>
								<div>
									<NavLink to={'/detail/' + data.ID}>
										<img className={css.img} src={'http://img0.gjw.com/product/' + data.Pic}/>
										<p className={css.name}>{data.ProductName}</p>
										<p className={css.money}><span style={{color: 'red',fontWeight: 700}}>¥</span>{data.APPPrice}</p>
										<p className={css.asd}><span>{data.SumComment}条好评</span><span className={css.right}>{data.GoodComment?Math.floor((data.GoodCommment / data.SumComment) * 100):'100'}%好评</span></p>
									</NavLink>
								</div>
							</div>
						})
						:<div>
							loading......
						</div>
					}
					{this.state.isshow?
						<div>loading......</div>
					:''}
				</div>
			</div>
		)
	}
	componentDidMount(){
		axios.get('/BtCApi/List/GetProListWhere?ParentID=' + this.props.match.params.parentId + '&brand=' + this.props.match.params.id + '&strWhere=0,0,0,0,0&sort=0&PageIndex=1&PageSize=20&userID=299221').then(data=>{
			if (data.data.data) {
				this.setState({
					arr: data.data.data.Prolist
				})
				window.onscroll = ()=>{
					var c;
					this.state.isshow?c=100:c=0
					if ((window.document.documentElement.scrollTop || window.document.body.scrollTop) >= window.document.documentElement.offsetHeight - window.document.documentElement.clientHeight + c) {
						var a;
						var b = this.state.index + 1
						this.setState({
							index: b,
							isshow: true
						})
						if (this.state.pd == 0) {
							this.xiaoliang.call(this)
						} else if (this.state.pd == 1) {
							this.pingjiazuiduo.call(this)
						} else if (this.state.pd == 2) {
							this.zuixinchanpin.call(this)
						} else if (this.state.pd == 5) {
							this.youdidaogao.call(this)
						} else if (this.state.pd == 4) {
							this.yougaodaodi.call(this)
						}
					}
				}
			}
		})
	}
	xiaoliang(isshows){
		if (isshows) {
			this.setState({
				index: 1
			})
		}
		this.setState({
			zonghe: {},
			pd: 0
		})
		axios.get('/BtCApi/List/GetProListWhere?ParentID=' + this.props.match.params.parentId + '&brand=' + this.props.match.params.id + '&strWhere=0,0,0,0,0&sort=0&PageIndex=' + this.state.index + '&PageSize=20&userID=299221').then(data=>{
			if (data.data.data) {
				if (isshows) {
					var val = data.data.data.Prolist
				} else {
					var val = [...this.state.arr,...data.data.data.Prolist]
				}
				this.setState({
					arr: val,
					isshow: false
				})
			}
		})
	}
	pingjiazuiduo(isshows){
		if (isshows) {
			this.setState({
				index: 1
			})
		}
		this.setState({
			zonghe: {},
			pd: 1
		})
		axios.get('/BtCApi/List/GetProListWhere?ParentID=' + this.props.match.params.parentId + '&brand=' + this.props.match.params.id + '&strWhere=0,0,0,0,0&sort=1&PageIndex=' + this.state.index + '&PageSize=20&userID=299221').then(data=>{
			if (data.data.data) {
				if (isshows) {
					var val = data.data.data.Prolist
				} else {
					var val = [...this.state.arr,...data.data.data.Prolist]
				}
				this.setState({
					arr: val,
					isshow: false
				})
			}
		})
	}
	zuixinchanpin(isshows){
		if (isshows) {
			this.setState({
				index: 1
			})
		}
		this.setState({
			zonghe: {},
			pd: 2
		})
		axios.get('/BtCApi/List/GetProListWhere?ParentID=' + this.props.match.params.parentId + '&brand=' + this.props.match.params.id + '&strWhere=0,0,0,0,0&sort=2&PageIndex=' + this.state.index + '&PageSize=20&userID=299221').then(data=>{
			if (data.data.data) {
				if (isshows) {
					var val = data.data.data.Prolist
				} else {
					var val = [...this.state.arr,...data.data.data.Prolist]
				}
				this.setState({
					arr: val,
					isshow: false
				})
			}
		})
	}
	youdidaogao(isshows){
		if (isshows) {
			this.setState({
				index: 1
			})
		}
		this.setState({
			zonghe: {},
			pd: 5
		})
		axios.get('/BtCApi/List/GetProListWhere?ParentID=' + this.props.match.params.parentId + '&brand=' + this.props.match.params.id + '&strWhere=0,0,0,0,0&sort=5&PageIndex=' + this.state.index + '&PageSize=20&userID=299221').then(data=>{
			if (data.data.data) {
				if (isshows) {
					var val = data.data.data.Prolist
				} else {
					var val = [...this.state.arr,...data.data.data.Prolist]
				}
				this.setState({
					arr: val,
					isshow: false
				})
			}
		})
	}
	yougaodaodi(isshows){
		if (isshows) {
			this.setState({
				index: 1
			})
		}
		this.setState({
			zonghe: {},
			pd: 4
		})
		axios.get('/BtCApi/List/GetProListWhere?ParentID=' + this.props.match.params.parentId + '&brand=' + this.props.match.params.id + '&strWhere=0,0,0,0,0&sort=4&PageIndex=' + this.state.index + '&PageSize=20&userID=299221').then(data=>{
			if (data.data.data) {
				if (isshows) {
					var val = data.data.data.Prolist
				} else {
					var val = [...this.state.arr,...data.data.data.Prolist]
				}
				this.setState({
					arr: val,
					isshow: false
				})
			}
		})
	}

	componentWillMount(){
		this.props.openThis()
	}
	componentWillUnmount(){
		this.props.closeThis()
	}
	zonghe(){
		this.setState({
			zonghe: {a: '评价最多',b: '最新产品',c: 'pingjiazuiduo'}
		})
	}
	jiage(){
		this.setState({
			zonghe: {a: '价格由低到高',b: '价格由高到低',c: 'youdidaogao'}
		})
	}
	dels(){
		this.setState({
			zonghe: {}
		})
	}
}

export default connect(null,{
	openThis(){
		return{
			type: 'showNav',
			payload: false
		}
	},
	closeThis(){
		return{
			type: 'hideNav',
			payload: true
		}
	}
})(contentList)
