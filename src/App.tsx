import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
   <>
    {isLogin ? 
    <Header/>
  :
    <Login/>}
   </>
  );
}

export default App;
