import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import User from '../../config/user';
import { NavLink, useHistory } from 'react-router-dom';

const Header = (props) => {
  let history = useHistory()

  const logout = () => {
    props.rerender();
    User.CONNECTED_USER = false
    history.push("/login")
  }
  return (
    <nav style={{ display: (User.CONNECTED_USER ? 'block' : 'none') }} className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
      <div className="container-fluid">
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button type="button" className="navbar-toggler">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <a className="navbar-brand" href="javascript:;"></a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navigation">
          <form>
            <div className="input-group no-border">
              <input type="text" value="" className="form-control" placeholder="Rechercher..." />
              <div className="input-group-append">
                <div className="input-group-text">
                  <i className="nc-icon nc-zoom-split"></i>
                </div>
              </div>
            </div>
          </form>
          <ul className="navbar-nav">

            <li className="nav-item btn-rotate dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-plus-circle"></i>
                <p>
                  <span className="d-lg-none d-md-block">Accés rapide</span>
                </p>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="/add-groupe">Ajouter groupe</NavLink>
                <NavLink className="dropdown-item" to="/add-member">Ajouter membre</NavLink>
                <NavLink className="dropdown-item" to="/add-staff">Ajouter staff</NavLink>
                <NavLink className="dropdown-item" to="/add-activity">Ajouter activité</NavLink>
                <NavLink className="dropdown-item" to="/add-product">Ajouter produit</NavLink>
              </div>
            </li>

            <li className="nav-item btn-rotate dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user-alt"></i>
                <p>
                  <span className="d-lg-none d-md-block">Configuration</span>
                </p>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="/profile">Mon profile</NavLink>
                <NavLink className="dropdown-item" to="/configuration">Paramètres</NavLink>
                <a onClick={logout} className="dropdown-item" href="#">Déconnexion</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </nav>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
