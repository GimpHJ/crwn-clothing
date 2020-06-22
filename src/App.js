import React from 'react';
import './App.css';

import Homepage from './pages/homepage/hompage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { Route } from 'react-router-dom';

import {auth} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser:null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return  ( <div>
              <Header currentUser={this.state.currentUser}></Header>
              <switch>
                <Route exact path='/' component={Homepage}></Route>
                <Route path='/shop' component={ShopPage}></Route>
                <Route path='/signin' component={SignInAndSignUpPage}></Route>
              </switch>
            </div>
    )
  }
  
}

export default App;
