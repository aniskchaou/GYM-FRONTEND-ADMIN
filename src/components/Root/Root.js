import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Content from '../Content/Content';

import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from '../Footer/Footer';
import Path from '../Path/Path';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper ">
        <Navigation/>
      <div className="main-panel">
        
       <Header/>
    
        <Content/>
        
        <Footer/>
      </div>
    </div>
    );
  }
}



Root.propTypes = {};

Root.defaultProps = {};

export default Root;
