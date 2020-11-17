import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import ProductRegister from './pages/ProductRegister';
import ProductsList from './pages/ProductsList';
import SaleCreate from './pages/SaleCreate';
import SalesHistory from './pages/SalesHistory';
import Settings from './pages/Settings';
import SystemHome from './pages/SystemHome';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={SystemHome} />
        <Route path="/settings" component={Settings} />

        <Route path="/product-register" component={ProductRegister} />
        <Route path="/products-list" component={ProductsList} />
        <Route path="/sale-create" component={SaleCreate} />
        <Route path="/sales-history" component={SalesHistory} />
      </Switch>
    </Router>
  );
}

export default Routes;
