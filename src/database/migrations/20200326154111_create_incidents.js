
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('title', 100).notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    
    //table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
