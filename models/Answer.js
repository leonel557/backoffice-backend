const { db } = require('../database');

const getAnswers = (id_question) => {
  return db(`
    SELECT id, description FROM answers
    WHERE id_question = $1 
  `, [id_question]);
}

module.exports = {
  getAnswers,
}
