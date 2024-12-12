import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div>
      <div >
        <Navigation />
      </div>
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
