const mongoose = require('../database');

const SaleSchema = new mongoose.Schema({
  sale_date: {
    type: Date,
    required: true,
  },
  waiter: {
    type: String,
    default: '',
  },
  tip: {
    type: String,
    default: '',
  },
  customer: {
    type: String,
    default: '',
  },
  total_price: {
    type: Number,
    required: true,
  },
  productItems: [
    {
      product_name: { type: String, required: true },
      quantity: { type: Number, required: true },
      unit_price: { type: Number, required: true },
      calculated_price: { type: Number, required: true },
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;
