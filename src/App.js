import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element ={<LoginPage/>}/>
          <Route path='/home' element={<Home/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
