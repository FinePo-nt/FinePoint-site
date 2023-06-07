import * as React from 'react';
import './core/content/styles/main.scss'
import './App.css';
import Home from './core/components/Home/Home';
import Navbar from './core/components/Navbar/Navbar';
import Contact from './core/components/Contact/Contact';
import Portfolio from './core/components/Portfolio/Portfolio';
import FAQ from './core/components/FAQ/FAQ';
import Footer from './core/components/Footer/Footer'
import {  Route, Routes } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <div className='homepage-container'>
        <Navbar/>
        <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/#portfolio'/>  {/* Placeholder element for now */}
                <Route path='/faq' element={<FAQ/>}/>              {/* Placeholder element for now */}
                <Route path='/contact' element={<Contact/>}/>      {/* Placeholder element for now */}
        </Routes>
        <Portfolio/>
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
