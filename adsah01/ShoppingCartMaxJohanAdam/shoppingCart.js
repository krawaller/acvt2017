var lasagne = {
  meat: 1,
  cheese: 2,
  pasta: 5
}

var chiliConCarne = {
  meat: 3,
  beans: 1,
  spiceMix: 6
}

var pizza = {
  paprika: 3,
  cheese: 4,
  dough: 5
}

var ICA = {
  meat: 15,
  cheese: 8,
  pasta: 4,
  beans: 2,
  spiceMix: 1,
  paprika: 12,
  dough: 6
}


var CITYGROSS = {
  meat: 8,
  cheese: 5,
  pasta: 14,
  beans: 3,
  spiceMix: 2,
  paprika: 11,
  dough: 8
}

var COOP = {
  meat: 12,
  cheese: 9,
  pasta: 6,
  beans: 3,
  spiceMix: 2,
  paprika: 13,
  dough: 4
}

var stores = {
 CITYGROSS: CITYGROSS,
 ICA: ICA,
 COOP: COOP
}

var stores1 = [ICA, CITYGROSS, COOP];
console.log(stores1);

function costOfRecipe(recipe, store) {
  var price = 0;
  for ( ingredient in recipe ) {
    price = price + recipe[ingredient] * store[ingredient];
  }
  return price;
}

function findCheapestStore(recipe, stores) {
  var lowestPrice = 10000;
   var cheapestStore;
   for (var store in stores ) {
    var price = costOfRecipe(recipe, stores[store]);
    if (price < lowestPrice) {
         lowestPrice = price;
         cheapestStore = store;
        }
      }
      return cheapestStore;
    }
