import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import ProductContext from './contexts/ProductContext'
import './index.css'
import Details from './pages/Details';



function App() {
   return <div className='oveflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path ="/product/:id" element = {<Details/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>


   </div>
} 
export default App
