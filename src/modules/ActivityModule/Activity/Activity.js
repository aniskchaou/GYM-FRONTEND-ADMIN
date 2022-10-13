
import React, { useEffect, useRef, useState } from 'react';
import './Activity.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditActivity from '../EditActivity/EditActivity';
import AddActivity from '../AddActivity/AddActivity';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import activityHTTPService from '../../../main/services/activityHTTPService';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Button, CircularProgress, LinearProgress, Typography } from '@mui/material';
import activityMessage from '../../../main/messages/activityMessage';
import User from '../../../main/config/user';



const Activity = () => {

  const [activities, setActivities] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const [updatedItemId, setUpdatedItemId] = useState(0);
  const [updatedItemIds, setUpdatedItemIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LoadJS()
    getAllActivities()
  }, []);


  const columns = [
    { field: 'id', headerName: '#', width: 200 },
    { field: 'title', headerName: 'Activity Name', width: 200 },
    { field: 'category', headerName: 'Category', width: 200 },
  ];


  const handleRowSelection = (e) => {
    if (e.length == 1) {
      setUpdatedItemId(e[0])
      const selectedItem = activities.find(item => item.id == e[0])
      setUpdatedItem(selectedItem)
    }
    setUpdatedItemIds(e)
  }

  const getAllActivities = () => {
    setLoading(true)
    activityHTTPService.getAllActivity()
      .then(response => {
        setActivities(response.data);
        setLoading(false)
      })
      .catch(e => {
        showMessage('Error', e, 'warning')
      });
  };


  const resfresh = () => {
    getAllActivities()
    forceUpdate()
  }

  const removeActivityAction = (e, data) => {
    e.preventDefault();
    var confirm = window.confirm(User.DELETE_MSG);
    if (confirm) {
      activityHTTPService.removeActivity(data).then(data => {
        resfresh()
        showMessage('Confirmation', activityMessage.delete, 'success')
      }).catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
    }
  }

  const updateActivityAction = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
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
              <h4 className="card-title"><i class="nc-icon nc-tile-56"></i> Activities</h4>
            </div>
            <div className="card-body">
              <div>
                <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addActivity" ><i class="fas fa-plus"></i> Create </Button>
                <Button style={{ color: '#ffa400' }} onClick={e => updateActivityAction(e, updatedItemId)} type="button" data-toggle="modal" data-target="#editActivity"><i class="fas fa-edit"></i> Edit</Button>
                <Button style={{ color: '#ffa400' }} onClick={e => removeActivityAction(e, updatedItemIds)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button>
                <Button style={{ color: '#ffa400' }} type="button" onClick={() => getAllActivities()}><i class="fas fa-refresh"></i> Reload</Button>
                <br /><br />
                {loading ?
                  <LinearProgress />
                  : <div style={{ height: 400, width: '100%' }}><DataGrid
                    rows={activities}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                    onSelectionModelChange={handleRowSelection}
                    components={{ Toolbar: GridToolbar }}
                  />
                  </div>}

                <div class="modal fade" id="addActivity" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddActivity closeModal={closeModalAdd} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>


                <div class="modal fade" id="editActivity" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <EditActivity activity={updatedItem} closeModal={closeModalEdit} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} type="button" ref={closeButtonEdit} class="btn btn-secondary" data-dismiss="modal">Close</button>

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

Activity.propTypes = {};

Activity.defaultProps = {};

export default Activity;
