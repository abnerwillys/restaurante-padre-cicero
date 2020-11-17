import React from 'react';
import { FiChevronRight, FiLogOut, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { HeaderSystemStyle } from './styles';

const HeaderSystem = ({ title }) => {
  return (
    <HeaderSystemStyle>
      {title ? (
        <h3>
          <FiChevronRight />
          {title}
        </h3>
      ) : (
      <h3>{''}</h3>
      )}

      <div className="account-info">
        <div className="icon">
          <FiUser size={26} color="#FFF" />
        </div>

        <div>
          <p>usuario@usuario.com</p>
          <Link to="/"><FiLogOut size={20} /></Link>
        </div>
      </div>
    </HeaderSystemStyle>
  );
};

export default HeaderSystem;
