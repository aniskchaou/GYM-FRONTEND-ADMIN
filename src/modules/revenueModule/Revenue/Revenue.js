import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Revenue.css';
import AddRevenue from './../AddRevenue/AddRevenue';
import { LoadJS } from './../../../libraries/datatables/datatables';
import EditPayment from './../../paymentModule/EditPayment/EditPayment';
import revenueHTTPService from '../../../main/services/revenueHTTPService';
import RevenueTestService from '../../../main/mocks/RevenueTestService';
import revenueMessage from '../../../main/messages/revenueMessage';
import showMessage from '../../../libraries/messages/messages';
import useForceUpdate from 'use-force-update';
import EditRevenue from '../EditRevenue/EditRevenue';
import { Button, LinearProgress, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import IncomeSummary from '../IncomeSummary/IncomeSummary';
import IncomeBarChart from '../IncomeBarChart/IncomeBarChart';
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';
import User from '../../../main/config/user';

const Revenue = () => {

  const [revenues, setRevenues] = useState([]);
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
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'amount', headerName: 'Amount ($)', width: 200 }
  ];

  useEffect(() => {
    LoadJS()
    getAllPatient()
  }, []);


  const getAllPatient = () => {
    setLoading(true)
    revenueHTTPService.getAllRevenue()
      .then(response => {
        setRevenues(response.data);
        setLoading(false)
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };


  const resfresh = () => {
    getAllPatient()
    forceUpdate()
  }

  const removeRevenueAction = (e, data) => {
    e.preventDefault();
    var r = window.confirm(User.DELETE_MSG);
    if (r) {
      showMessage('Confirmation', revenueMessage.delete, 'success')
      revenueHTTPService.removeRevenue(data).then(data => {
        resfresh()
      }).catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
    }
  }

  const updateRevenueAction = (e, data) => {
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
      const selectedItem = revenues.find(item => item.id == e[0])
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
              <h4 className="card-title"><i class="nc-icon nc-refresh-69"></i> Incomes</h4>
            </div>
            <div className="card-body">
              <IncomeSummary />
              <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addRevenue" ><i class="fas fa-plus"></i> Create </Button>
              <Button style={{ color: '#ffa400' }} onClick={e => updateRevenueAction(e, updatedItemId)} type="button" data-toggle="modal" data-target="#edit"><i class="fas fa-edit"></i> Edit</Button>
              <Button style={{ color: '#ffa400' }} onClick={e => removeRevenueAction(e, updatedItemId)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button>
              <Button type="button" style={{ color: '#ffa400' }} onClick={() => getAllPatient()}><i class="fas fa-refresh"></i> Reload</Button>
              <Button style={{ color: '#ffa400' }} data-toggle="modal" data-target="#chart" type="button" ><i class="fas fa-chart-bar"></i> Analytics</Button>
              <IncomeBarChart />

              {loading ?
                <LinearProgress />
                : <div style={{ height: 400, width: '100%' }}><DataGrid
                  rows={revenues}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[6]}
                  checkboxSelection
                  onSelectionModelChange={handleRowSelection}
                  components={{ Toolbar: GridToolbar }}
                /></div>}


              <div class="modal fade" id="addRevenue" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                      <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <AddRevenue closeModal={closeModalAdd} />
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
                      <EditRevenue revenue={updatedItem} closeModal={closeModalEdit} />
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
  )
};

Revenue.propTypes = {};

Revenue.defaultProps = {};

export default Revenue;
