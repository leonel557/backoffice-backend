const { db } = require('../database');

const getByUsername = (username) => {
  return db(`
    SELECT * FROM users
    WHERE lower(username) = lower($1)
  `, [username])
}

const createNew = (username, password) => {
  return db(`
    INSERT INTO users
    (username, password, date_created)
    VALUES ($1, $2, NOW()) RETURNING id;
  `, [username, password])
}

module.exports = {
  getByUsername,
  createNew,
}
