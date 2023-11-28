/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('guideTags', (table) => {
        table.increments('id').primary()
        table.integer('guideId').notNullable().references('id').inTable('guides').onDelete('CASCADE')
        table.string('tag').notNullable()
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('guideTags');
};
