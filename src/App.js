import React, { Component } from 'react';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import './App.css';


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
