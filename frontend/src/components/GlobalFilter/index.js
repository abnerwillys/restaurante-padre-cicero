import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

import { FiRotateCcw } from 'react-icons/fi';
import Input from '../Input';

import { Container } from './styles'


function GlobalFilter({ filter, setFilter }) {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);

  return (
    <Container>
      <Input
        name="filter"
        label="Filtrar:"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />

      <div 
        className="reset-filter" 
        title="Resetar Campos"
        onClick={() => {
          setValue('');
          onChange('');
        }} 
      >
        <FiRotateCcw />
      </div>
    </Container>
  );
}



export default GlobalFilter;
