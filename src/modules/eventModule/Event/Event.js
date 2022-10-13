
import React, { useEffect, useRef, useState } from 'react';
import './Event.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditEvent from '../EditEvent/EditEvent';
import AddEvent from '../AddEvent/AddEvent';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import eventMessage from '../../../main/messages/eventMessage';
import eventHTTPService from '../../../main/services/eventHTTPService';
import { Button, LinearProgress, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import User from '../../../main/config/user';


const Event = () => {

  const [events, setEvents] = useState([]);
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
    { field: 'event_name', headerName: 'Name', width: 200 },
    { field: 'event_date', headerName: 'Date', width: 200 },
    { field: 'starttime', headerName: 'Start', width: 200 },
    { field: 'endtime', headerName: 'End', width: 200 }
  ];


  useEffect(() => {
    LoadJS()
    retrieveEvents()
  }, []);


  const retrieveEvents = () => {
    setLoading(true)
    eventHTTPService.getAllEvent()
      .then(response => {
        setEvents(response.data);
        setLoading(false)
      })
      .catch(e => {
        console.log(e);
      });
  };

  const resfresh = () => {
    retrieveEvents()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var confirm = window.confirm(User.DELETE_MSG);
    if (confirm) {

      eventHTTPService.removeEvent(data).then(data => {
        resfresh()
        showMessage('Confirmation', eventMessage.delete, 'success')
      })
    }
  }

  const update = (e, data) => {
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
      const selectedItem = events.find(item => item.id == e[0])
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
              <h4 className="card-title"><i class="nc-icon nc-bulb-63"></i> Events</h4>
            </div>
            <div className="card-body">

              <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addEvent" ><i class="fas fa-plus"></i> Create </Button>
              <Button style={{ color: '#ffa400' }} onClick={e => update(e, updatedItemId)} type="button" data-toggle="modal" data-target="#editEvent"><i class="fas fa-edit"></i> Edit</Button>
              <Button style={{ color: '#ffa400' }} onClick={e => remove(e, updatedItemId)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button>
              <Button type="button" style={{ color: '#ffa400' }} onClick={() => retrieveEvents()}><i class="fas fa-refresh"></i> Reload</Button>

              {loading ?
                <LinearProgress />
                : <div style={{ height: 400, width: '100%' }}><DataGrid
                  rows={events}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[6]}
                  checkboxSelection
                  onSelectionModelChange={handleRowSelection}
                  components={{ Toolbar: GridToolbar }}
                /></div>}

              <div class="modal fade" id="addEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                      <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <AddEvent closeModal={closeModalAdd} />
                    </div>
                    <div class="modal-footer">
                      <button onClick={resfresh} ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                    </div>
                  </div>
                </div>
              </div>



              <div class="modal fade" id="editEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                      <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <EditEvent event={updatedItem} closeModal={closeModalEdit} />
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

Event.propTypes = {};

Event.defaultProps = {};

export default Event;
