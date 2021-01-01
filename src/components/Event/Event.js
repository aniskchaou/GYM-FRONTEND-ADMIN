import React from 'react';
import PropTypes from 'prop-types';
import './Event.css';
import AddEvent from './../AddEvent/AddEvent';

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
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addEvent">Ajouter</button>


<div class="modal fade" id="addEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
           <AddEvent/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
