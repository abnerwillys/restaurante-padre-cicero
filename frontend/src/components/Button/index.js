import React from 'react';

import styled from 'styled-components';

const Button = ({ children }) => {
  return <ButtonStyle type="submit">{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  align-self: flex-end;
  min-width: 175px;
  height: 40px;

  border-radius: 8px;
  border: none;
  background-color: var(--bg-nav);
  outline: none;

  cursor: pointer;
  transition: 0.2s all;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  color: #fff;

  &:hover {
    transform: scale(1.05, 1.05);
    background-color: var(--primary);
  }
`;

export default Button;
