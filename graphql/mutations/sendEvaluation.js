const jwt = require('jsonwebtoken');

module.exports = async (_, {  }, { req }) => {
  console.log('Mutation => sendEvaluation');
  try {
    const id_user = decodeToken(req);
    return 5; // hardcoded Value
  } catch (error) {
    throw error;
  }
}

const decodeToken = (req) => {
  const { authorization } = req.headers;
  try {
    const decoded = jwt.decode(authorization);
    if (!decoded) throw new Error('invalidToken');
    if (decoded.id) {
      return id;
    }
  } catch (error) {
    return error
  }
};
