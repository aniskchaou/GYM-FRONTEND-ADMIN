import React from 'react';
import Header from '../Header/Header';
import { NavLink} from "react-router-dom"
import './Navigation.css'
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(

      
      <div className="sidebar" data-color="white" data-active-color="danger">
      <div className="logo">
       
        <NavLink to="https://www.creative-tim.com" className="simple-text logo-normal">
          
           <div className="logo-image-big">
            <img src="assets/img/logo.png"/>
          </div> 
        </NavLink>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li>
            <NavLink activeClassName="activeLink" to="/dashboard">
              <i className="nc-icon nc-bank"></i>
              <p>Tableau de bord</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink"  to="/typesubs">
              <i className="nc-icon nc-bullet-list-67"></i>
              <p>Type d'adhésion</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/groupe">
              <i className="nc-icon nc-badge"></i>
              <p>Groupe</p>
            </NavLink>
          </li>
        
          <li>
            <NavLink activeClassName="activeLink" to="/staff">
              <i className="nc-icon nc-single-02"></i>
              <p>Staff</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/activity">
              <i className="nc-icon nc-tile-56"></i>
              <p>Activité</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/member">
              <i className="nc-icon nc-single-02"></i>
              <p>Membres</p>
            </NavLink>
          </li>
        
          <li>
            <NavLink activeClassName="activeLink" to="/product">
              <i className="nc-icon nc-box-2"></i>
              <p>Produit</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/event">
              <i className="nc-icon nc-bulb-63"></i>
              <p>Evenements</p>
            </NavLink>
          </li>
           <li>
            <NavLink activeClassName="activeLink" to="/presence">
              <i className="nc-icon nc-paper"></i>
              <p>Présences</p>
            </NavLink>
          </li>
           <li>
            <NavLink activeClassName="activeLink" to="/payment">
              <i className="nc-icon nc-basket"></i>
              <p>Paiements</p>
            </NavLink>
          </li>
           <li>
            <NavLink activeClassName="activeLink" to="/revenue">
              <i className="nc-icon nc-refresh-69"></i>
              <p>Revenus</p>
            </NavLink>
          </li>
           <li>
            <NavLink activeClassName="activeLink" to="/expense">
              <i className="nc-icon nc-money-coins"></i>
              <p>Dépenses</p>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/configuration">
              <i className="nc-icon nc-settings-gear-65"></i>
              <p>Paramètres</p>
            </NavLink>
          </li>

        </ul>
      </div>
    </div>);

  }
}



Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
