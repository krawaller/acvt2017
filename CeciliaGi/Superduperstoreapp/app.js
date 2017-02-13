var supersoup = {
	potato: 3, 
	onion: 2,
	corn: 1
};

var supersandwich = {
  sandwich: 2,
  butter: 4,
  ham: 1
};

var superoj = {
  orange: 6,
  carrot: 10,
  kale: 1
};

var shops = {
	coop: {
	  potato: 12, // kr per styck
	  onion: 7,
	  corn: 5,
	  sandwich: 20,
	  butter: 30,
	  ham: 10,
	  orange: 5,
	  carrot: 2,
	  kale: 6
	},
	ica: {
	  potato: 9, // kr per styck
	  onion: 6,
	  corn: 3,
	  sandwich: 35,
	  butter: 37,
	  ham: 15,
	  orange: 4,
	  carrot: 8,
	  kale: 6
	},
	hemkoep: {
	  potato: 10, // kr per styck
	  onion: 8,
	  corn: 9,
	  sandwich: 30,
	  butter: 40,
	  ham: 1,
	  orange: 3,
	  carrot: 1,
	  kale: 3
	}
};

function costOfRecipe(recipe, shops){
	var recipeKeys = Object.keys(recipe);
	var billigast = 0;
	var cheapestStore = "";
	for(var k in shops){
		var totalt = 0;
		for(var i=0; i < recipeKeys.length; i++){
			var store = shops[k];
			var storeKeys = Object.keys(store);
			for (var j=0; j < storeKeys.length; j++){
				if(storeKeys[j]==recipeKeys[i]){
					totalt += (store[storeKeys[j]] * recipe[recipeKeys[i]]);
				}
			}	
		}
		if(totalt < billigast || billigast == 0) {
				cheapestStore = k;
				billigast = totalt;		
		}
	}
	return billigast+" "+cheapestStore;
}
console.log("SuperOJ kostar "+costOfRecipe(superoj, shops));
console.log("SuperSandwich kostar "+costOfRecipe(supersandwich, shops));
console.log("SuperSoup kostar "+costOfRecipe(supersoup, shops));



