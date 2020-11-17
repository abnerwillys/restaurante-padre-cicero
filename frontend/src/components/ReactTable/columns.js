import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Data',
    accessor: 'sale_date',
    Cell: ({value}) => { return format(new Date(value), 'dd/MM/yyyy')},
  },
  {
    Header: 'Cliente',
    accessor: 'customer',
    Cell: ({value}) => { return value === '' ? '-' : value.charAt(0).toUpperCase() + value.slice(1); },
  },
  {
    Header: 'Garçom',
    accessor: 'waiter',
    Cell: ({value}) => { return value === '' ? '-' : value.charAt(0).toUpperCase() + value.slice(1); },
  },
  {
    Header: 'Gorjeta %',
    accessor: 'tip',
    Cell: ({value}) => { return value === '' ? '-' : `${value} %` }
  },
  {
    Header: 'Total R$',
    accessor: 'total_price',
    Cell: ({value}) => { return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', })}
  },
];
