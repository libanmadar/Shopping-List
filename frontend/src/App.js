import React from 'react';
import Navbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ShoppingList />
    </div>
  );
}

export default App;
