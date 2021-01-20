import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Expense.css';
import AddExpense from './../AddExpense/AddExpense';
import { LoadJS } from './../../../libraries/datatables/datatables';
import EditExpense from './../EditExpense/EditExpense';

const Expense = () => {
  
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
          <h4 className="card-title"> Dépenses</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
            <thead class=" text-primary">
                      <tr><th>Founisseur</th>
                      <th>Montant</th>
                      <th>Actions</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>maintenance matériel</td>
                        <td>532$</td>
                        <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>       
                      </tr>

                      <tr>
                        <td>Nouveau material</td>
                        <td>6399$</td>
                        <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>       
                      </tr>

                      <tr>
                        <td>Masse salariale</td>
                        <td>12650$</td>
                        <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>       
                      </tr>
                    </tbody>
                    <tfoot class=" text-primary">
                      <tr><th>Founisseur</th>
                      <th>Montant</th>
                      <th>Actions</th></tr>
                    </tfoot>
            </table>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addExpense">Ajouter</button>


<div class="modal fade" id="addExpense" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
           <AddExpense/>
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
            <EditExpense/>
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

Expense.propTypes = {};

Expense.defaultProps = {};

export default Expense;
