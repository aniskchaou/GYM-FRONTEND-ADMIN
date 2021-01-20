import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './TypeSubs.css';
import AddTypeSubs from './../AddTypeSubs/AddTypeSubs';
import { LoadJS } from './../../../../libraries/datatables/datatables';
import EditTypeSubs from './../EditTypeSubs/EditTypeSubs';

const TypeSubs = () => {
  
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
          <h4 className="card-title"><i className="nc-icon nc-bullet-list-67"></i> Type d'adhésion</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
            <thead class=" text-primary"><tr>
                      <th>Nom</th>
                      <th>Période </th>
                      <th>Plan de versement</th>
                      <th>Frais d'inscription</th>
                      <th>Actions</th>
                      </tr></thead>
                    <tbody>
                      <tr>
                        <td >Muscilation</td>
                        <td class="badge badge-success">3 mois</td>
                        <td>Virement bancaire</td>
                        <td class="badge badge-primary">300$</td>
                        <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
                      </tr>
                      <tr>          
                        <td>Fitness</td>
                        <td class="badge badge-success">3 mois</td>
                        <td>Virement bancaire</td>
                        <td class="badge badge-primary">300$</td>
                        <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
                      </tr>

                      <tr>          
                        <td>Aerobics</td>
                        <td class="badge badge-success">6 mois</td>
                        <td>Virement bancaire</td>
                        <td class="badge badge-primary">250$</td>
                        <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
                      </tr>


                    </tbody>
                    <tfoot class=" text-primary"><tr>
                      <th>Nom</th>
                      <th>Période </th>
                      <th>Plan de versement</th>
                      <th>Frais d'inscription</th>
                      <th>Actions</th>
                      </tr></tfoot>
            </table>

            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addTypeSubs">Ajouter</button>


<div class="modal fade" id="addTypeSubs" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
             <AddTypeSubs/>
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
            <EditTypeSubs/>
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
)};

TypeSubs.propTypes = {};

TypeSubs.defaultProps = {};

export default TypeSubs;
