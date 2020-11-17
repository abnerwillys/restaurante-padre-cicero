import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import HeaderSystem from '../../components/HeaderSystem';
import Navbar from '../../components/Navbar';

import { Wrapper } from './styles';
import Spinner from '../../components/Spinner';

function ProductsList() {
  const products = useStoreState((state) => state.product.products);
  const getAllProducts = useStoreActions(
    (actions) => actions.product.getAllProducts
  );

  useEffect(() => {
    setTimeout(() => {
      if (products.length === 0) {
        getAllProducts();
      }
    }, 500);
  }, [products]);

  return (
    <div id="basic-structure">
      <Navbar activeLink="products-list" />

      <main>
        <HeaderSystem title="Lista de Produtos" />

        <Wrapper>
          <div className="container-cards">
            {products.length === 0 ? (
              <Spinner />
            ) : (
              products.map((product) => {
                return (
                  <div key={product._id} className="card">
                    <img src={product.photo_url} alt={product.name} />
                    <p>
                      {product.name}
                      <br />
                      {product.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </Wrapper>
      </main>
    </div>
  );
}

export default ProductsList;
