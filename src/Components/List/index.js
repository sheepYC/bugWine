import React,{Component} from 'react';
import css from './index.module.scss';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class List extends Component{
	constructor(props){
		super(props)
		this.state = {
			arr: []
		}
	}
	render(){
		return (
			<div className={css.world}>
				<div className={css.top}>
					<div className={css.input}>
						<span className={css.text}><i className="iconfont icon-sousuo"></i>　请输入商品名称</span>
					</div>
				</div>
				<div className={css.content}>
					{
						this.state.arr?
						this.state.arr.map(data=>{
							return<dl className={css.dl} key={data.Url}>
								<dt className={css.dt} key={data.Url}>{data.TypeName}</dt>
								{data.TypeData.map(dataVal=><dd className={css.dd} key={dataVal.Url}>{dataVal.Name}</dd>)}
							</dl>
						})
						:''
					}
				</div>
				{this.props.children}
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

export default List
