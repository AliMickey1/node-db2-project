const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  // resolves to an array of car records (or an empty array)
  return db('cars');
}

const getById = (id) => {
  // DO YOUR MAGIC
  // resolves to a car record by the given id
  return db('cars').where('id', id).first();
}

const create = (car) => {
  return db('cars').insert(car)
    .then(([id]) => getById(id))
}

module.exports = {
  getAll,
  getById,
  create,
}