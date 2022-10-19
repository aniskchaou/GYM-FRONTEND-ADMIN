
import React, { useEffect, useRef, useState } from 'react';
import './TypeSubs.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import useForceUpdate from 'use-force-update';
import EditTypeSubs from '../EditTypeSubs/EditTypeSubs';
import AddTypeSubs from '../AddTypeSubs/AddTypeSubs';
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService'
import ViewTypeSubs from '../ViewTypeSubs/ViewTypeSubs';
import { NavLink, useHistory } from 'react-router-dom';
import memberHTTPService from '../../../main/services/memberHTTPService';
import { Button, LinearProgress, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import User from '../../../main/config/user';
import SubscriptionSummary from '../SubscriptionSummary/SubscriptionSummary';
import SubscriptionPieChart from '../SubscriptionPieChart/SubscriptionPieChart';

const TypeSubs = () => {

  const [typeSubs, setTypeSubs] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const [singleSelected, setSingleSelected] = useState(false);
  let history = useHistory();
  const [updatedItemId, setUpdatedItemId] = useState(0);
  const [updatedItemIds, setUpdatedItemIds] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const columns = [
    { field: 'id', headerName: '#', width: 200 },
    { field: 'time_payment', headerName: 'Payment Plan ', width: 200 },
    { field: 'period', headerName: 'Period (weeks)', width: 200 },
    { field: 'fee', headerName: 'Enrollment fee ($)', width: 200 },
    { field: 'amount', headerName: 'Amount ($)', width: 200 },
    { field: 'category', headerName: 'Subscription Category', width: 200 },
  ];

  useEffect(() => {
    LoadJS()
    getTypeSubs()
    getMembers()
  }, []);


  const getTypeSubs = () => {
    setLoading(true)
    typeSubsHTTPService.getAllTypeSubs().then(data => {
      setTypeSubs(data.data);
      forceUpdate()
      setLoading(false)
    })
  };



  const remove = (e, data) => {
    e.preventDefault();
    var response = window.confirm(User.DELETE_MSG);
    if (response) {
      typeSubsHTTPService.removeTypeSubs(data).then(data => {
        getTypeSubs()
      })
    }
  }

  const getMembers = () => {
    memberHTTPService.getAllMember().then(data => {
      setMembers(data.data)
    })
  }

  const update = (e, data) => {
    e.preventDefault();
    const item = typeSubs.filter(item => item.id == data)
    setUpdatedItem(item)
  }

  const closeModalEdit = (data) => {
    closeButtonEdit.current.click()
    getTypeSubs()

  }

  const closeModalAdd = (data) => {
    closeButtonAdd.current.click()
    getTypeSubs()
  }


  const handleRowSelection = (e) => {
    if (e.length == 1) {
      setSingleSelected(true)
      setUpdatedItemId(e[0])
      const selectedItem = typeSubs.find(item => item.id == e[0])
      setUpdatedItem(selectedItem)
    } else {
      setSingleSelected(false)
      setUpdatedItemIds(e)
    }
  }

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"><i className="nc-icon nc-bullet-list-67"></i> Subscription Types</h4>
            </div>
            <div className="card-body">
              <SubscriptionSummary />
              <div className="table">


                <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addTypeSubs" ><i class="fas fa-plus"></i> Create </Button>
                {singleSelected ? <span><Button style={{ color: '#ffa400' }} onClick={e => update(e, updatedItemId)} type="button" data-toggle="modal" data-target="#edit"><i class="fas fa-edit"></i> Edit</Button>
                  <Button style={{ color: '#ffa400' }} onClick={e => remove(e, updatedItemId)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button></span> : <span></span>}
                <Button type="button" style={{ color: '#ffa400' }} onClick={() => getTypeSubs()}><i class="fas fa-refresh"></i> Reload</Button>
                <Button style={{ color: '#ffa400' }} data-toggle="modal" data-target="#chart" type="button" ><i class="fas fa-chart-bar"></i> Analytics</Button>

                {loading ?
                  <LinearProgress />
                  : <div style={{ height: 430, width: '100%' }}><DataGrid
                    rows={typeSubs}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                    onSelectionModelChange={handleRowSelection}
                    components={{ Toolbar: GridToolbar }}
                  /></div>}
                <div class="modal fade" id="addTypeSubs" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddTypeSubs closeModal={closeModalAdd} />
                      </div>
                      <div class="modal-footer">
                        <button ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>



                <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <EditTypeSubs typeSub={updatedItemId} closeModal={closeModalEdit} />
                      </div>
                      <div class="modal-footer">
                        <button ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>


                <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">View</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <ViewTypeSubs typeSub={updatedItemId} />
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>

                <SubscriptionPieChart />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

TypeSubs.propTypes = {};

TypeSubs.defaultProps = {};

export default TypeSubs;
