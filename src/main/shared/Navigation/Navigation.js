import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from "react-router-dom"
import './Navigation.css'
import settingsHTTPService from '../../services/settingsHTTPService'



const Navigation = ({ connected }) => {

  const [showLogo, setShowLogo] = useState(1)
  const history = useHistory()



  useEffect(() => {
    getSystemSettings()
  }, []);


  const getSystemSettings = () => {
    settingsHTTPService.getSystemSettings().then(data => {
      setShowLogo(data?.data[0]?.showLogo)
    })

  }


  return (
<div style={{ display: (connected ? 'block' : 'none') }} className="sidebar" data-color="white" data-active-color="danger">
  {showLogo == 1 ? (
    <div className="logo">
      <NavLink to="/" className="simple-text logo-normal">
        <div className="logo-image-big">
          <img src="assets/img/logo.png" />
        </div>
      </NavLink>
    </div>
  ) : (
    <div>hello</div>
  )}
  <div className="sidebar-wrapper">
  <ul className="nav">
      {/* Dashboard */}
      <li>
        <NavLink activeClassName="activeLink" to="/dashboard">
          <i className="nc-icon nc-layout-11"></i>
          <p>Dashboard</p>
        </NavLink>
      </li>
      <hr />

      {/* Membership */}
      <li>
        <a data-toggle="collapse" href="#membershipMenu">
          <i className="nc-icon nc-circle-10"></i>
          <p>Membership <b className="caret"></b></p>
        </a>
        <div className="collapse" id="membershipMenu">
          <ul className="nav">
            <li>
              <NavLink activeClassName="activeLink" to="/subscription">
                <i className="nc-icon nc-bookmark-2"></i> <p>Subscriptions</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/typesubs">
                <i className="nc-icon nc-bullet-list-67"></i> <p>Subscription Types</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/member">
                <i className="nc-icon nc-single-02"></i> <p>Members</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <hr />

      {/* Bookings & Classes */}
      <li>
        <a data-toggle="collapse" href="#bookingClassesMenu">
          <i className="nc-icon nc-book-bookmark"></i>
          <p>Bookings & Classes <b className="caret"></b></p>
        </a>
        <div className="collapse" id="bookingClassesMenu">
          <ul className="nav">
            <li>
              <NavLink activeClassName="activeLink" to="/booking">
                <i className="nc-icon nc-calendar-60"></i> <p>Booking</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/program">
                <i className="nc-icon nc-hat-3"></i> <p>Programs</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/session">
                <i className="nc-icon nc-watch-time"></i> <p>Sessions</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/level">
                <i className="nc-icon nc-layers-3"></i> <p>Levels</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/classes">
                <i className="nc-icon nc-ruler-pencil"></i> <p>Classes</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <hr />

      {/* Resources */}
      <li>
        <a data-toggle="collapse" href="#resourcesMenu">
          <i className="nc-icon nc-briefcase-24"></i>
          <p>Resources <b className="caret"></b></p>
        </a>
        <div className="collapse" id="resourcesMenu">
          <ul className="nav">
            <li>
              <NavLink activeClassName="activeLink" to="/inventory">
                <i className="nc-icon nc-box"></i> <p>Inventory</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/product">
                <i className="nc-icon nc-tag-content"></i> <p>Products</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <hr />

      {/* Marketing & Events */}
      <li>
        <a data-toggle="collapse" href="#marketingEventsMenu">
          <i className="nc-icon nc-paper"></i>
          <p>Marketing & Events <b className="caret"></b></p>
        </a>
        <div className="collapse" id="marketingEventsMenu">
          <ul className="nav">
            <li>
              <NavLink activeClassName="activeLink" to="/marketing">
                <i className="nc-icon nc-bell-55"></i> <p>Marketing</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/event">
                <i className="nc-icon nc-planet"></i> <p>Events</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <hr />

      {/* Nutrition Plan */}
      <li>
        <NavLink activeClassName="activeLink" to="/nutrition-plan">
          <i className="nc-icon nc-bullet-list-67"></i> <p>Nutrition Plan</p>
        </NavLink>
      </li>
      <hr />

      {/* Financials */}
      <li>
        <a data-toggle="collapse" href="#financialsMenu">
          <i className="nc-icon nc-bank"></i>
          <p>Financials <b className="caret"></b></p>
        </a>
        <div className="collapse" id="financialsMenu">
          <ul className="nav">
            <li>
              <NavLink activeClassName="activeLink" to="/payment">
                <i className="nc-icon nc-credit-card"></i> <p>Payments</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/revenue">
                <i className="nc-icon nc-chart-bar-32"></i> <p>Incomes</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/expense">
                <i className="nc-icon nc-money-coins"></i> <p>Expenses</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <hr />

      {/* Attendance */}
      <li>
        <NavLink activeClassName="activeLink" to="/presence">
          <i className="nc-icon nc-check-2"></i> <p>Attendances</p>
        </NavLink>
      </li>
      <hr />

      {/* Administration */}
      <li>
        <a data-toggle="collapse" href="#administrationMenu">
          <i className="nc-icon nc-single-02"></i>
          <p>Administration <b className="caret"></b></p>
        </a>
        <div className="collapse" id="administrationMenu">
          <ul className="nav">
            <li>
              <NavLink activeClassName="activeLink" to="/staff">
                <i className="nc-icon nc-single-02"></i> <p>Staffs</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/groupe">
                <i className="nc-icon nc-badge"></i> <p>Groups</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/activity">
                <i className="nc-icon nc-tile-56"></i> <p>Activities</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" to="/frontoffice">
                <i className="nc-icon nc-tv-2"></i> <p>Front Office</p>
              </NavLink>
            </li>

          </ul>
        </div>
           {/* AI & Analytics */}
      <li>
        <NavLink activeClassName="activeLink" to="/ai-insights">
          <i className="nc-icon nc-lightbulb-63"></i>
          <p>AI Member Insights</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/reports">
          <i className="nc-icon nc-chart-pie-36"></i>
          <p>Advanced Analytics</p>
        </NavLink>
      </li>
      <hr />

      {/* CRM & Membership Growth */}
      <li>
        <NavLink activeClassName="activeLink" to="/crm">
          <i className="nc-icon nc-badge"></i>
          <p>CRM & Leads</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/loyalty">
          <i className="nc-icon nc-star"></i>
          <p>Loyalty & Rewards</p>
        </NavLink>
      </li>
      <hr />

      {/* Smart Workout & Nutrition */}
      <li>
        <NavLink activeClassName="activeLink" to="/ai-workout">
          <i className="nc-icon nc-dumbbell"></i>
          <p>AI Workout Plans</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/nutrition-ai">
          <i className="nc-icon nc-apple"></i>
          <p>AI Diet Plans</p>
        </NavLink>
      </li>
      <hr />

      {/* E-Commerce & Online Store */}
      <li>
        <NavLink activeClassName="activeLink" to="/store">
          <i className="nc-icon nc-cart-simple"></i>
          <p>Online Store</p>
        </NavLink>
      </li>
      <hr />

      {/* Video Training & Content */}
      <li>
        <NavLink activeClassName="activeLink" to="/video-training">
          <i className="nc-icon nc-play-circle"></i>
          <p>On-Demand Training</p>
        </NavLink>
      </li>
      <hr />

      {/* Financials & Forecasting */}
      <li>
        <NavLink activeClassName="activeLink" to="/billing">
          <i className="nc-icon nc-credit-card"></i>
          <p>Automated Billing</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/revenue-predict">
          <i className="nc-icon nc-chart-bar-32"></i>
          <p>Revenue Forecast</p>
        </NavLink>
      </li>
      <hr />

      {/* Smart Notifications */}
      <li>
        <NavLink activeClassName="activeLink" to="/notifications">
          <i className="nc-icon nc-bell-55"></i>
          <p>Push Notifications</p>
        </NavLink>
      </li>
      <hr />

      {/* Multi-Branch Support */}
      <li>
        <NavLink activeClassName="activeLink" to="/multi-gym">
          <i className="nc-icon nc-world-2"></i>
          <p>Multi-Branch Support</p>
        </NavLink>
      </li>
      </li>
      <hr />

      {/* Settings */}
      <li>
        <NavLink activeClassName="activeLink" to="/configuration">
          <i className="nc-icon nc-settings-gear-65"></i> <p>Settings</p>
        </NavLink>
      </li>

        {/* AI & Analytics */}
        <li>
        <NavLink activeClassName="activeLink" to="/ai-insights">
          <i className="nc-icon nc-lightbulb-63"></i>
          <p>AI Smart Coaching</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/predictive-analytics">
          <i className="nc-icon nc-chart-bar-32"></i>
          <p>Predictive Analytics</p>
        </NavLink>
      </li>
      <hr />

      {/* Fitness & Wearables */}
      <li>
        <NavLink activeClassName="activeLink" to="/wearable-sync">
          <i className="nc-icon nc-watch-time"></i>
          <p>Wearable Integration</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/progress-tracking">
          <i className="nc-icon nc-camera-compact"></i>
          <p>Progress & Body Scan</p>
        </NavLink>
      </li>
      <hr />

      {/* Video & Virtual Training */}
      <li>
        <NavLink activeClassName="activeLink" to="/live-classes">
          <i className="nc-icon nc-tv-2"></i>
          <p>Live Virtual Classes</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/video-library">
          <i className="nc-icon nc-play-circle"></i>
          <p>On-Demand Workouts</p>
        </NavLink>
      </li>
      <hr />

      {/* Business Growth */}
      <li>
        <NavLink activeClassName="activeLink" to="/crm">
          <i className="nc-icon nc-badge"></i>
          <p>CRM & Lead Management</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/loyalty">
          <i className="nc-icon nc-star"></i>
          <p>Loyalty & Rewards</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/marketing">
          <i className="nc-icon nc-paper"></i>
          <p>Marketing & Promotions</p>
        </NavLink>
      </li>
      <hr />

      {/* E-Commerce & Store */}
      <li>
        <NavLink activeClassName="activeLink" to="/store">
          <i className="nc-icon nc-cart-simple"></i>
          <p>Online Store</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/gift-cards">
          <i className="nc-icon nc-credit-card"></i>
          <p>Gift Cards</p>
        </NavLink>
      </li>
      <hr />

      {/* Financials & Payments */}
      <li>
        <NavLink activeClassName="activeLink" to="/billing">
          <i className="nc-icon nc-credit-card"></i>
          <p>Automated Billing</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/revenue-predict">
          <i className="nc-icon nc-chart-line-32"></i>
          <p>Revenue Forecasting</p>
        </NavLink>
      </li>
      <hr />

      {/* Smart Gym Management */}
      <li>
        <NavLink activeClassName="activeLink" to="/attendance-qr">
          <i className="nc-icon nc-check-2"></i>
          <p>QR & RFID Attendance</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/locker-system">
          <i className="nc-icon nc-lock-circle-open"></i>
          <p>Smart Lockers</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/equipment-booking">
          <i className="nc-icon nc-settings"></i>
          <p>Equipment Booking</p>
        </NavLink>
      </li>
      <hr />

      {/* Multi-Branch & Franchise Support */}
      <li>
        <NavLink activeClassName="activeLink" to="/multi-gym">
          <i className="nc-icon nc-world-2"></i>
          <p>Multi-Branch Management</p>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeLink" to="/global-membership">
          <i className="nc-icon nc-map-big"></i>
          <p>Global Membership Access</p>
        </NavLink>
      </li>
      
    </ul>
  </div>
</div>

  
  )
}




Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
