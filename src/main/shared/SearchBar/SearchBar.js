import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = () => (

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

);

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
