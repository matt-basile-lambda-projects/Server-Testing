
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(users){
      users.increments();
      users.string('username', 255).notNullable().unique('uq_username');
      users.string('slogan', 255);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
