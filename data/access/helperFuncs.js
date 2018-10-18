const knex = require('knex');
const knexConfig = require('knexConfig');
const db = knex(knexConfig.development);

// Get All Dishes
const getDishes = () => {
  return db('dishes').select('*');
};

// Add A Dish
const addDish = () => {
  return db.insert(dish).into('dishes');
};

// Get Dish By ID
const getDish = id => {
  return db('dishes')
    .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
    .select('dishes.dish_name', 'recipes.recipe_name')
    .where('recipes.dish_id', id);
};

// Get All Recipes
const getRecipes = () => {
  return db('dishes')
    .join('recipes', 'dishes.id', '=', 'dishes.id')
    .select('dishes.dish_name', 'recipes.recipe_name');
};

// TODO: getRecipe(id)

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes
};
