
import React, { useEffect, useRef, useState } from 'react';
import './Payment.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditPayment from '../EditPayment/EditPayment';
import AddPayment from '../AddPayment/AddPayment';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import paymentMessage from '../../../main/messages/paymentMessage';
import PaymentTestService from '../../../main/mocks/PaymentTestService';
import paymentHTTPService from '../../../main/services/paymentHTTPService';
import { Button, LinearProgress, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


const Payment = () => {

  const [payments, setPayments] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const [loading, setLoading] = useState(true);
  const [updatedItemId, setUpdatedItemId] = useState(0);
  const [updatedItemIds, setUpdatedItemIds] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const columns = [
    { field: 'id', headerName: '#', width: 200 },
    { field: 'member', headerName: 'Member', width: 200 },
    { field: 'amount', headerName: 'Amount', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 }
  ];

  useEffect(() => {
    LoadJS()
    getAllPayments()
  }, []);


  const getAllPayments = () => {
    setLoading(true);
    paymentHTTPService.getAllPayment()
      .then(response => {
        setPayments(response.data);
        setLoading(false)
      })
      .catch(e => {
        showMessage('Confirmation', e, 'info')
      });
  };


  const resfresh = () => {
    getAllPayments()
    forceUpdate()
  }

  const removePaymentAction = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', paymentMessage.delete, 'success')
      paymentHTTPService.removePayment(data).then(data => {
        resfresh()
      }).catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
    }
  }

  const updatePaymentAction = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }

  const closeModalEdit = (data) => {
    closeButtonEdit.current.click()
  }

  const closeModalAdd = (data) => {
    closeButtonAdd.current.click()
  }

  const handleRowSelection = (e) => {
    if (e.length == 1) {

      setUpdatedItemId(e[0])
      const selectedItem = payments.find(item => item.id == e[0])
      setUpdatedItem(selectedItem)
      console.log(updatedItem);
    }
    setUpdatedItemIds(e)

  }

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"><i class="nc-icon nc-basket"></i> Payments</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">

                <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addPayment" ><i class="fas fa-plus"></i> Create </Button>
                <Button style={{ color: '#ffa400' }} onClick={e => updatePaymentAction(e, updatedItemId)} type="button" data-toggle="modal" data-target="#edit"><i class="fas fa-edit"></i> Edit</Button>
                <Button style={{ color: '#ffa400' }} onClick={e => removePaymentAction(e, updatedItemId)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button>
                <Button type="button" style={{ color: '#ffa400' }} onClick={() => getAllPayments()}><i class="fas fa-refresh"></i> Reload</Button>

                {loading ?
                  <LinearProgress />
                  : <div style={{ height: 400, width: '100%' }}><DataGrid
                    rows={payments}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                    onSelectionModelChange={handleRowSelection}
                    components={{ Toolbar: GridToolbar }}
                  /></div>}

                <div class="modal fade" id="addPayment" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">nouveau</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddPayment closeModal={closeModalAdd} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} type="button" ref={closeButtonAdd} class="btn btn-secondary" data-dismiss="modal">Close</button>

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
                        <EditPayment payment={updatedItem} closeModal={closeModalEdit} />
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
    </div>
  )
};

Payment.propTypes = {};

Payment.defaultProps = {};

export default Payment;
