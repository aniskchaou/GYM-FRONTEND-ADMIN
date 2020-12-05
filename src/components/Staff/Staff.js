import React from 'react';
import PropTypes from 'prop-types';
import './Staff.css';

const Staff = () => (
  <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title"> Staff</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                    <thead class=" text-primary">
                      <th>Nom</th>
                      <th>Role</th>
                      <th>Date expiration</th>
                      <th>Type de membre</th>
                      <th>Statut</th>
                    
                    </thead>
                    <tbody>
                      <tr>
                        <td>anis</td>
                        <td>entreneur</td>
                        <td>22/10/2021</td>
                        <td>normal</td>
                        <td>active</td>            
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

Staff.propTypes = {};

Staff.defaultProps = {};

export default Staff;
