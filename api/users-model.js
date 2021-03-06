const db = require('../data/dbConfig');

module.exports = {
  add,
  remove,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'slogan');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}
async function remove(id) {
    const count = await db('users').where({id}).del();
    return count    
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}