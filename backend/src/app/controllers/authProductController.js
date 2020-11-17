const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const allProducts = await Product.find({});

    return res.send({ allProducts });
  } catch (err) {
    return res.status(400).send({ error: 'Error detected!', err, });
  }
});

router.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);

    return res.send({ product });
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed!', err, });
  }
});

router.delete('/products', async (req, res) => {
  const { id } = req.body
  try {
    await Product.deleteOne({ _id: id });

    return res.send({ success: 'Product deleted successfully!' });
  } catch (err) {
    return res.status(400).send({ error: 'Error in delete product!', err, });
  }
});

module.exports = (app) => app.use('/auth', router);
