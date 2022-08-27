const { db } = require('../database');

const getAnswers = (id_question) => {
  return db(`
    SELECT id, description FROM answers
    WHERE id_question = $1 
  `, [id_question]);
}

const getCorrectAnswers = () => {
  return db(`
    SELECT id, id_question FROM answers
    WHERE is_correct = true
  `)
}

module.exports = {
  getAnswers,
  getCorrectAnswers,
}
