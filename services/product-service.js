var productsList =[
	{id:1,name:'fridge', brand:'videocon', category:'electronics',rating:'5 star',price:"20000",orderdate:"22 march"},
    {id:2,name:'Mobile', brand:'videocon', category:'electronics',rating:'4 star',price:"15000",orderdate:"22 march"},
    {id:3,name:'laptop', brand:'videocon', category:'electronics',rating:'3 star',price:"21000",orderdate:"22 march"},
    {id:4,name:'table', brand:'videocon', category:'electronics',rating:'2 star',price:"22000",orderdate:"22 march"},
    {id:5,name:'fridge', brand:'videocon', category:'electronics',rating:'5 star',price:"20000",orderdate:"22 march"},
    {id:6,name:'fridge', brand:'videocon', category:'electronics',rating:'5 star',price:"20000",orderdate:"22 march"}
];

const getproducts = function(){
	return productsList;
}

const addproducts= (product)=>{
    product.id=Math.floor(Math.random()*1000000)
    productsList.push(product)
    return {result:'success',msg:"customer added ok"};
	 
}

const deleteproduct = (id)=>{
	var tempList = [];
	for(var i=0;i<productsList.length;i++){
		if(productsList[i].id != id){
			tempList.push(productsList[i])
		}
	}
	productsList = tempList;
	return {result:'success',msg:"customer deleted ok"};
	 
}

const getProductById = function(id){
	var product = {};
	for (var i = 0; i < productsList.length; i++) {
		if(productsList[i].id == id){
			return productsList[i];
		}
	}
	return product;
}

const updateproduct = function(product){
	for(var i=0;i<productsList.length;i++){
		if(productsList[i].id == product.id){
			productsList[i] = product;
			break;
		}
	}
	return {result:'success',msg:"customer updated ok"};
	 
}

const copyproducts= (product)=>{
	for(var i=0;i<productsList.length;i++){
		if(productsList[i].id == product.id){
			productsList[i] = product;
			break;
		}
	}
    productsList.push(product)
    return {result:'success',msg:"customer copied ok"};
	 
}


module.exports = {getproducts,addproducts,deleteproduct,getProductById,updateproduct,copyproducts}