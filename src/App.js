import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Profile from './components/Profile';
import Footer from './components/Footer';


const App = () => {
    return (
      <div className="app-wrapper">
        <Header />
        <Aside />
        <Profile />
        <Footer />
      </div>
   
    );

}

export default App;
