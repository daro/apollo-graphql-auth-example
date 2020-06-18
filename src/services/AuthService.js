import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default {
  getUser: req => {
    const tokenHeader = req.headers.authorization || '';

    if (!tokenHeader) {
      return {};
    }

    const token = tokenHeader.replace('Bearer ', '');
    const data = jwt.verify(token, process.env.APP_SECRET);
    return { ...data };
  },

  getHashPassword: async password => {
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword;
  },

  checkPassword: async (inputPassword, userPassword) => {
    const isValid = await bcrypt.compare(inputPassword, userPassword);
    return isValid;
  },

  getToken: data => jwt.sign(data, process.env.APP_SECRET),
};

