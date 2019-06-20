const jwt = require('jsonwebtoken');

const secrets = require('./secrets');

module.exports = {
  generateToken,

};

function generateToken(user) {
  const payload = {
    userId: user.id,
  };

  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secrets.jwt, options);
}
