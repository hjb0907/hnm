import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Main from './pages/Main';
import Private from './pages/Private';
import Login from './pages/Login';
import Footer from './component/Footer';

function App() {
  const [authes, setAuthes] = useState(false);

  return (
    <div className="App">
      <Header authes={authes}/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/login' element={<Login setAuthes={setAuthes}/>}></Route>
        <Route path='/products/:id' element={<Private authes={authes} setAuthes={setAuthes} />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
