import React from 'react';

import HeaderSystem from '../../components/HeaderSystem';
import InfoPage from '../../components/InfoPage';
import Navbar from '../../components/Navbar';

function Settings() {
  return (
    <div id="basic-structure">
      <Navbar activeLink="settings" />

      <main>
        <HeaderSystem title="Configurações" />

        <InfoPage />
      </main>
    </div>
  );
}

export default Settings;
