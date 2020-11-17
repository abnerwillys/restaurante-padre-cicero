import { createStore } from 'easy-peasy';
import productStore from './productStore';
import saleStore from './saleStore';

const store = createStore({
  product: productStore,
  sale: saleStore,
});

export default store;
