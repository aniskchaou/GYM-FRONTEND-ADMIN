import React, { useEffect, useState } from 'react';
import './Footer.css';
import settingsHTTPService from '../../services/settingsHTTPService'
const Footer = ({ connected }) => {

  const [footerSettings, setFooterSettings] = useState({})

  useEffect(() => {
    getFooterSettings()
  }, []);

  const getFooterSettings = () => {
    settingsHTTPService.getFooterSettings().then(data => {
      setFooterSettings(data.data[0])
    })
  }

  return (
    <footer style={{ display: (connected ? 'block' : 'none') }} className="footer footer-black  footer-white ">


    </footer>
  )
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
