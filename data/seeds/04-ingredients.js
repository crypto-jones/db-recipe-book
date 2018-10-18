exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'beans' }, // 1
        { ingredient_name: 'butter' }, // 2
        { ingredient_name: 'onions' }, // 3
        { ingredient_name: 'tomatos' }, // 4
        { ingredient_name: 'ground beef' }, // 5
        { ingredient_name: 'pasta' }, // 6
        { ingredient_name: 'cheese' }, // 7
        { ingredient_name: 'crawfish' } // 8
      ]);
    });
};
