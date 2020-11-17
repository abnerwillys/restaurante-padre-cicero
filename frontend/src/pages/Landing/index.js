import React from 'react';
import HeaderLanding from '../../components/HeaderLanding';

import styled from 'styled-components';

import Message from '../../assets/pagina-em-construcao.png';

function Landing() {
  return (
    <div>
      <HeaderLanding />

      <InfoPage>
        <img src={Message} alt="construcao" />
      </InfoPage>
    </div>
  );
}

const InfoPage = styled.div`
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 700px;
    border-radius: 8px;
    opacity: 0.8;
  }
`;

export default Landing;
