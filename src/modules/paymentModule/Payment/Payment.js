import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Payment.css';
import { LoadJS } from './../../../libraries/datatables/datatables';
import AddPayment from './../AddPayment/AddPayment';
import EditPayment from './../EditPayment/EditPayment';

const Payment = () => {
  
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
            <h4 className="card-title"> Paiement</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead class=" text-primary">
                  <tr>  <th>Titre</th>
                  <th>Nom de membre</th>
                  <th>Montant</th>
                  <th>Montant payé</th>
                  <th>Montant du</th>
                  <th>debut ahdesion</th>
                  <th>Statut</th>
                  <th>Actions</th></tr>
                
                </thead>
                <tbody>
                  <tr>
                     
                    <td>Cours de dance</td>
                    <td>Musette Gervais</td>
                    <td>600$</td>
                    <td>600$</td>
                    <td>0$</td>
                    <td>05/08/2020</td>
                    <td class="badge badge-success">payé</td>
                    <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
                  </tr>
                </tbody>
                <tfoot class=" text-primary">
                  <tr>  <th>Titre</th>
                  <th>Nom de membre</th>
                  <th>Montant</th>
                  <th>Montant payé</th>
                  <th>Montant du</th>
                  <th>debut ahdesion</th>
                  <th>Statut</th>
                  <th>Actions</th></tr>
                
                </tfoot>
              </table>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addPayment">Ajouter</button>


<div class="modal fade" id="addPayment" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <AddPayment/>
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
            <EditPayment/>
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

Payment.propTypes = {};

Payment.defaultProps = {};

export default Payment;
