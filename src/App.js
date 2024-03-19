import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'

import './index.scss'

import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';


function App() {

  return(
    
  <>
    <div className={'page'}>
        <div className={'content'}>
          <Nav/>
            <Routes> 
                    <Route path ='/' element={<Navigate to = 'home' />}/>
                    <Route path ='home' element={<Home/>}/>
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="cart" element={<Cart/>} />
            </Routes>
        </div>
      <Footer/>
    </div>
    
    
  </>

  );
}

export default App;
