import React from 'react';

import { SelectBlock } from './styles';

const Select = ({ label, name, options, ...rest }) => {
  return (
    <SelectBlock>
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {
          options.map(option => {
            return <option key={option.value} value={option.value}>{option.label}</option>
          })
        }
      </select>
    </SelectBlock>
  )
}

export default Select;