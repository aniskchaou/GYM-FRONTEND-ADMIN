import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Revenue.css';
import AddRevenue from './../AddRevenue/AddRevenue';
import { LoadJS } from './../../../libraries/datatables/datatables';
import EditPayment from './../../paymentModule/EditPayment/EditPayment';
import HTTPService from '../../../main/services/HTTPService';
import RevenueTestService from '../../../main/mocks/RevenueTestService';
import revenueMessage from '../../../main/messages/revenueMessage';
import showMessage from '../../../libraries/messages/messages';
import useForceUpdate from 'use-force-update';
import EditRevenue from '../EditRevenue/EditRevenue';

const Revenue = () => {

  const [revenues, setRevenues] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveRevenues()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setRevenues(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeOne = (data) => {
    HTTPService.remove(data)
      .then(response => {

      })
      .catch(e => {

      });
  }



  const retrieveRevenues = () => {
    var revenues = RevenueTestService.getAll();
    setRevenues(revenues);
  };

  const resfresh = () => {
    retrieveRevenues()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', revenueMessage.delete, 'success')
      RevenueTestService.remove(data)
      //removeOne(data)
      resfresh()
    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> Revenus</h4>
            </div>
            <div className="card-body">


              <table className="table">
                <thead class=" text-primary">
                  <tr> <th>Nom</th>
                    <th>Montant</th>
                    <th>Actions</th></tr>

                </thead>
                <tbody>

                  {revenues.map(item =>
                    <tr>
                      <td>{item.revenue}</td>
                      <td>{item.amount} $</td>
                      <td>
                        <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button onClick={e => remove(e, revenues.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                      </td>
                    </tr>

                  )}

                </tbody>
                <tfoot class=" text-primary">
                  <tr> <th>Nom</th>
                    <th>Montant</th>
                    <th>Actions</th></tr>

                </tfoot>
              </table>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addRevenue"><i class="far fa-plus-square"></i> </button>


              <div class="modal fade" id="addRevenue" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                      <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <AddRevenue />
                    </div>
                    <div class="modal-footer">
                      <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
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
                      <EditRevenue revenue={updatedItem} />
                    </div>
                    <div class="modal-footer">
                      <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
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

Revenue.propTypes = {};

Revenue.defaultProps = {};

export default Revenue;
