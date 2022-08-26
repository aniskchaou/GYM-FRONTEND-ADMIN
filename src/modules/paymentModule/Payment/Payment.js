
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

const Payment = () => {

  const [payments, setPayments] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);



  useEffect(() => {
    LoadJS()
    getAllPayments()
  }, []);


  const getAllPayments = () => {
    // setLoading(true);
    paymentHTTPService.getAllPayment()
      .then(response => {
        setPayments(response.data);

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
      showMessage('Confirmation', 'patientMessage.delete', 'success')
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
    // resfresh()
    closeButtonEdit.current.click()
  }

  const closeModalAdd = (data) => {
    //resfresh()
    closeButtonAdd.current.click()
  }


  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> Payments</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addPayment"><i class="far fa-plus-square"></i>  Create</button>

                <table className="table">
                  <thead class=" text-primary">
                    <tr>
                      <th>Member</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.length === 0 ? <div class="d-flex justify-content-center" >
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div></div> : payments.map(item =>
                        <tr>
                          <td>{item.member}</td>
                          <td>{item.type} $</td>
                          <td>{item.amount}</td>
                          <td>
                            <button style={{ margin: "3px" }} onClick={e => updatePaymentAction(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                            <button onClick={e => removePaymentAction(e, item.id)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                          </td>
                        </tr>
                      )}
                  </tbody>

                </table>


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
