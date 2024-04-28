import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Regsiter } from './pages/login/Register';

import { Account } from './pages/account/account';
import { Create } from './components/create/create';






const App = () => {
  return (
    
      <Routes>
   
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Regsiter/>} />
    
    <Route path="/account" element={<Account/>} />
    <Route path="/create" element={<Create/>} /> 
    
  </Routes>

  )
}

export default App;
 
  
