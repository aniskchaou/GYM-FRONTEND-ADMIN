import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Groupe.css';
import AddGroupe from './../AddGroupe/AddGroupe';
import { LoadJS } from './../init';
import EditGroupe from './../EditGroupe/EditGroupe';

const Groupe = () => {
  
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
          <h4 className="card-title"> Groupes</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
            <thead class=" text-primary">
                     <tr> <th>Nom</th>
                      <th>Nombre de membres </th>
                      <th>Actions</th></tr>
                     
                    </thead>
                    <tbody>
                      <tr>
                        <td>groupe 1</td>
                        <td>4</td>
                        <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
                       
                      </tr>
                    </tbody> 
            </table>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addGroupe">Ajouter</button>


<div class="modal fade" id="addGroupe" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <AddGroupe/>
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
            <EditGroupe/>
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

Groupe.propTypes = {};

Groupe.defaultProps = {};

export default Groupe;
