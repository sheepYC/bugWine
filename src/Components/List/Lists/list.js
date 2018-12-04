import React,{Component} from 'react';
import css from './index.module.scss';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Lists extends Component{
	constructor(props){
		super(props)
		this.state = {
			arr: []
		}
	}
	render(){
		return (
			<div>
				<div className={css.top}>
					<div className={css.input}>
						<span className={css.text}><i className="iconfont icon-sousuo"></i>　请输入商品名称</span>
					</div>
				</div>
				<div className={css.content}>
					{
						this.state.arr.length?
						this.state.arr.map(data=>{
							return<dl className={css.dl} key={data.Url}>
								<NavLink key={data.Url} to={'/list/biglist/' + data.Url}><dt className={css.dt} key={data.Url}>{data.TypeName}</dt></NavLink>
								{data.TypeData.map(dataVal=><NavLink className={css.dd} key={dataVal.Url} to={'/list/contentlist/' + data.Url + '/' + dataVal.Url}><dd key={dataVal.Url}>{dataVal.Name}</dd></NavLink>)}
							</dl>
						})
						:''
					}
				</div>
			</div>
		)
	}
	componentDidMount(){
		axios({
			url: '/BtCApi/List/GetSeriesList',
			method: 'GET'
		}).then(data=>{
			this.setState({
				arr: data.data.data.item_data
			})
			console.log(this.state.arr);
		})
	}

}

export default Lists;
