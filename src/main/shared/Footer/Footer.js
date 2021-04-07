import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import User from '../../config/user';

const Footer = (props) => (


  <footer style={{ display: (User.CONNECTED_USER ? 'block' : 'none') }} className="footer footer-black  footer-white ">
    <div className="container-fluid">
      <div className="row">
        <nav className="footer-nav">

        </nav>
        <div className="credits ml-auto">
          <span className="copyright">
            Developed by <a href="https://github.com/aniskchaou">Anis KCHAOU</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
