
import React, { useEffect, useRef, useState } from 'react';
import './Staff.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditStaff from '../EditStaff/EditStaff';
import AddStaff from '../AddStaff/AddStaff';
import useForceUpdate from 'use-force-update';
import HTTPService from '../../../main/services/HTTPService';
import staffHTTPService from '../../../main/services/staffHTTPService';
import ViewStaff from '../ViewStaff/ViewStaff';
import { Button, LinearProgress, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import StaffSummary from '../StaffSummary/StaffSummary';
import StaffPieChart from '../StaffPieChart/StaffPieChart';
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';
import showMessage from '../../../libraries/messages/messages';
import User from '../../../main/config/user';


const Staff = () => {

  const [staffs, setStaffs] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const [loading, setLoading] = useState(false);
  const [updatedItemId, setUpdatedItemId] = useState(0);
  const [updatedItemIds, setUpdatedItemIds] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const columns = [
    { field: 'id', headerName: '#', width: 200 },
    { field: 'first_name', headerName: 'First Name', width: 200 },
    { field: 'last_name', headerName: 'Last Name', width: 200 },
    { field: 'role', headerName: 'Role', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'date', headerName: 'Date of birth', width: 200 },
    { field: 'mobile', headerName: 'Phone', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 }
  ];


  useEffect(() => {
    LoadJS()
    retrieveStaffs()
  }, []);

  const closeModalEdit = (data) => {
    resfreshComponent()
    closeButtonEdit.current.click()
  }

  const closeModalAdd = (data) => {
    resfreshComponent()
    closeButtonAdd.current.click()
  }

  const resfreshComponent = () => {
    forceUpdate()
  }

  const retrieveStaffs = () => {
    staffHTTPService.getAllStaff()
      .then(response => {
        setStaffs(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const resfresh = () => {
    retrieveStaffs()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm(User.DELETE_MSG);
    if (r) {
      staffHTTPService.removeStaff(data).then(data => {
        console.log(data)
        resfresh()
      })
    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }

  const handleRowSelection = (e) => {
    if (e.length == 1) {

      setUpdatedItemId(e[0])
      const selectedItem = staffs.find(item => item.id == e[0])
      setUpdatedItem(selectedItem)
      console.log(selectedItem);
    }
    setUpdatedItemIds(e)

  }


  return (
    <div className="content">

      <div className="row">

        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> <i className="nc-icon nc-single-02"></i> Staff</h4>
            </div>
            <div className="card-body">
              <StaffSummary />
              <div className="table">

                <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addStaff" ><i class="fas fa-plus"></i> Create </Button>
                <Button style={{ color: '#ffa400' }} onClick={e => update(e, updatedItemId)} type="button" data-toggle="modal" data-target="#edit"><i class="fas fa-edit"></i> Edit</Button>
                <Button style={{ color: '#ffa400' }} onClick={e => remove(e, updatedItemId)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button>
                <Button type="button" style={{ color: '#ffa400' }} onClick={() => retrieveStaffs()}><i class="fas fa-refresh"></i> Reload</Button>
                <Button style={{ color: '#ffa400' }} data-toggle="modal" data-target="#chart" type="button" ><i class="fas fa-chart-bar"></i>Analytics</Button>

                {loading ?
                  <LinearProgress />
                  : <div style={{ height: 430, width: '100%' }}><DataGrid
                    rows={staffs}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                    onSelectionModelChange={handleRowSelection}
                    components={{ Toolbar: GridToolbar }}
                  /></div>}

                <div class="modal fade" id="addStaff" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddStaff closeModal={closeModalAdd} />
                      </div>
                      <div class="modal-footer">
                        <button ref={closeButtonAdd} onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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
                        <EditStaff staff={updatedItem} closeModal={closeModalEdit} />
                      </div>
                      <div class="modal-footer">
                        <button ref={closeButtonEdit} onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">View</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <ViewStaff staff={updatedItem} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                <StaffPieChart />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

Staff.propTypes = {};

Staff.defaultProps = {};

export default Staff;
