import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Presence.css';
import { LoadJS } from './../init';

const Presence = ()  => {
  
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
    console.log('hello')
  }, []);
  
  return(
  <div className="content">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"> Présenses</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
          <table className="table">
                <thead class=" text-primary">
                  <tr> <th>Nom membre</th>
                  <th>Date</th>
                  <th>jour</th>
                  <th>Statut</th></tr>
                 
                
                </thead>
                <tbody>
                  <tr>
                    <td>anis</td>
                    <td>22/10/2020</td>
                    <td>lundi</td>
                    <td>absent</td>
                  
                  </tr>
                </tbody>
                <tfoot class=" text-primary">
                  <tr> <th>Nom membre</th>
                  <th>Date</th>
                  <th>jour</th>
                  <th>Statut</th></tr>
                 
                
                </tfoot>
              </table>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</div>
)};

Presence.propTypes = {};

Presence.defaultProps = {};

export default Presence;
