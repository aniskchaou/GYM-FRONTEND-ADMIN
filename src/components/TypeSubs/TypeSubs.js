import React from 'react';
import PropTypes from 'prop-types';
import './TypeSubs.css';

const TypeSubs = () => (
  <div className="content">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"> Type d'adhésion</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
            <thead class=" text-primary">
                      <th>Nom</th>
                      <th>Période </th>
                      <th>Plan de versement</th>
                      <th>Frais d'inscription</th>
                     
                    </thead>
                    <tbody>
                      <tr>
                        <td>fitness</td>
                        <td>4 mois</td>
                        <td>cash</td>
                        <td>232</td>
                       
                      </tr>
                    </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</div>
);

TypeSubs.propTypes = {};

TypeSubs.defaultProps = {};

export default TypeSubs;
