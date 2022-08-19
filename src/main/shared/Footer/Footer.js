import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import User from '../../config/user';
import settingsHTTPService from '../../services/settingsHTTPService'
const Footer = (props) => {
  const [footerSettings, setFooterSettings] = useState({})
  useEffect(() => {
    getFooterSettings()
  }, []);

  const getFooterSettings = () => {
    settingsHTTPService.getFooterSettings().then(data => {
      setFooterSettings(data.data[0])
      console.log(data.data[0])
    })
  }

  return (
    <footer style={{ display: (User.CONNECTED_USER ? 'block' : 'none') }} className="footer footer-black  footer-white ">

      {footerSettings.enableFooter === 1 && <div className="container-fluid">
        <div className="row">
          <nav className="footer-nav">

          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              Developed by Delta dev Software
            </span>
          </div>
        </div>
      </div>}
    </footer>
  )
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
