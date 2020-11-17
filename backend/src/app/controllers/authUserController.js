const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/users', async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'User already exists!' });

    const user = await User.create(req.body);

    return res.send({ user });
  } catch (error) {
    return res.status(400).send({ error: 'Registration failed!' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const allUsers = await User.find({});

    return res.send({ allUsers });
  } catch (err) {
    return res.status(400).send({ error: 'Error detected!', err, });
  }
});

module.exports = (app) => app.use('/auth', router);
