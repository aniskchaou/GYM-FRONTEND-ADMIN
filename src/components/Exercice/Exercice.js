import React from 'react';
import PropTypes from 'prop-types';
import './Exercice.css';
import AddExercice from './../AddExercice/AddExercice';

const Exercice = () => (
  <div className="content">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"> Entrainement</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
            <thead class=" text-primary">
                      <th>Nom de produit</th>
                      <th>Prix de produit</th>
                      <th>Quantité</th>
                     
                    
                    </thead>
                    <tbody>
                      <tr>
                        <td>vitamine</td>
                        <td>66</td>
                        <td>6</td>
                                  
                      </tr>
                    </tbody>
            </table>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addExercice">Ajouter</button>


<div class="modal fade" id="addExercice" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <AddExercice/>
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

Exercice.propTypes = {};

Exercice.defaultProps = {};

export default Exercice;
