import React,{Component} from 'react';
import axios from 'axios';
import $ from  'jquery';
import css from './biglist.module.scss';
import {NavLink} from 'react-router-dom';

class biglist extends Component{
	constructor(props){
		super(props)
		this.state = {
			arr: [],
		}
	}
	render(){
		return (
			<div>
				<div className={css.top}>
					<span><NavLink to='/list/lists'><i className="iconfont icon-zuojiantou"></i></NavLink></span>
					<p>全部品牌</p>
				</div>
				{this.state.arr.segs?
					<div className={css.minWorld}>
						{this.state.arr.segs.map((datas,index)=>{
							return<div key={index}>
							<div key={index} className={css.abc}> {datas.letter}</div>
								{datas.data.map(dataVal=>{
									return<NavLink key={dataVal.Url} to={'/list/contentlist/' + this.props.match.params.id + '/' + dataVal.Url}><div className={css.val} key={dataVal.Url}>{dataVal.TypeName}</div></NavLink>
								})}
							</div>
						})}
					</div>
					:''
				}
			</div>
		)
	}
	componentDidMount(){
		axios({
			url: 'http://m.gjw.com/BtCApi/List/GetSeriesListALL?ParentID=1',
			method: 'GET'
		}).then(data=>{
			var str = this.pySegSort(data.data.data.item_data);
			console.log(str);
			console.log(this.props.match.params.id)
			this.setState({
				arr: str
			})
		})
	}

	pySegSort(arr, empty) {
	    if(!String.prototype.localeCompare)
	        return null;
	    var letters = "*ABCDEFGHJKLMNOPQRSTWXYZ".split('');
	    var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');
	    var segs = [];// 存放数据
	    var py = [];// 存放首字母
	    var res = {};
	    var curr;
	    $.each(letters, function(i) {
	        curr = {
	            letter: this,
	            data: []
	        };
	        $.each(arr, function(k, v) {
	            if((!zh[i - 1] || zh[i - 1].localeCompare(v.TypeName) <= 0) && v.TypeName.localeCompare(zh[i]) == -1) {
	                curr.data.push(this);
	            }
	        });
	        if(empty || curr.data.length) {
	            py.push(this);
	            segs.push(curr);
	            curr.data.sort(function(a, b) {
	                return a.TypeName.localeCompare(b.TypeName);
	            });
	        }
	    });
	    res["segs"] = segs;
	    res["py"] = py;
	    return res;
	}
}

export default biglist
