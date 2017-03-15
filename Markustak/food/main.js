var supersoup = {
	potatis :3,
	lök : 1,
	majs: 1,
}

var renskav = {
	ren : 1,
	potatis : 2,
	lingon :2,
	gradde :2,
}

var hamburgare = {
	bröd : 2,
	kött : 2,
	sallad : 1,
	tomat : 1,
}

var ica = {
	potatis : 42,
	tomat : 6,
	majs :2,
	ren:40,
	lingon : 5,
	gradde: 9,
	bröd: 9,
	kött: 14,
	sallad : 2,
	lök: 1,

}
var coop = {
	potatis : 3,
	tomat : 6,
	majs :3,
	ren:44,
	lingon : 7,
	gradde: 10,
	bröd: 9,
	kött: 15,
	sallad : 3,
	lök: 3,

}

var willys = {
	potatis : 111,
	tomat : 3,
	majs :1,
	ren:36,
	lingon : 3,
	gradde: 6,
	bröd: 4,
	kött: 10,
	sallad : 2,
	lök: 1,

}

var shops = {
	ica, 
	coop, 
	willys,
}

function calcFood(food, store){
	var price =0;
	for( var key in food){
		var antal = food[key];
		var kostnad = store[key];
		price = price + antal * kostnad;
	}
	return price;
}

function findCheapestStore(shopses, food){
	var billigt = 9999;
	var min="";
	for(var key in shopses){
		shopses[key] = calcFood(food,shopses[key]);
		//console.log(key+" "+shopses[key]);
		if(billigt>shopses[key]){
			min = key;
			billigt = shopses[key];
			//console.log("billig "+billigt);
		}
	}
	return min;
}
 
console.log(findCheapestStore(shops,renskav))