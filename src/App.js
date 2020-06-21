import React from 'react';
import './App.css';

import Homepage from './pages/homepage/hompage.component'
import { Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);

function App() {
  return <div>
    <switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/hats' component={HatsPage}></Route>
    </switch>
  </div>
}

export default App;
