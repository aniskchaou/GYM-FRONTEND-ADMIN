import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Staff.css';
import AddStaff from './../AddStaff/AddStaff';
import { LoadJS } from './../init';
import EditStaff from './../EditStaff/EditStaff';

const Staff = () => {
  
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
                  <h4 className="card-title"> <i className="nc-icon nc-single-02"></i> Staff</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                    <thead class=" text-primary">
                      <tr>
                      <th>Nom</th>
                      <th>Role</th>
                      <th>Date expiration</th>
                      <th>Type de membre</th>
                      <th>Statut</th>
                    </tr>
                    </thead>
                    <tbody>
                    






                      <tr>
                        <td>Virginie Brunault</td>
                        <td>Professeure de dance</td>
                        <td class="badge badge-primary">05/09/2022</td>
                        <td>Normal</td>
                        <td class="badge badge-success">Active</td>            
                      </tr>
                      



                      <tr>
                        <td>Audric Renard</td>
                        <td>Préparateur physique</td>
                        <td class="badge badge-primary">29/04/2023</td>
                        <td>Normal</td>
                        <td class="badge badge-success">Active</td>            
                      </tr>
                      <tr>
                        <td>Ray Pitre</td>
                        <td>Préparateur physique</td>
                        <td class="badge badge-primary">09/07/2020</td>
                        <td>Normal</td>
                        <td class="badge badge-danger">Inactive</td>            
                      </tr>





                       




                    </tbody>
                    <tfoot class=" text-primary">
                      <tr>
                      <th>Nom</th>
                      <th>Role</th>
                      <th>Date expiration</th>
                      <th>Type de membre</th>
                      <th>Statut</th>
                    </tr>
                    </tfoot>
                    </table>

                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addStaff">Ajouter</button>


<div class="modal fade" id="addStaff" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <AddStaff/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
            <EditStaff/>
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

Staff.propTypes = {};

Staff.defaultProps = {};

export default Staff;
