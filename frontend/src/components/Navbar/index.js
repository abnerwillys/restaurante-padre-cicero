import React from 'react';
import { Link } from 'react-router-dom';

import { FiDollarSign, FiPackage, FiSettings } from 'react-icons/fi';
import Logo from '../../assets/logo_restaurante_padre_cicero.jpg';

import { NavStyle } from './styles';

const Navbar = ({ activeLink }) => {
  return (
    <NavStyle>
      <aside>
        <div className="logo">
          <img src={Logo} alt="Logo restaurante" />

          <div>
            <h1>
              <span>Restaurante</span>
              <br />
              Padre Cicero
            </h1>
          </div>
        </div>

        <div className="links">
          <div className="products">
            <p>
              <FiPackage />
              Produtos
            </p>

            <Link
              className={activeLink === 'product-register' ? 'active' : ''}
              to="/product-register"
            >
              Cadastrar
            </Link>
          </div>

          <div className="sales">
            <p>
              <FiDollarSign />
              Vendas
            </p>

            <Link
              className={activeLink === 'sale-create' ? 'active' : ''}
              to="/sale-create"
            >
              Registrar
            </Link>
            <Link
              className={activeLink === 'sales-history' ? 'active' : ''}
              to="/sales-history"
            >
              Histórico
            </Link>
          </div>

          <div className="settings">
            <p>
              <FiSettings />
              Configurações
            </p>

            <Link
              className={activeLink === 'settings' ? 'active' : ''}
              to="/settings"
            >
              Conta
            </Link>
          </div>
        </div>
      </aside>
    </NavStyle>
  );
};

export default Navbar;
