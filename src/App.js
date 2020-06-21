import React from 'react';
import './App.css';

import Homepage from './pages/homepage/hompage.component'
import ShopPage from './pages/shop/shop.component';

import { Route } from 'react-router-dom';

function App() {
  return <div>
    <switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
    </switch>
  </div>
}

export default App;
