var cheeseSandwich = {
	bread: 1,
	butter: 1,
	cheese: 2
}

var hamSandwich = {
	bread: 1,
	butter: 1,
	ham: 2
}

var eggSandwich = {
	bread: 1,
	butter: 1,
	egg: 2
}

var shops = {

ICA: {
	bread: 5,
	butter: 4,
	cheese: 10,
	ham: 12,
	egg: 7
}

LIDL: {
	bread: 4,
	butter: 3,
	cheese: 9,
	ham: 10,
	egg: 5
}

COOP: {
	bread: 4,
	butter: 3,
	cheese: 9,
	ham: 10,
	egg: 5
}
}


function costOfRecipe(recipe, store){
	var cost = 0;
	for(var key in recipe){
		cost = cost + (recipe[key] * store[key]);
		cost = cost;
	}
	return cost;
}

function findCheapestStore(recipe, stores){
var	min = 99999999;
var tmp;

for(var aff in stores){
	tmp = costOfRecipe(recipe, aff)
	if (tmp < min)
		min = tmp;
}
return tmp;
}

console.log("cheeseSandwich costs "+costOfRecipe(cheeseSandwich, ICA));
console.log("hamSandwich costs "+costOfRecipe(hamSandwich, ICA));
console.log("eggSandwich costs "+costOfRecipe(eggSandwich, ICA));

console.log("eggsandwich is cheapest at "+findCheapestStore(eggSandwich, shops))


//för varje sak i recipe
// ta sak gånger sakens kostnad i store

//var mystorething = COOP.bread



