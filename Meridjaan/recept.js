var snorsoppa = {
	
	barnsnor: 3,
	vatten: 1,
	lok: 4,
	chili: 5
};

var lasagne = {
	
	ogon: 2,
	tomatsas: 1,
	tandkott: 6
	
};

var glass = {
	
	emalj: 5,
	vanilj: 2,
	kottbullar: 3,
	harstra: 1
	
};

var DOMUS = {

	barnsnor: 20,
	vatten: 25,
	lok: 10,
	chili: 15,
	ogon: 35,
	tomatsas: 30,
	tandkott: 5,
	emalj: 65,
	vanilj: 60,
	kottbullar: 100,
	harstra: 50
};



function kostnad(store, recept){
	var totalpris = 0;
	for (var ingrid in recept)
		totalpris = totalpris + recept[ingrid]*store[ingrid];
	

return totalpris;
	
	
}
console.log("Snorsoppa på Domus kostar" ,kostnad(DOMUS, snorsoppa));
