import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';

import { BrowserRouter as Router, Route } from "react-router-dom"

import Configuration from '../Configuration/Configuration';
import Dashbord from '../DashBoard/DashBoard';

import Groupe from '../Groupe/Groupe';
import Member from '../Member/Member';
import Payment from '../Payment/Payment';
import Presence from '../Presence/Presence';
import Product from '../Product/Product';
import Revenue from '../Revenue/Revenue';
import Staff from '../Staff/Staff';
import Expense from '../Expense/Expense';
import Exercice from '../Exercice/Exercice';
import Course from '../Course/Course';

import Event from '../Event/Event';
import TypeSubs from '../TypeSubs/TypeSubs';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Activity from './../ActivityModule/Activity/Activity';
import Booking from './../BookingModule/Booking/Booking';

const Content = () => (

    <Router>
          <Navigation/>
      <div className="main-panel">
        
       <Header/>
       <Route exact path="/" component={Dashbord} />
       <Route exact path="/dashboard" component={Dashbord} />
        <Route exact path="/activity" component={Activity} />
        <Route exact path="/booking" component={Booking} />
        
        <Route exact path="/event" component={Event} />
        <Route exact path="/exercice" component={Exercice} />
        <Route exact path="/expense" component={Expense} />
        <Route exact path="/groupe" component={Groupe} />
        <Route exact path="/member" component={Member} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/presence" component={Presence} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/revenue" component={Revenue} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/typesubs" component={TypeSubs} />

        <Route exact path="/configuration" component={Configuration} />
    
      
        <Footer/>
      </div>
        



    </Router>

);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;