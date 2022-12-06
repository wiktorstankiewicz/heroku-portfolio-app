import React, { Component } from 'react';
import styles from './App.module.css';
import HomePage from './pages/home_page/HomePage';
import SiteUnderConstruction from './pages/site_under_construction/SiteUnderConstruction';

App.propTypes = {
  
};

function App(props) {
  return ( 
    <SiteUnderConstruction/>
  );
}

export default 
App;