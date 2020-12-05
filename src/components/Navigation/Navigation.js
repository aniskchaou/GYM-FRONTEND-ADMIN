import React from 'react';
import Header from '../Header/Header';
import { Link} from "react-router-dom"

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(

      
      <div className="sidebar" data-color="white" data-active-color="danger">
      <div className="logo">
       
        <Link to="https://www.creative-tim.com" className="simple-text logo-normal">
          
           <div className="logo-image-big">
            <img src="assets/img/logo.png"/>
          </div> 
        </Link>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="active ">
            <Link to="/dashboard">
              <i className="nc-icon nc-bank"></i>
              <p>Tableau de bord</p>
            </Link>
          </li>
          <li>
            <Link to="/typesubs">
              <i className="nc-icon nc-diamond"></i>
              <p>Type d'adhésion</p>
            </Link>
          </li>
          <li>
            <Link to="/groupe">
              <i className="nc-icon nc-pin-3"></i>
              <p>Groupe</p>
            </Link>
          </li>
          <li>
            <Link to="/course">
              <i className="nc-icon nc-bell-55"></i>
              <p>Cours</p>
            </Link>
          </li>
          <li>
            <Link to="/staff">
              <i className="nc-icon nc-single-02"></i>
              <p>Staff</p>
            </Link>
          </li>
          <li>
            <Link to="/activity">
              <i className="nc-icon nc-tile-56"></i>
              <p>Activité</p>
            </Link>
          </li>
          <li>
            <Link to="/member">
              <i className="nc-icon nc-caps-small"></i>
              <p>Membres</p>
            </Link>
          </li>
          <li>
            <Link to="/exercice">
              <i className="nc-icon nc-caps-small"></i>
              <p>Exercices</p>
            </Link>
          </li>
          <li>
            <Link to="/product">
              <i className="nc-icon nc-caps-small"></i>
              <p>Produit</p>
            </Link>
          </li>
          <li>
            <Link to="/event">
              <i className="nc-icon nc-caps-small"></i>
              <p>Evenements</p>
            </Link>
          </li>
           <li>
            <Link to="/presence">
              <i className="nc-icon nc-caps-small"></i>
              <p>Présences</p>
            </Link>
          </li>
           <li>
            <Link to="/payment">
              <i className="nc-icon nc-caps-small"></i>
              <p>Paiements</p>
            </Link>
          </li>
           <li>
            <Link to="/revenue">
              <i className="nc-icon nc-caps-small"></i>
              <p>Revenus</p>
            </Link>
          </li>
           <li>
            <Link to="/expense">
              <i className="nc-icon nc-caps-small"></i>
              <p>Dépenses</p>
            </Link>
          </li>
          <li>
            <Link to="/configuration">
              <i className="nc-icon nc-caps-small"></i>
              <p>Paramètres</p>
            </Link>
          </li>

        </ul>
      </div>
    </div>);

  }
}



Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
