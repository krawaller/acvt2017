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

var COOP = {
	köttfärs: 60,
	vitabönor: 30,
	tomat: 25,
	champinjon: 10,
	broccoli: 15,
	vitlok: 10,
	buljong: 6
};


function kostnad(recipe, store){
	var cost = 0;
	for (var key in recipe) {
		var ingred = recipe[key];
		cost = cost + ingred * store[key];
	}
	return cost;
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

console.log(kostnad(chiliconcarne, ICA)); 
console.log(kostnad(soppa, ICA));
findCheapestStore(chiliconcarne, ICA, COOP);