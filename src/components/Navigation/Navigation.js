import React from 'react';
import Header from '../Header/Header';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(

      
      <div className="sidebar" data-color="white" data-active-color="danger">
      <div className="logo">
       
        <a href="https://www.creative-tim.com" className="simple-text logo-normal">
          
           <div className="logo-image-big">
            <img src="assets/img/logo.png"/>
          </div> 
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="active ">
            <a href="/dashboard">
              <i className="nc-icon nc-bank"></i>
              <p>Tableau de bord</p>
            </a>
          </li>
          <li>
            <a href="/typesubs">
              <i className="nc-icon nc-diamond"></i>
              <p>Type d'adhésion</p>
            </a>
          </li>
          <li>
            <a href="/groupe">
              <i className="nc-icon nc-pin-3"></i>
              <p>Groupe</p>
            </a>
          </li>
          <li>
            <a href="/course">
              <i className="nc-icon nc-bell-55"></i>
              <p>Cours</p>
            </a>
          </li>
          <li>
            <a href="/staff">
              <i className="nc-icon nc-single-02"></i>
              <p>Staff</p>
            </a>
          </li>
          <li>
            <a href="/activity">
              <i className="nc-icon nc-tile-56"></i>
              <p>Activité</p>
            </a>
          </li>
          <li>
            <a href="/member">
              <i className="nc-icon nc-caps-small"></i>
              <p>Membres</p>
            </a>
          </li>
          <li>
            <a href="/exercice">
              <i className="nc-icon nc-caps-small"></i>
              <p>Exercices</p>
            </a>
          </li>
          <li>
            <a href="/product">
              <i className="nc-icon nc-caps-small"></i>
              <p>Produit</p>
            </a>
          </li>
          <li>
            <a href="/event">
              <i className="nc-icon nc-caps-small"></i>
              <p>Evenements</p>
            </a>
          </li>
           <li>
            <a href="/presence">
              <i className="nc-icon nc-caps-small"></i>
              <p>Présences</p>
            </a>
          </li>
           <li>
            <a href="/payment">
              <i className="nc-icon nc-caps-small"></i>
              <p>Paiements</p>
            </a>
          </li>
           <li>
            <a href="/revenue">
              <i className="nc-icon nc-caps-small"></i>
              <p>Revenus</p>
            </a>
          </li>
           <li>
            <a href="/expense">
              <i className="nc-icon nc-caps-small"></i>
              <p>Dépenses</p>
            </a>
          </li>
          <li>
            <a href="/configuration">
              <i className="nc-icon nc-caps-small"></i>
              <p>Paramètres</p>
            </a>
          </li>

        </ul>
      </div>
    </div>);

  }
}



Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
