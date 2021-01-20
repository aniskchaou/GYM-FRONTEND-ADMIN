import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Event.css';
import AddEvent from './../AddEvent/AddEvent';
import { LoadJS } from './../../../libraries/datatables/datatables';
import EditEvent from './../EditEvent/EditEvent';

const Event = () => {

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
              <h4 className="card-title"> Evenement</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">








                <table className="table">
                  <thead class=" text-primary">
                    <tr> <th>Nom de l'evenement</th>
                      <th>Date evenement</th>
                      <th>Endroit</th>
                      <th>Heure de début</th>
                      <th>Heure de fin</th>
                      <th>Actions</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Cours de musculation</td>
                      <td>15/03/2021</td>
                      <td>93, avenue de Bouvines
89100 SENS </td>
                      <td>17:00</td>
                      <td>19:00</td><td>
                        <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>         </tr>


                    <tr><td>Cours de muscilation</td>
                      <td>15/03/2021</td>
                      <td>93, avenue de Bouvines 89100 SENS</td>
                      <td>09:00</td>
                      <td>11:00</td><td>
                        <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>         </tr>


                    <tr><td>Cours de fitness</td>
                      <td>15/03/2021</td>
                      <td>93, avenue de Bouvines
89100 SENS </td>
                      <td>19:00</td>
                      <td>20:00</td><td>
                        <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>         </tr>


                    <tr><td>Cours de dance </td>
                      <td>15/03/2021</td>
                      <td>93, avenue de Bouvines
                       89100 SENS</td>
                      <td>16:00</td>
                      <td>18:00</td><td>
                        <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>         </tr>


                  </tbody>
                  <tfoot class=" text-primary">
                    <tr> <th>Nom de l'evenement</th>
                      <th>Date evenement</th>
                      <th>Endroit</th>
                      <th>Heure de début</th>
                      <th>Heure de fin</th>
                      <th>Actions</th></tr>
                  </tfoot>
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
                        <AddEvent />
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                          
                      </div>
                    </div>
                  </div>
                </div>



                <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <EditEvent />
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                          
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
  )
};

Event.propTypes = {};

Event.defaultProps = {};

export default Event;
