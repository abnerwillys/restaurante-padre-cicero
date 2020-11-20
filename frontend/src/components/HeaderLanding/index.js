import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyle, LogoStyle } from './styles';

import Logo from '../../assets/logo_restaurante_padre_cicero.jpg';

function HeaderLanding() {
  return (
    <HeaderStyle>
      <LogoStyle>
        <Link to="/">
          <img src={Logo} alt="Logo restaurante" />
        </Link>

        <div>
          <h1>
            <span>Restaurante</span>
            <br />
            Padre Cicero
          </h1>
          <em>-mais de 30 anos de tradição-</em>
        </div>
      </LogoStyle>

      <Link to="/app">Entrar</Link>
    </HeaderStyle>
  );
}

export default HeaderLanding;
