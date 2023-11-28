/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('guidesTags', (table) => {
        table.increments('id').notNullable()
        table.integer('guideId').notNullable().references('id').inTable('guide')
        table.string('tag').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('guidesTags');
};
