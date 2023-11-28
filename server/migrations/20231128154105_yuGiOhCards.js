/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('yuGiOhCards', function(table) {
      table.increments('id').primary().notNullable()
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.text('description').notNullable()
      table.string('race')
      table.string('archetype')
      table.string('image').notNullable()
      table.decimal(8,2)('price').notNullable()
      table.smallint('atk')
      table.smallint('def')
      table.tinyint('level')
      table.string('attribute')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  

  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('yuGiOhCards');
  }
