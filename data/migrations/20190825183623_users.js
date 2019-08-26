exports.up = function(knex) {
  return knex.schema.createTable("users", user => {
    user.increments();
    user
      .string("email")
      .notNullable()
      .unique();
    user.string("first_name");
    user.string("last_name");
    user.string("password").notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("users");
};
