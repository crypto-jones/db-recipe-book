exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        // Veggie Chili
        { quantity: '4 cans', recipe_id: 1, ingredient_id: 1 }, // beans
        { quantity: '1 stick', recipe_id: 1, ingredient_id: 2 }, // butter
        { quantity: '1 large', recipe_id: 1, ingredient_id: 3 }, // onions
        { quantity: '10 medium', recipe_id: 1, ingredient_id: 4 }, // tomatos

        // Texas Chili
        { quantity: '2 packs', recipe_id: 2, ingredient_id: 5 }, // ground beef
        { quantity: '1 stick', recipe_id: 2, ingredient_id: 2 }, // butter
        { quantity: '1 large', recipe_id: 2, ingredient_id: 3 }, // onions
        { quantity: '10 medium', recipe_id: 2, ingredient_id: 4 }, // tomatos

        // Veggie Mac & Cheese
        { quantity: '1/2 stick', recipe_id: 3, ingredient_id: 2 }, // butter
        { quantity: '2 boxes', recipe_id: 3, ingredient_id: 6 }, // pasta
        { quantity: '1 pound', recipe_id: 3, ingredient_id: 7 }, // cheese

        // Decadent Crawfish Mac & Cheese
        { quantity: '1/2 stick', recipe_id: 4, ingredient_id: 2 }, // butter
        { quantity: '2 boxes', recipe_id: 4, ingredient_id: 6 }, // pasta
        { quantity: '1 pound', recipe_id: 4, ingredient_id: 7 }, // cheese
        { quantity: '50 peeled tails', recipe_id: 4, ingredient_id: 8 } // crawfish
      ]);
    });
};
