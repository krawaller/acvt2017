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

function kostnad(recipe, store){

	var cost = 0;
	for (var key in recipe) {
		var ingred = recipe[key];
		cost = cost + ingred * store[key];
	}
	return cost;
}

console.log(kostnad(chiliconcarne, ICA)); 
console.log(kostnad(soppa, ICA));