exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredient', function(tbl) {
    tbl.increments();

    tbl.string('quantity').notNullable();

    tbl
      .integer('recipe_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('ingredients');

    tbl
      .integer('ingredient_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredient');
};
