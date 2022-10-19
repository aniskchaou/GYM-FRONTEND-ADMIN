import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import './Expense.css';
import AddExpense from './../AddExpense/AddExpense';
import { LoadJS } from './../../../libraries/datatables/datatables';
import EditExpense from './../EditExpense/EditExpense';
import User from '../../../main/config/user'
import expenseMessage from '../../../main/messages/expenseMessage';
import showMessage from '../../../libraries/messages/messages';
import useForceUpdate from 'use-force-update';
import expenseHTTPService from '../../../main/services/expenseHTTPService';
import { Button, LinearProgress, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import ExpenseSummary from '../ExpenseSummary/ExpenseSummary';
import ExpenseBarChart from '../ExpenseBarChart/ExpenseBarChart';
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';

const Expense = () => {


  const [expenses, setExpenses] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const [loading, setLoading] = useState(true);
  const [updatedItemId, setUpdatedItemId] = useState(0);
  const [updatedItemIds, setUpdatedItemIds] = useState([]);

  const columns = [
    { field: 'id', headerName: '#', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'amount', headerName: 'Amount ($)', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 }
  ];


  useEffect(() => {
    LoadJS()
    getAllExpenses()
  }, []);


  const getAllExpenses = () => {
    setLoading(true);
    expenseHTTPService.getAllExpense()
      .then(response => {
        setExpenses(response.data);
        setLoading(false);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
  };


  const resfresh = () => {
    getAllExpenses()
    forceUpdate()
  }

  const removeExpenseAction = (e, data) => {
    e.preventDefault();
    var confirm = window.confirm(User.DELETE_MSG);
    if (confirm) {

      expenseHTTPService.removeExpense(data).then(data => {
        showMessage('Confirmation', expenseMessage.delete, 'success')
        resfresh()
      }).catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
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

  const handleRowSelection = (e) => {
    if (e.length == 1) {
      setUpdatedItemId(e[0])
      const selectedItem = expenses.find(item => item.id == e[0])
      setUpdatedItem(selectedItem)
    }
    setUpdatedItemIds(e)
  }



  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"><i class="nc-icon nc-money-coins"></i> Expenses</h4>
            </div>
            <div className="card-body">
              <ExpenseSummary />
              <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addExpense" ><i class="fas fa-plus"></i> Create </Button>
              <Button style={{ color: '#ffa400' }} onClick={e => updateExpenseAction(e, updatedItemId)} type="button" data-toggle="modal" data-target="#edit"><i class="fas fa-edit"></i> Edit</Button>
              <Button style={{ color: '#ffa400' }} onClick={e => removeExpenseAction(e, updatedItemId)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button>
              <Button type="button" style={{ color: '#ffa400' }} onClick={() => getAllExpenses()}><i class="fas fa-refresh"></i> Reload</Button>
              <Button style={{ color: '#ffa400' }} data-toggle="modal" data-target="#chart" type="button" ><i class="fas fa-chart-bar"></i> Analytics</Button>
              <ExpenseBarChart />
              {loading ?
                <LinearProgress />
                : <div style={{ height: 400, width: '100%' }}><DataGrid
                  rows={expenses}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[6]}
                  checkboxSelection
                  onSelectionModelChange={handleRowSelection}
                  components={{ Toolbar: GridToolbar }}
                /></div>}
              <div className="table">
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
