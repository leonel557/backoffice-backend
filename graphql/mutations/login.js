const jwt = require('jsonwebtoken');
const User = require('../../models/User');

module.exports = async (_, { input }) => {
  console.log('Mutation => Login');
  try {
    const { username, password } = input;
    const userRes = await User.getByUsername(username);

    if (userRes.length) {
      // User exists
      const u = userRes[0];
      if (password !== u.password) throw new Error('usernameOrPasswordWrong');
      return generateToken(u.id);
    } else {
      // User not exists. Create account
      const createdRes = await User.createNew(username, password);
      if (!createdRes.length) throw new Error('thereWasAnError');
      const { id } = createdRes[0];
      return generateToken(id);
    }

  } catch (error) {
    throw error;
  }
}

const generateToken = (id) => {
  const secret = process.env.SECRET || 'This_is_my_secret'
  const token = jwt.sign({ id }, secret, {
    expiresIn: '12h',
  });
  return token;
}
