import React, { useEffect, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { FiPlus, FiRotateCcw } from 'react-icons/fi';
import HeaderSystem from '../../components/HeaderSystem';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { Wrapper } from './styles';

function SaleCreate() {
  const products = useStoreState((state) => state.product.products);
  const getAllProducts = useStoreActions((actions) => actions.product.getAllProducts);
  const saveNewSale = useStoreActions((actions) => actions.sale.saveNewSale);

  const [sale_date, setSaleDate] = useState('');
  const [waiter, setWaiter] = useState('');
  const [tip, setTip] = useState('');
  const [customer, setCustomer] = useState('');
  const [total_price, setTotalPrice] = useState('0,00');

  const structureProductItem = {
    product_name: '',
    quantity: 1,
    unit_price: '0,00',
    calculated_price: '0,00',
  };
  const [productItems, setProductItems] = useState([structureProductItem]);

  useEffect(() => {
    getAllProducts();
  }, []);

  function handleSetTip(value) {
    setTip(value);
    calculateTotalPrice(productItems, value);
  }

  function addNewProductItem() {
    setProductItems([...productItems, structureProductItem]);
  }

  function setProductItemsValue(position, field, value) {
    const updatedProductItems = productItems.map((productItem, index) => {
      if (index === position) {
        return { ...productItem, [field]: value };
      }

      return productItem;
    });

    const productItemCalculated = calculatePricesFrom(
      updatedProductItems[position]
    );
    if (productItemCalculated) {
      updatedProductItems[position] = productItemCalculated;
    }

    setProductItems(updatedProductItems);
    calculateTotalPrice(updatedProductItems);
  }

  function calculatePricesFrom(currProductItem) {
    const productFound = products.find(
      (product) => product.name === currProductItem.product_name
    );

    if (productFound) {
      let { quantity } = currProductItem;

      const unit_price = productFound.price;
      const calculated_price = productFound.price * quantity;

      return {
        ...currProductItem,
        unit_price,
        calculated_price,
      };
    }

    return false;
  }

  function calculateTotalPrice(currProductItems, valueTip) {
    let sumOfPrices = currProductItems.reduce((acc, curr) => {
      const { calculated_price } = curr;

      return acc + Number(calculated_price);
    }, 0);

    if (!sumOfPrices) {
      return setTotalPrice('0,00');
    }

    let finalPrice = '';
    if (tip !== '' || valueTip) {
      const tipCalculated = valueTip
        ? sumOfPrices * (parseInt(valueTip) / 100)
        : sumOfPrices * (parseInt(tip) / 100);

      finalPrice = sumOfPrices + tipCalculated;
    } else {
      finalPrice = sumOfPrices;
    }

    setTotalPrice(finalPrice);
  }

  function resetFields() {
    setSaleDate('');
    setWaiter('');
    setTip('');
    setCustomer('');
    setTotalPrice('');
    setProductItems([structureProductItem]);
  }

  function handleCreateSale(e) {
    e.preventDefault();

    const newSale = {
      sale_date,
      waiter,
      tip,
      customer,
      total_price,
      productItems,
    };
    saveNewSale(newSale);
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
                  onChange={(e) => {
                    setSaleDate(e.target.value);
                  }}
                  required
                />
                <Input
                  name="waiter"
                  label="Garçom:"
                  value={waiter}
                  onChange={(e) => {
                    setWaiter(e.target.value);
                  }}
                />
                <Select
                  name="tips"
                  label="% de gorjeta:"
                  value={tip}
                  onChange={(e) => {
                    handleSetTip(e.target.value);
                  }}
                  options={[
                    { value: '0', label: '0 %' },
                    { value: '5', label: '5 %' },
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
                          setProductItemsValue(
                            index,
                            'product_name',
                            e.target.value
                          )
                        }
                        options={products}
                        required
                      />
                      <Input
                        name="unit_price"
                        label="Preço Unitário (R$):"
                        disabled
                        value={productItem.unit_price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      />
                      <Input
                        name="quantity"
                        type="number"
                        min="1"
                        label="Quantidade:"
                        value={productItem.quantity}
                        onChange={(e) =>
                          setProductItemsValue(
                            index,
                            'quantity',
                            e.target.value
                          )
                        }
                        required
                      />
                      <Input
                        name="calculated_price"
                        label="Preço calculado (R$):"
                        disabled
                        value={productItem.calculated_price.toLocaleString(
                          'pt-BR',
                          {
                            style: 'currency',
                            currency: 'BRL',
                          }
                        )}
                      />
                    </div>
                  );
                })}
              </div>
              <button type="button" onClick={addNewProductItem}>
                <FiPlus />
                Adicionar produto
              </button>

              <div className="footer-form">
                <Input
                  name="customer"
                  label="Nome do cliente:"
                  value={customer}
                  onChange={(e) => {
                    setCustomer(e.target.value);
                  }}
                />
                <Input
                  name="total_price"
                  label="Total (R$):"
                  disabled
                  value={total_price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                />
              </div>
            </fieldset>

            <div className="actions">
              <div
                className="reset-form"
                onClick={resetFields}
                title="Resetar Campos"
              >
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
