import React, { useEffect, useState } from 'react';
import './Content.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from './../../shared/Navigation/Navigation';
import Header from './../../shared/Header/Header';
import Footer from './../../shared/Footer/Footer';
import Login from '../Login/Login';

import Routes from '../Routes/Routes';
const Content = () => {

  const [connected, setConnected] = useState(false);
  useEffect(() => {
  }, []);


  const handleClick = num => {
    setConnected(num)
  };

  return (

    <Router>
      {connected === true ?

        <div>
          <Navigation connected={connected} />
          <div className="main-panel">
            <Header connected={connected} handleClick={handleClick} />
            <Routes connected={connected} />
            <Footer connected={connected} />

          </div></div> : <Login handleClick={handleClick} />}
    </Router>

  )


};

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
