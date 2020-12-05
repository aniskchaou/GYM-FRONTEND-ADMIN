import React from 'react';
import PropTypes from 'prop-types';
import './Revenue.css';

const Revenue = () => (
  <div className="content">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"> Revenus</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
            <thead class=" text-primary">
                      <th>Nom</th>
                      <th>Montant</th>
                      
                    </thead>
                    <tbody>
                      <tr>
                        <td>course</td>
                        <td>3435</td>
                                
                      </tr></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</div>
);

Revenue.propTypes = {};

Revenue.defaultProps = {};

export default Revenue;
