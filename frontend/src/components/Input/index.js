import React from 'react';

import { InputBlock } from './styles';

const Input = ({ label, name, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </InputBlock>
  );
};

export default Input;
