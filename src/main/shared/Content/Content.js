import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';

import { BrowserRouter as Router, Route } from "react-router-dom"

import Configuration from '../../../modules/shared/Configuration/Configuration';
import Dashbord from '../../../modules/shared/DashBoard/DashBoard';

import Groupe from '../../../modules/groupeModule/Groupe/Groupe';
import Member from '../../../modules/memberModule/Member/Member';
import Payment from '../../../modules/paymentModule/Payment/Payment';
import Presence from '../../../modules/presenceModule/Presence/Presence';
import Product from '../../../modules/productModule/Product/Product';
import Revenue from '../../../modules/revenueModule/Revenue/Revenue';
import Staff from '../../../modules/staffModule/Staff/Staff';
import Expense from '../../../modules/expenseModule/Expense/Expense';
import Exercice from '../../../modules/exerciceModule/Exercice/Exercice';
import Course from '../../../modules/courseModule/Course/Course';

import Event from '../../../modules/eventModule/Event/Event';
import TypeSubs from '../../../modules/typesubsModule/ViewTypeSubs/TypeSubs/TypeSubs';


import Activity from './../../../modules/ActivityModule/Activity/Activity';
import Booking from './../../../modules/BookingModule/Booking/Booking';
import Navigation from './../../shared/Navigation/Navigation';
import Header from './../../shared/Header/Header';
import Footer from './../../shared/Footer/Footer';
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
