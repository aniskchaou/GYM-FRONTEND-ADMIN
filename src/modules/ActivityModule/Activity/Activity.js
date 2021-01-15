import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Activity.css';
import AddActivity from '../AddActivity/AddActivity';
import { LoadJS } from '../../init';
import EditActivity from '../../EditActivity/EditActivity';
const deleteTask = () => {
  return window.confirm("Êtes-vous sûr de vouloir supprimer cette tache ?")
}
const Activity = () => {
  
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
            <h4 className="card-title"> activité</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead class=" text-primary">
                  <tr>
                  <th>Nom de l'activité</th>
                  <th>Categorie</th>
                  <th>Formateur</th>
                  <th>Actions</th>
                 </tr>
                </thead>
                <tbody>
                   

                  <tr>
                    <td>musculation</td>
                    <td>sport</td>
                    <td>Audric Renard</td>
                    <td>
                      <button type="button" data-toggle="modal" data-target="#editActivity" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                      <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>
                  </tr>

                  <tr>
                    <td>dance</td>
                    <td>sport</td>
                    <td>Virginie Brunault</td>
                    <td>
                      <button type="button" data-toggle="modal" data-target="#editActivity" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                      <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>
                  </tr>

                </tbody>
                <tfoot class=" text-primary">
                  <tr>
                  <th>Nom de l'activité</th>
                  <th>Categorie</th>
                  <th>Formateur</th>
                  <th>Actions</th>
                 </tr>
                </tfoot>
              </table>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addActivity">Ajouter</button>


              <div class="modal fade" id="addActivity" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                            <AddActivity/>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>


              <div class="modal fade" id="editActivity" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <EditActivity/>
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
)};

Activity.propTypes = {};

Activity.defaultProps = {};

export default Activity;
