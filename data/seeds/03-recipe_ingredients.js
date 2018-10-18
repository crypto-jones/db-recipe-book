exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        // Veggie Chili
        { quanity: '4 cans', recipe_id: 1, ingredient_id: 1 }, // beans
        { quanity: '1 stick', recipe_id: 1, ingredient_id: 2 }, // butter
        { quanity: '1 large', recipe_id: 1, ingredient_id: 3 }, // onions
        { quanity: '10 medium', recipe_id: 1, ingredient_id: 4 }, // tomatos

        // Texas Chili
        { quanity: '2 packs', recipe_id: 2, ingredient_id: 5 }, // ground beef
        { quanity: '1 stick', recipe_id: 2, ingredient_id: 2 }, // butter
        { quanity: '1 large', recipe_id: 2, ingredient_id: 3 }, // onions
        { quanity: '10 medium', recipe_id: 2, ingredient_id: 4 }, // tomatos

        // Veggie Mac & Cheese
        { quanity: '1/2 stick', recipe_id: 3, ingredient_id: 2 }, // butter
        { quanity: '2 boxes', recipe_id: 3, ingredient_id: 6 }, // pasta
        { quanity: '1 pound', recipe_id: 3, ingredient_id: 7 }, // cheese

        // Decadent Crawfish Mac & Cheese
        { quanity: '1/2 stick', recipe_id: 4, ingredient_id: 2 }, // butter
        { quanity: '2 boxes', recipe_id: 4, ingredient_id: 6 }, // pasta
        { quanity: '1 pound', recipe_id: 4, ingredient_id: 7 }, // cheese
        { quanity: '50 peeled tails', recipe_id: 4, ingredient_id: 8 } // crawfish
      ]);
    });
};
