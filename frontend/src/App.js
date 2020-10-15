import React from 'react';
import Navbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList'

import { Provider, provider } from 'react-redux';
import store from './store'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
    <div className="App">
     <Navbar />
     <ShoppingList />
    </div>
    </Provider>
  );
}

export default App;
