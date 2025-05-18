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
import TypeSubs from '../../../modules/typesubsModule/TypeSubs/TypeSubs';
import FrontOffice from '../../../modules/frontOfficeModule/FrontOffice/FrontOffice'
import AddTypeSubs from '../../../modules/typesubsModule/AddTypeSubs/AddTypeSubs';
import SearchResult from '../../../modules/shared/SearchResult/SearchResult';
import Subscription from '../../../modules/subscriptionModule/subscription/Subscription';
import Inventory from '../../../modules/inventoryModule/inventory/Inventory';
import Marketing from '../../../modules/marketingModule/marketing/Marketing';
import NutritionPlan from '../../../modules/nutritionModule/nutrition/NutritionPlan';
import Program from '../../../modules/programModule/program/Program';
import Classes from '../../../modules/ClassesModule/classes/Classes';
import Level from '../../../modules/LevelModule/level/Level';
import Session from '../../../modules/sessionModule/session/Session';

const Routes = ({ connected }) => (
  <div style={{ display: (connected ? 'block' : 'none') }} className="Routes">
     
      <div className="flex">
        
        <div className="flex-grow p-4">
          
            {/* Dashboard */}
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/typesubs" component={TypeSubs} />

            {/* Members */}
            <Route exact path="/member" component={Member} />
            <Route exact path="/add-member" component={Configuration} />
            <Route exact path="/subscription" component={Subscription} />

            {/* Staff & Payroll */}
            <Route exact path="/staff" component={Configuration} />
            <Route exact path="/add-staff" component={Configuration} />
            <Route exact path="/payroll" component={Configuration} />

            {/* Training & Classes */}
            <Route exact path="/classes" component={Configuration} />
            <Route exact path="/program" component={Configuration} />
            <Route exact path="/nutrition-plan" component={Configuration} />
            <Route exact path="/ai-workout-planner" component={Configuration} />

            {/* Finance & Payments */}
            <Route exact path="/payment" component={Configuration} />
            <Route exact path="/revenue" component={Configuration} />
            <Route exact path="/expense" component={Configuration} />

            {/* E-Commerce Store */}
            <Route exact path="/store" component={Configuration} />
            <Route exact path="/inventory" component={Configuration} />

            {/* Marketing & Gamification */}
            <Route exact path="/marketing" component={Configuration} />
            <Route exact path="/gamification" component={Configuration} />

            {/* Business Intelligence */}
            <Route exact path="/business-reports" component={Configuration} />

            {/* Advanced Features */}
            <Route exact path="/qr-checkin" component={Configuration} />
            <Route exact path="/notifications" component={Configuration} />
            <Route exact path="/leaderboard" component={Configuration} />
            <Route exact path="/health-tracker" component={Configuration} />

            {/* Settings */}
            <Route exact path="/configuration" component={Configuration} />

            {/* User Profile */}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/edit-profile" component={Configuration} />
            <Route exact path="/login" component={Login} />
         
        </div>
      </div>
    
  </div>
);

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
