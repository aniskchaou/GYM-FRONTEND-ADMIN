import React, { useEffect, useState } from 'react';
import './Header.css';
import User from '../../config/user';
import { NavLink, useHistory } from 'react-router-dom';
import settingsHTTPService from '../../services/settingsHTTPService';
import SearchBar from '../SearchBar/SearchBar';

const Header = ({ connected, handleClick }) => {


  let history = useHistory()
  const [headerSettings, setHeaderSettings] = useState({});

  const logout = () => {
    handleClick(false)
    localStorage.clear()
    history.push("/login")
  }


  useEffect(() => {
    getFooterSettings()
  }, []);

  const getFooterSettings = () => {
    settingsHTTPService.getHeaderSettings().then(data => {
      setHeaderSettings(data.data[0])
      console.log(data.data[0])
    })
  }


  return (
    <nav style={{ display: (connected ? 'block' : 'none') }} className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
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
          {headerSettings.enbaleSearchBar == 1 &&
            <SearchBar />
          }
          <ul className="navbar-nav">
            <li className="nav-item btn-rotate dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user-alt"></i>
                {' ' + User.USER_DETAIL.username}
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="/profile"> Profil</NavLink>
                <NavLink className="dropdown-item" to="/configuration">Settings</NavLink>
                <a className="dropdown-item" href={User.BACKOFFICE_URL}>Website</a>
                <a onClick={logout} className="dropdown-item" href="#">Log out</a>
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
