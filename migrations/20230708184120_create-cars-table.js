/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('vin')
          .unique()
          .notNullable();
        tbl.string('make')
          .notNullable();
        tbl.string('model')
          .notNullable();
        tbl.integer('milage')
          .notNullable();
        tbl.string('title');
        tbl.string('transmission');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableifExists('cars')
};
