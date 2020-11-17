import { action, thunk } from 'easy-peasy';
import api from '../services/api';

const productStore = {
  products: [],
  setProducts: action((state, payload) => {
    state.products = payload;
  }),
  pushNewProduct: action((state, newProduct) => {
    state.products.push(newProduct);
  }),
  getAllProducts: thunk(async (actions, payload) => {
    const { data } = await api.get('auth/products');

    data.allProducts = data.allProducts.map((product) => {
      const { name } = product;

      return {
        ...product,
        value: name.charAt(0).toUpperCase() + name.slice(1),
        label: name.charAt(0).toUpperCase() + name.slice(1),
      };
    });

    actions.setProducts(data.allProducts);
  }),
  saveNewProduct: thunk(async (actions, newProduct) => {
    const { data } = await api.post('auth/products', newProduct);

    actions.pushNewProduct(data.product);
  }),
};

export default productStore;
