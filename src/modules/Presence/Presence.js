import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Presence.css';
import { LoadJS } from './../init';

const Presence = () => {

  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
    console.log('hello')
  }, []);

  return (
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
                      <td>Christophe Marceau</td>
                      <td>08/01/2021</td>
                      <td>vendredi</td>
                      <td class="badge badge-success">absent</td></tr>

                    <tr>
                      <td>Musette Gervais</td>
                      <td>14/01/2021</td>
                      <td>jeudi</td>
                      <td class="badge badge-success">present</td></tr>

                    <tr>
                      <td>Marshall Brodeur</td>
                      <td>16/01/2021</td>
                      <td>dimanche</td>
                      <td class="badge badge-danger">present</td></tr>
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
  )
};

Presence.propTypes = {};

Presence.defaultProps = {};

export default Presence;
