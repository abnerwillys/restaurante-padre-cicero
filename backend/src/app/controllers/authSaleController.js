const express = require('express');
const Sale = require('../models/Sale');

const router = express.Router();

router.get('/sales', async (req, res) => {
  try {
    const allSales = await Sale.find({});

    return res.send({ allSales });
  } catch (err) {
    return res.status(400).send({ error: 'Error detected!', err, });
  }
});

router.post('/sales', async (req, res) => {
  try {
    const sale = await Sale.create(req.body);

    return res.send({ sale });
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed!', err, });
  }
});

router.delete('/sales', async (req, res) => {
  const { id } = req.body
  try {
    await Sale.deleteOne({ _id: id });

    return res.send({ success: 'Sale deleted successfully!' });
  } catch (err) {
    return res.status(400).send({ error: 'Error in delete sale!', err, });
  }
});

module.exports = (app) => app.use('/auth', router);
