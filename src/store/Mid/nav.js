const reducer = ((preState=true,action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'showNav':
			return payload
		case 'hideNav':
			return payload
		default:
			return preState
	}
})
export default reducer;