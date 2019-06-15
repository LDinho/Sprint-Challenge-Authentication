const axios = require('axios');
const bcrypt = require('bcryptjs');


const { authenticate } = require('../auth/authenticate');

const {
  generateToken,

} = require('./token');

const {
  addUser,
  getUserBy,

} = require('../helpers/usersHelper');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  const user = req.body;
  const { username, password } = user;

  const hash = bcrypt.hashSync(password, 12);
  user.password = hash;

  try {
    if (!username || !password) {
      return res.status(400)
        .json({
          errorMessage: "registration info missing."
        });
    }

    const userAdded = await addUser(user);
    const token = generateToken(user); // use of the jwt library

    return res.status(201)
      .json({
        user: userAdded,
        authToken: token,
      });

  }
  catch (err) {
    res.status(500)
      .json({
        err: err.message,
        error: `Server error`
      })
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
