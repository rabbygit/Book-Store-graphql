const { hash } = require("argon2");

const hashPassword = async (password) => {
  return await hash(password);
};

module.exports = {hashPassword}