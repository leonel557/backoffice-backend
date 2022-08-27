const { db } = require('../database');

const createEvaluation = (id_user) => {
  return db(`
    INSERT INTO evaluations (id_user, date_created)
    VALUES ($1, NOW()) RETURNING id;
  `, [id_user])
}

const updateScore = (id_evaluation, score) => {
  return db(`
    UPDATE evaluations SET score = $2
    WHERE id = $1
  `, [id_evaluation, score])
}

const getEvaluationsByUser = (id_user) => {
  return db(`
    SELECT count(id) FROM evaluations
    WHERE id_user = $1
  `, [id_user])
}

module.exports = {
  createEvaluation,
  updateScore,
  getEvaluationsByUser,
}
