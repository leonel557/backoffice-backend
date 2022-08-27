const { db } = require('../../database');
const jwt = require('jsonwebtoken');
const Answer = require('../../models/Answer');
const Response = require('../../models/Response');
const Evaluation = require('../../models/Evaluation');

module.exports = async (_, { responses }, { req }) => {
  console.log('Mutation => sendEvaluation');
  try {
    const id_user = decodeToken(req);
    await db('BEGIN');
    const evaluationRes = await Evaluation.createEvaluation(id_user);
    if (!evaluationRes.length) throw new Error('ThereWasAnError');
    const id_evaluation = evaluationRes[0].id;
    
    const correctAnwers = await Answer.getCorrectAnswers();
    
    let score = 0;
    for (const r of responses) {
      await Response.createResponse(id_evaluation, r.id_question, r.id_answer)
      const answer = correctAnwers.filter(a => a.id_question == r.id_question)[0];
      score += answer.id == r.id_answer ? 3 : -1;
    }
    await Evaluation.updateScore(id_evaluation, score);
    
    await db('COMMIT');
    return score;
  } catch (error) {
    await db('ROLLBACK');
    throw error;
  }
}

const decodeToken = (req) => {
  const { authorization } = req.headers;
  try {
    const decoded = jwt.decode(authorization);
    if (!decoded) throw new Error('invalidToken');
    if (decoded.id) {
      return decoded.id;
    }
  } catch (error) {
    return error
  }
};
