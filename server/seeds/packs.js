/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const {chunk} = require('../src/utility/utils.js')
const packs = require('./data/packs.json')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('packs').del()

  // we need to chunk the array to prevent running out of memory 
    // when inserting large datasets
  const chunkedPacks = chunk(packs, 1000)
  await Promise.all(chunkedPacks.map(async (element) => {
    return await knex('packs').insert(element)
  }))

  await knex.raw(`ALTER SEQUENCE packs_id_seq RESTART WITH ${packs.length + 1}`)
};

