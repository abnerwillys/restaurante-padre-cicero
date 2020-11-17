import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { FiPlus, FiRotateCcw } from 'react-icons/fi';
import HeaderSystem from '../../components/HeaderSystem';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { Wrapper } from './styles'; 

function SaleCreate() {
  const [allProducts, setAllProducts] = useState([]);

  const [sale_date, setSaleDate] = useState('');
  const [waiter, setWaiter] = useState('');
  const [tip, setTip] = useState('');

  const [customer, setCustomer] = useState('');
  const [total_price, setTotalPrice] = useState('');

  const [productItems, setProductItems] = useState([
    { product_name: '', quantity: 1, unit_price: '', calculated_price: '' },
  ]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:4000/products');
      const productsList = response.data;

      setAllProducts(productsList);
    };

    getProducts();
  }, []);

  function handleSetTip(value) {
    setTip(value);
    calculateTotalPrice(productItems, value);
  }

  function addNewProduct() {
    setProductItems([
      ...productItems,
      { product_name: '', quantity: 1, unit_price: '', calculated_price: '' },
    ]);
  }

  function setProductItemsValue(position, field, value) {
    const updatedProductItems = productItems.map((productItem, index) => {
      if (index === position) {
        return { ...productItem, [field]: value };
      }

      return productItem;
    });

    const productCalculated = calculatePricesFrom(
      updatedProductItems[position]
    );
    if (productCalculated) {
      updatedProductItems[position] = productCalculated;
    }

    setProductItems(updatedProductItems);
    calculateTotalPrice(updatedProductItems);
  }

  function calculatePricesFrom(currProductItem) {
    const productFound = allProducts.find(
      (product) => product.name === currProductItem.product_name
    );

    if (productFound) {
      let { quantity } = currProductItem;

      const unit_price = productFound.price.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      });
      const calculated_price = (
        productFound.price * quantity
      ).toLocaleString('pt-br', { minimumFractionDigits: 2 });

      return {
        ...currProductItem,
        unit_price,
        calculated_price,
      };
    }
  }

  function calculateTotalPrice(currProductItem, valueTip) {
    let sumOfPrices = currProductItem.reduce((acc, curr) => {
      const { calculated_price } = curr;
      
      const currentPrice = calculated_price !== '' ? parseInt(calculated_price.replace('.', '')) : 0;
      return acc + currentPrice;
    }, 0);

    if (!sumOfPrices) {
      return setTotalPrice('0,00');
    }

    let finalPrice = sumOfPrices.toLocaleString('pt-br', {minimumFractionDigits: 2,});
    if (tip !== '' || valueTip) {
      const tipCalculated = valueTip
        ? sumOfPrices * (parseInt(valueTip) / 100)
        : sumOfPrices * (parseInt(tip) / 100);

      finalPrice = (sumOfPrices + tipCalculated).toLocaleString('pt-br', {minimumFractionDigits: 2,});
    }

    setTotalPrice(finalPrice);
  }

  function resetFields() {
    setSaleDate('')
    setWaiter('')
    setTip('')
    setCustomer('')
    setTotalPrice('')
    setProductItems([{ product_name: '', quantity: 1, unit_price: '', calculated_price: '' }])
  }

  async function handleCreateSale(e) {
    e.preventDefault();

    const formaData = {
      saleDate: sale_date,
      waiter,
      tip,
      customer,
      totalPrice: total_price,
      productItems
    }

    console.log(formaData);

    try {
      await axios.post('http://localhost:4000/sales', formaData)

      alert('Venda cadastrada com sucesso!')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div id="basic-structure">
      <Navbar activeLink="sale-create" />

      <main>
        <HeaderSystem title="Registrar Venda" />

        <Wrapper>
          <form onSubmit={handleCreateSale}>
            <fieldset>
              <div className="info">
                <Input
                  name="date"
                  type="date"
                  label="Data da venda:"
                  value={sale_date}
                  onChange={(e) => {setSaleDate(e.target.value);}}
                  required
                />
                <Input
                  name="waiter"
                  label="Garçom:"
                  value={waiter}
                  onChange={(e) => {setWaiter(e.target.value);}}
                />
                <Select
                  name="tips"
                  label="% de gorjeta:"
                  value={tip}
                  onChange={(e) => {handleSetTip(e.target.value);}}
                  options={[
                    { value: '5', label: '05 %' },
                    { value: '10', label: '10 %' },
                    { value: '15', label: '15 %' },
                    { value: '20', label: '20 %' },
                    { value: '25', label: '25 %' },
                    { value: '30', label: '30 %' },
                  ]}
                />
              </div>

              <div className="sale-products">
                {productItems.map((productItem, index) => {
                  return (
                    <div key={index} className="product-item">
                      <Select
                        name="product_name"
                        label="Produto:"
                        value={productItem.product_name}
                        onChange={(e) =>
                          setProductItemsValue(index,'product_name',e.target.value)
                        }
                        options={allProducts}
                        required
                      />
                      <Input
                        name="unit_price"
                        label="Preço Unitário (R$):"
                        disabled
                        value={productItem.unit_price}
                      />
                      <Input
                        name="quantity"
                        type="number"
                        min="1"
                        label="Quantidade:"
                        value={productItem.quantity}
                        onChange={(e) =>setProductItemsValue(index,'quantity',e.target.value)
                        }
                        required
                      />
                      <Input
                        name="calculated_price"
                        label="Preço calculado (R$):"
                        disabled
                        value={productItem.calculated_price}
                      />
                    </div>
                  );
                })}
              </div>
              <button type="button" onClick={addNewProduct}>
                <FiPlus />
                Adicionar produto
              </button>

              <div className="footer-form">
                <Input
                  name="customer"
                  label="Nome do cliente:"
                  value={customer}
                  onChange={(e) => {setCustomer(e.target.value);}}
                />
                <Input
                  name="total_price"
                  label="Total (R$):"
                  disabled
                  value={total_price}
                />
              </div>
            </fieldset>
            
            <div className="actions" >
              <div className="reset-form" onClick={resetFields} title="Resetar Campos">
                <FiRotateCcw />
              </div>
              <Button>Salvar</Button>
            </div>
          </form>
        </Wrapper>
      </main>
    </div>
  );
}

export default SaleCreate;
