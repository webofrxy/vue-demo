//获取列表
  	getInfo(){
  	// 	let getArr = $(".carList i");
  	// 	let id_Info = "";
  	// 	let num_Info = "";
  	// 	for(let i=0,len=getArr.length;i<len;i++){
  	// 		if(getArr[i].innerHTML != ""){
  	// 			id_Info += "'"+$(".remove_menu").eq(i).attr("remove_id")+"':'"+"1"+"',";
  	// 			// console.log($(".carList .carCase").eq(i).children().eq(8))
  	// 		}
			// num_Info += "'"+$(".remove_menu").eq(i).attr("remove_id")+"':'"+$(".goodsNum").eq(i).html()+"',";
			// // console.log(num_Info)
  	// 	}
  	// 	id_Info = eval("({"+id_Info.slice(0,id_Info.length-1)+"})");
  		
  	// 	num_Info = eval("({"+num_Info.slice(0,num_Info.length-1)+"})");
  		
  		
  	// 	this.updataInfo = {
  	// 		'cart_select':id_Info,
			// 'goods_num':num_Info
  	// 	}
  		console.log(this.cartList.length)
  		for(let i=0,len=this.cartList.length;i<len;i++){
	        this.updateInfo.cart_select[this.cartList[i].id]=this.cartList[i].selected;
	        this.updateInfo.goods_num[this.cartList[i].id]=this.cartList[i].goods_num;
      	}
  		console.log(this.updateInfo)


  	},