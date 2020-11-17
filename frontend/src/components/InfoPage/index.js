import React from 'react';

import styled from 'styled-components';
import Message from '../../assets/pagina-em-construcao.png';

function InfoPage() {
  return (
    <InfoPageStyle>
      <img src={Message} alt="construcao"/>
    </InfoPageStyle>
  );
}

const InfoPageStyle = styled.div`
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

export default InfoPage;
