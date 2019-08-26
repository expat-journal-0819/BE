exports.up = function(knex) {
  return knex.schema.createTable("stories", story => {
    story.increments();
    story.string("image_url");
    story.string("title").notNullable();
    story.string("content").notNullable();
    story
      .integer("poster_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("stories");
};
