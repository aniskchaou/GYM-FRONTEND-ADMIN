import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = () => (
  <div className="card">
  <div className="card-header">
      <strong className="card-title">Utilisateurs</strong>
  </div>
  <div className="card-body">
      <table id="bootstrap-data-table" className="table table-striped table-bordered">
          <thead>
              <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                 
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Tiger Nixon</td>
                  <td>tiger@gmail.com</td>
                  <td>355355353</td>
                  
              </tr>
             
          </tbody>
      </table>
  </div>
</div>
);

User.propTypes = {};

User.defaultProps = {};

export default User;
