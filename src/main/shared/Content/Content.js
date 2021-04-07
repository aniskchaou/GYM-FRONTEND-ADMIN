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
import Login from '../Login/Login';
import User from '../../config/user';
import Routes from '../Routes/Routes';
class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = { connected: User.CONNECTED_USER };
  }
  rerender = () => {
    this.forceUpdate();
  };
  forceUpdate = () => {
    this.setState((state) => ({
      connected: User.CONNECTED_USER
    }));
  };

  render() {
    return (

      <Router>
        <Navigation />
        <div className="main-panel">
          <Header rerender={this.rerender} />
          <Routes />
          <Footer />
          <Login rerender={this.rerender} />
        </div>
      </Router>

    )
  }

};

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
