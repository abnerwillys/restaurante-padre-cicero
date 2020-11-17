import React from 'react';

import HeaderSystem from '../../components/HeaderSystem';
import Navbar from '../../components/Navbar';

function SystemHome() {
  return (
    <div id="basic-structure">
      <Navbar />

      <main>
        <HeaderSystem />
      </main>
    </div>
  );
}

export default SystemHome;
