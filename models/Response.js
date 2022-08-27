const { db } = require('../database');

const createResponse = (id_evaluation, id_question, id_answer) => {
  return db(`
    INSERT INTO responses
    (id_evaluation, id_question, id_answer)
    VALUES ($1, $2, $3);
  `, [id_evaluation, id_question, id_answer])
}

module.exports = {
  createResponse,
}
