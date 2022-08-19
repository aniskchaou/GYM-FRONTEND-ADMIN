import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import PropTypes from 'prop-types';
import './Expense.css';
import AddExpense from './../AddExpense/AddExpense';
import { LoadJS } from './../../../libraries/datatables/datatables';
import EditExpense from './../EditExpense/EditExpense';
import ExpenseTestService from '../../../main/mocks/ExpenseTestService';
import expenseMessage from '../../../main/messages/expenseMessage';
import showMessage from '../../../libraries/messages/messages';
import useForceUpdate from 'use-force-update';
import expenseHTTPService from '../../../main/services/expenseHTTPService';

const Expense = () => {


  const [expenses, setExpenses] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    LoadJS()
    getAllPatient()
  }, []);


  const getAllPatient = () => {
    setLoading(true);
    expenseHTTPService.getAllExpense()
      .then(response => {
        setExpenses(response.data);
        setLoading(false);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'info')
      });
  };


  const resfresh = () => {
    getAllPatient()
    forceUpdate()
  }

  const removeExpenseAction = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', 'patientMessage.delete', 'success')
      expenseHTTPService.removeExpense(data).then(data => {
        resfresh()
      }).catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
    }
  }

  const updateExpenseAction = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }

  const closeModalEdit = (data) => {
    resfresh()
    closeButtonEdit.current.click()
  }

  const closeModalAdd = (data) => {
    resfresh()
    closeButtonAdd.current.click()
  }

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> Expenses</h4>
            </div>
            <div className="card-body">
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addExpense"><i class="far fa-plus-square"></i> Create</button>

              <div className="table">
                <table className="table">
                  <thead class=" text-primary">
                    <tr><th>Name</th>
                      <th>Amount</th>
                      <th>Actions</th></tr>
                  </thead>
                  <tbody>

                    {expenses.map(item =>
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.amount} $</td>
                        <td>
                          <button style={{ margin: "3px" }} onClick={e => updateExpenseAction(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                          <button onClick={e => removeExpenseAction(e, item.id)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                        </td>
                      </tr>
                    )}

                  </tbody>

                </table>


                <div class="modal fade" id="addExpense" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddExpense closeModal={closeModalAdd} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>



                <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <EditExpense expense={updatedItem} closeModal={closeModalEdit} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
};

Expense.propTypes = {};

Expense.defaultProps = {};

export default Expense;
