import React from 'react';

import HeaderSystem from '../../components/HeaderSystem';
import Navbar from '../../components/Navbar';
import ReactTable from '../../components/ReactTable';

function SalesHistory() {
  return (
    <div id="basic-structure">
      <Navbar activeLink="sales-history" />

      <main>
        <HeaderSystem title="Histório de Venda" />

        <ReactTable />
      </main>
    </div>
  );
}

export default SalesHistory;
