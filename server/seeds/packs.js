/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('packs').del()
  await knex('packs').insert([
  {id: 1, name: "Force of the Breaker", code: "FOTB-EN043", price: "1.31"},
  {id: 2, name: "Gladiator's Assault", code: "GLAS-EN062", price: "2.1"},
  {id: 3, name: "Invasion: Vengeance", code: "INOV-EN063", price: "1.12"},
  {id: 4, name: "Strike of Neos", code: "STON-EN041", price: "1.13" },
  {id: 5, name: "Duelist Nexus", code: "DUNE-EN056", price: "0" },
  {id: 7, name: "2021 Tin of Ancient Battles", code: "MP21-EN136", price: "0.94"},
  {id: 8, name: "Amazing Defenders", code: "AMDE-EN042", price: "0" },
  {id: 9, name: "Rise of the Duelist", code: "ROTD-EN053", price: "5.35"},
  {id: 10, name: "2021 Tin of Ancient Battles", code: "MP21-EN137", price: "0.93"},
  ]);
};
