/* Inspiration from Elequent Javascript, 3rd Edition,  Chapter 3

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
*/

/* jshint esversion: 6 */

//Given a desired volume, output grams needed

const  carolinaNA = function (volume) {
  let mixAmount = volume / 1000 * 23;
  return mixAmount.toFixed(2) + ' grams';
};
