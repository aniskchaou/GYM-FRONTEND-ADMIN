import React from 'react';
import PropTypes from 'prop-types';
import './Event.css';

const Event = () => (
  <div className="content">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"> Evenement</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
            <thead class=" text-primary">
                      <th>Nom de l'evenement</th>
                      <th>Date evenement</th>
                      <th>Endroit</th>
                      <th>Heure de début</th>
                      <th>Heure de fin</th>
                    
                    </thead>
                    <tbody>
                      <tr>
                        <td>course</td>
                        <td>12/22/2020</td>
                        <td>Paris</td>
                        <td>14:00</td>
                        <td>16:00</td>
                                  
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

Event.propTypes = {};

Event.defaultProps = {};

export default Event;
