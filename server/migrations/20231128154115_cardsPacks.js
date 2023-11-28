/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cardsPacks', (table) => {
        table.increments('id').notNullable()
        table.integer('cardId').notNullable().references('id').inTable('yuGiOhCards').onDelete('CASCADE')
        table.integer('packId').notNullable().references('id').inTable('packs').onDelete('CASCADE')
        table.string('rarity')
      })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cardsPacks');
};
