const { db } = require('../database');

const getQuestions = () => {
  return db(`
    SELECT * FROM questions
  `, [])
}

module.exports = {
  getQuestions,
}
