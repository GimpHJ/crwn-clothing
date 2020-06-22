import React from 'react';
import './App.css';

import Homepage from './pages/homepage/hompage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { Route } from 'react-router-dom';

function App() {
  return <div>
    <Header></Header>
    <switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
      <Route path='/signin' component={SignInAndSignUpPage}></Route>
    </switch>
  </div>
}

export default App;
