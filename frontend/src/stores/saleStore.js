import { action, thunk } from 'easy-peasy';
import api from '../services/api';

const saleStore = {
  sales: [],
  setSales: action((state, payload) => {
    state.sales = payload;
  }),
  pushNewSale: action((state, newSale) => {
    state.sales.push(newSale);
  }),
  getAllSales: thunk(async (actions, payload) => {
    const { data } = await api.get('auth/sales');

    actions.setSales(data.allSales);
  }),
  saveNewSale: thunk(async (actions, newSale) => {
    const { data } = await api.post('auth/sales', newSale);

    actions.pushNewSale(data.sale);
  }),
};

export default saleStore;
