var chiliconcarne = {
	köttfärs: 1,
	vitabönor: 3,
	tomat: 2,
	champinjon: 10
};

var soppa = {
	broccoli: 3,
	vitlok: 5,
	buljong: 3
}

var ICA = {
	köttfärs: 40,
	vitabönor: 20,
	tomat: 15,
	champinjon: 5,
	broccoli: 10,
	vitlok: 5,
	buljong: 3
};
var Konsum = {
	köttfärs: 35,
	vitabönor: 17,
	tomat: 19,
	champinjon: 5,
	broccoli: 10,
	vitlok: 5,
	buljong: 3
};

var COOP = {
	köttfärs: 60,
	vitabönor: 30,
	tomat: 25,
	champinjon: 10,
	broccoli: 15,
	vitlok: 10,
	buljong: 6
};

var Lidl = {
	köttfärs: 30,
	vitabönor: 10,
	tomat: 10,
	champinjon: 2,
	broccoli: 6,
	vitlok: 3,
	buljong: 2
};

var Netto = {
	köttfärs: 35,
	vitabönor: 12,
	tomat: 12,
	champinjon: 4,
	broccoli: 10,
	vitlok: 3,
	buljong: 4
};

var allShops = {
	ICA: ICA,
	COOP: COOP,
	Konsum: Konsum,
	Netto: Netto,
	Lidl: Lidl
};

function costOfRecipe(recipe, store){
	var cost = 0;
	for (var ingredient in recipe) {
		cost += recipe[ingredient] * store[ingredient];
	}
	return cost;
}

function theMostCheapestStore(recipe, shops) {

	var cheapestPrice = Infinity;
	cheapestShopName = "";
	for (var shopName in shops) {
		var priceAtShop = costOfRecipe(recipe, shops[shopName]);
		if (priceAtShop < cheapestPrice) {
			cheapestPrice = priceAtShop;
			cheapestShopName = shopName;
		}
	}
	return cheapestShopName;
}


function findCheapestStore(recipe, store1, store2){
	var cost1 = 0;
	var cost2 = 0;

	for (var key in recipe) {
		var ingred = recipe[key];
		cost1 = cost1 + ingred * store1[key];
	}
	for (var key in recipe) {
		var ingred = recipe[key];
		cost2 = cost2 + ingred * store2[key];
}
	if (cost1 < cost2) {
		console.log("ICA är billigast");
	}
	else {
		console.log("COOP är billigast");
	}
}

console.log(costOfRecipe(chiliconcarne, ICA)); 
console.log(costOfRecipe(soppa, ICA));
console.log("The cheapest shop for food is at", theMostCheapestStore(chiliconcarne, allShops));
