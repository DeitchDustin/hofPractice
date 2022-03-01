// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var results = 0;
  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      results++;
    }
  });
  return results;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var filter = _.filter(fruits, function ( fruit ) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
  return filter;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var filter = _.filter(fruits, function (fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
  return filter;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var filter = _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
  return filter;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var reduce = _.reduce(products, function(memo, item) {
    return Number(memo) + Number(item.price.substring(1));
  }, products[0].price.substring(1));
  return reduce - Number(products[0].price.substring(1));
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var reduce = _.reduce(desserts, function(memo, item) {
    if (!memo[item.type]) {
      memo[item.type] = 1;
    } else {
      memo[item.type]++;
    }
    return memo;
  }, {});
  return reduce;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var reduce = _.reduce(movies, function (memo, item) {
    if (item.releaseYear >= 1990 && item.releaseYear <= 2000) {
      memo.push(item.title);
    }
    return memo;
  }, []);
  return reduce;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var reduce = _.reduce(movies, function (memo, item) {
    if (item.runtime < timeLimit) {
      memo = true;
    }
    return memo;
  }, false);
  return reduce;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var map = _.map(fruits, function(item) {
    return item.toUpperCase();
  });
  return map;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var map = _.map(desserts, function(item) {
    item['glutenFree'] = item.ingredients.includes('flour');
    return item;
  });
  return map;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var map = _.map(groceries, function(item) {
    var salePrice = Number(item.price.substring(1)) - (item.price.substring(1) * coupon);
    item['salePrice'] = '$' + parseFloat(salePrice.toString()).toFixed(2);
    return item;
  });
  return map;
};
