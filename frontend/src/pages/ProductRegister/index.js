import React, { useState } from 'react';

import Button from '../../components/Button';
import HeaderSystem from '../../components/HeaderSystem';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';

import { Wrapper } from './styles';

function ProductRegister() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  function handleCreateProduct(e) {
    e.preventDefault();

    const isFieldsFilled = name !== '' && price !== '' && photoUrl !== '';

    if (!isFieldsFilled) {
      alert('Por favor preencha todos os campos!');
      return;
    }

    console.log({
      name,
      price,
      photoUrl,
    });
  }

  return (
    <div id="basic-structure">
      <Navbar activeLink="product-register" />

      <main>
        <HeaderSystem title="cadastrar produto" />

        <Wrapper>
          <form onSubmit={handleCreateProduct}>
            <fieldset>
              <Input
                name="name"
                label="Nome do produto:"
                value={name}
                onChange={(e) => {setName(e.target.value);}}
              />
              <Input
                name="price"
                label="Preço (R$):"
                type="number"
                value={price}
                onChange={(e) => {setPrice(e.target.value);}}
              />
              <Input
                name="photo"
                label="Foto do produto (URL):"
                type="url"
                value={photoUrl}
                onChange={(e) => {setPhotoUrl(e.target.value);}}
              />
            </fieldset>

            <Button>Salvar</Button>
          </form>
        </Wrapper>
      </main>
    </div>
  );
}

export default ProductRegister;
