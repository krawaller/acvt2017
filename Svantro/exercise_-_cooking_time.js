// RECIPES
var porridgeRecipe = {
	oatmeal: 1,
	water: 1,
	milk: 1,
	salt: 0.5,
	raisins: 0.25,
	pumpkinseeds: 0.12
};

var pancakeRecipe = {
	egg: 2,
	flour: 2,
	water: 2,
	salt: 0.5
};

var omeletteRecipe = {
	egg: 2,
	onion: 1,
	salt: 0.5,
	pepper: 0.5
};

var recipes = [porridgeRecipe, pancakeRecipe, omeletteRecipe];

// SHOPS
var ica = {
	name: "ICA",
	water: 0,
	oatmeal: 10,
	milk: 5,
	salt: 5,
	raisins: 12,
	pumpkinseeds: 40,
	egg: 15,
	flour: 10,
	onion: 4,
	pepper: 10
};

var coop = {
	name: "COOP",
	water: 0,
	oatmeal: 15,
	milk: 10,
	salt: 5,
	raisins: 5,
	pumpkinseeds: 50,
	egg: 10,
	flour: 10,
	onion: 16,
	pepper: 10
};

var willys = {
	name: "WILLYS",
	water: 0,
	oatmeal: 5,
	milk: 5,
	salt: 10,
	raisins: 9,
	pumpkinseeds: 35,
	egg: 12,
	flour: 10,
	onion: 14,
	pepper: 5	
};

var shops = [ica, coop, willys];

// FUNCTIONS
function costOfRecipe(recipe, store) {
	var sum = 0;
	var amount = 0;
	var cost = 0;
	for(var key in recipe) {
		amount = recipe[key];
		cost = store[key];

		sum += (cost * amount);
	}

	return sum;
}

function cheapestShop(recipe, shops) {
	var results = [];
	for(var key in shops) {
		results.push(costOfRecipe(recipe, shops[key]));
	}

	var indexOfLowestPriceShop = 0;
	var min = results[indexOfLowestPriceShop];
	for(var i = 0; i < results.length; i++) {
		if(min > results[i]) {
			min = results[i];
			indexOfLowestPriceShop = i;
		}
	}

	return shops[indexOfLowestPriceShop].name;
}

// TEST RUNS
var recipe = 2; // change to test different recipes
console.log("ICA cost: " + costOfRecipe(recipes[recipe], shops[0]));
console.log("COOP cost: " + costOfRecipe(recipes[recipe], shops[1]));
console.log("WILLYS cost: " + costOfRecipe(recipes[recipe], shops[2]));
console.log("Cheapest shop: " + cheapestShop(recipes[recipe], shops));