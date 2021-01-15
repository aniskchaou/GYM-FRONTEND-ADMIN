import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Member.css';
import AddMember from './../AddMember/AddMember';
import { LoadJS } from './../init';
import EditMember from './../EditMember/EditMember';

const Member = () => {
  
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
            <h4 className="card-title"> Membres</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead class=" text-primary">
                 <tr> <th>Nom membre</th>
                  <th>Date inscription</th>
                  <th>Date expiration</th>
                  <th>Type de membre</th>
                  <th>Statut</th>
                  <th>Actions</th></tr>
                </thead>
                <tbody>

 
              





                  <tr>
                    <td>  Marshall Brodeur</td>
                    <td>13/01/2020</td>
                    <td>13/06/2021</td>
                    <td>normal</td>
                    <td class="badge badge-success">Active</td>
                    <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>

                  </tr>

                  <tr>
                    <td>  Musette Gervais</td>
                    <td>05/08/2020</td>
                    <td>05/08/2021</td>
                    <td>normal</td>
                    <td class="badge badge-success">Active</td>
                    <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>

                  </tr>

                  <tr>
                    <td> Christophe Marceau</td>
                    <td>03/03/2020</td>
                    <td>03/12/2020</td>
                    <td>normal</td>
                    <td class="badge badge-danger">Inactive</td>
                    <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>

                  </tr>









                </tbody>
                <tfoot class=" text-primary">
                 <tr> <th>Nom membre</th>
                  <th>Date inscription</th>
                  <th>Date expiration</th>
                  <th>Type de membre</th>
                  <th>Statut</th>
                  <th>Actions</th></tr>
                </tfoot>
              </table>
             
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addMember">Ajouter</button>


<div class="modal fade" id="addMember" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <AddMember/>
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
            <EditMember/>
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

Member.propTypes = {};

Member.defaultProps = {};

export default Member;
