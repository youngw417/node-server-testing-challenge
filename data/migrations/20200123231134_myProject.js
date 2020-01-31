
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name', 128)
        .notNullable()
        .index();
        tbl.text('description', 128);
        tbl.boolean('completed')
        .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name', 128)
        .notNullable()
        .index();
        tbl.text('description', 128);

    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description', 128)
        .notNullable();
        tbl.text('notes', 128);
        tbl.boolean('completed')
        .defaultTo(false);
        
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('pro-res', tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('pro-res')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
