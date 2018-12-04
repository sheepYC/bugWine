const mineList = (prevState=[],action={})=>{
	let {type,payload} = action;
	switch(type){
		case "getMyList":return [...prevState,...payload];
		default : return prevState;
	}
}

export default mineList