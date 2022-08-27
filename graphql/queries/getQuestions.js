const Answer = require('../../models/Answer');
const Question = require('../../models/Question');

module.exports = async () => {
  console.log('Query => getQuestions');
  try {
    const questionsRes = await Question.getQuestions();

    const questions = [];
    for (const q of questionsRes) {
      const answers = await Answer.getAnswers(q.id);
      const obj = {
        ...q,
        answers,
      }
      questions.push(obj);
    }
    return questions;
  } catch (error) {
    throw error;
  }
}
