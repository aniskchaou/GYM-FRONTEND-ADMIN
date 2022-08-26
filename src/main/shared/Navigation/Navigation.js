import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { NavLink, useHistory } from "react-router-dom"
import './Navigation.css'
import User from '../../config/user';
import settingsHTTPService from '../../services/settingsHTTPService'
import useForceUpdate from 'use-force-update';


const Navigation = (props) => {

  const [showLogo, setShowLogo] = useState(1)
  const history = useHistory()
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    // Runs ONCE after initial rendering
    getSystemSettings()
  }, []);
  const getSystemSettings = () => {

    settingsHTTPService.getSystemSettings().then(data => {
      setShowLogo(data.data[0].showLogo)
      //forceUpdate()
      console.log(data.data[0])
    })

  }


  return (
    <div style={{ display: (User.CONNECTED_USER ? 'block' : 'none') }} className="sidebar" data-color="white" data-active-color="danger">
      {showLogo == 1 ? <div className="logo">

        <NavLink to="/" className="simple-text logo-normal">

          <div className="logo-image-big">
            <img src="assets/img/logo.png" />
          </div>
        </NavLink>
      </div> : <div>hello</div>}
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li>
            <NavLink activeClassName="activeLink" to="/dashboard">
              <i className="nc-icon nc-bank"></i>
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/typesubs">
              <i className="nc-icon nc-bullet-list-67"></i>
              <p>Subscriptions</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/groupe">
              <i className="nc-icon nc-badge"></i>
              <p>Groups</p>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="activeLink" to="/staff">
              <i className="nc-icon nc-single-02"></i>
              <p>Staffs</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/activity">
              <i className="nc-icon nc-tile-56"></i>
              <p>Activities</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/member">
              <i className="nc-icon nc-single-02"></i>
              <p>Members</p>
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="activeLink" to="/product">
              <i className="nc-icon nc-box-2"></i>
              <p>Products</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/event">
              <i className="nc-icon nc-bulb-63"></i>
              <p>Events</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/presence">
              <i className="nc-icon nc-paper"></i>
              <p>Attendences</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/payment">
              <i className="nc-icon nc-basket"></i>
              <p>Payments</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/revenue">
              <i className="nc-icon nc-refresh-69"></i>
              <p>Incomes</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/expense">
              <i className="nc-icon nc-money-coins"></i>
              <p>Expenses</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/frontoffice">
              <i className="nc-icon nc-settings-gear-65"></i>
              <p>Front Office</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/configuration">
              <i className="nc-icon nc-settings-gear-65"></i>
              <p>Settings</p>
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
