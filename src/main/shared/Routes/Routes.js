import React from 'react';
import PropTypes from 'prop-types';
import './Routes.css';
import User from '../../config/user';
import DashBoard from '../../../modules/shared/DashBoard/DashBoard';
import Activity from '../../../modules/ActivityModule/Activity/Activity';
import Booking from '../../../modules/BookingModule/Booking/Booking';
import Event from '../../../modules/eventModule/Event/Event';
import Exercice from '../../../modules/exerciceModule/Exercice/Exercice';
import Expense from '../../../modules/expenseModule/Expense/Expense';
import Groupe from '../../../modules/groupeModule/Groupe/Groupe';
import Login from '../Login/Login';
import Configuration from '../../../modules/shared/Configuration/Configuration';
import TypeSubs from '../../../modules/typesubsModule/ViewTypeSubs/TypeSubs/TypeSubs';
import Staff from '../../../modules/staffModule/Staff/Staff';
import Revenue from '../../../modules/revenueModule/Revenue/Revenue';
import Product from '../../../modules/productModule/Product/Product';
import Presence from '../../../modules/presenceModule/Presence/Presence';
import Payment from '../../../modules/paymentModule/Payment/Payment';
import Member from '../../../modules/memberModule/Member/Member';
import { Route } from 'react-router';
import AddActivity from '../../../modules/ActivityModule/AddActivity/AddActivity';
import AddGroupe from '../../../modules/groupeModule/AddGroupe/AddGroupe';
import AddMember from '../../../modules/memberModule/AddMember/AddMember';
import AddProduct from '../../../modules/productModule/AddProduct/AddProduct';
import AddStaff from '../../../modules/staffModule/AddStaff/AddStaff';
import Profile from '../../../modules/shared/Profile/Profile';
import Editprofile from '../../../modules/shared/Editprofile/Editprofile';

const Routes = () => (
  <div style={{ display: (User.CONNECTED_USER ? 'block' : 'none') }} className="Routes">
    <Route exact path="/" component={DashBoard} />
    <Route exact path="/dashboard" component={DashBoard} />
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
    <Route exact path="/add-activity" component={AddActivity} />
    <Route exact path="/add-groupe" component={AddGroupe} />
    <Route exact path="/add-member" component={AddMember} />
    <Route exact path="/add-product" component={AddProduct} />
    <Route exact path="/add-staff" component={AddStaff} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/edit-profile" component={Editprofile} />
  </div>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
