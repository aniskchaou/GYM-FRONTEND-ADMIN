import React from 'react';
import PropTypes from 'prop-types';
import './TypeSubs.css';
import AddTypeSubs from './../AddTypeSubs/AddTypeSubs';

const TypeSubs = () => (
  <div className="content">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"> Type d'adhésion</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
            <thead class=" text-primary">
                      <th>Nom</th>
                      <th>Période </th>
                      <th>Plan de versement</th>
                      <th>Frais d'inscription</th>
                     
                    </thead>
                    <tbody>
                      <tr>
                        <td>fitness</td>
                        <td>4 mois</td>
                        <td>cash</td>
                        <td>232</td>
                       
                      </tr>
                    </tbody>
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

TypeSubs.propTypes = {};

TypeSubs.defaultProps = {};

export default TypeSubs;
