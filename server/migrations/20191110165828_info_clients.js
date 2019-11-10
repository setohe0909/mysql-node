/**
 * Create infoClients table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.up = function(knex) {
  return knex.schema.createTable('infoClients', table => {
      table.increments('nit').primary().unsigned();
      table.string('full_name').notNullable();
      table.string('address').notNullable();
      table.string('phone').notNullable();
      table.string('city').notNullable();
      table.string('state').notNullable();
      table.string('country').notNullable();
      table.integer('credit_limit').notNullable();
      table.integer('available_credit').notNullable();
      table.integer('visit_percentage').notNullable();
      table.integer('visits').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * Drop infoClients table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('infoClients');
};
