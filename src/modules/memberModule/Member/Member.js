import React, { useEffect, useRef, useState } from 'react';
import './Member.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditMember from '../EditMember/EditMember';
import AddMember from '../AddMember/AddMember';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import memberMessage from '../../../main/messages/memberMessage';
import memberHTTPService from '../../../main/services/memberHTTPService';
import ViewMember from '../ViewMember/ViewMember';
import { Button, LinearProgress, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Member = () => {

  const [members, setMembers] = useState([]);
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
    { field: 'birth_date', headerName: 'Birth Date', width: 200 },
    { field: 'activity', headerName: 'Activity', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'weight', headerName: 'Weight', width: 200 },
    { field: 'size', headerName: 'Size', width: 200 },
    { field: 'start_date', headerName: 'Start', width: 200 },
    { field: 'end_date', headerName: 'End', width: 200 },
    { field: 'type', headerName: 'Type', width: 200 },
    { field: 'groupe', headerName: 'Group', width: 200 },
    { field: 'coach', headerName: 'Coach', width: 200 }
  ];

  useEffect(() => {
    LoadJS()
    getAllMember()
  }, []);


  const getAllMember = () => {
    memberHTTPService.getAllMember()
      .then(response => {
        setMembers(response.data);
        console.log(response.data)
        forceUpdate()
      })
      .catch(e => {
        showMessage('Confirmation', e, 'info')
      });
  };


  const resfresh = () => {
    getAllMember()
    forceUpdate()
  }

  const removeMemberAction = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      memberHTTPService.removeMember(data).then(data => {
        showMessage('Confirmation', memberMessage.delete, 'success')
        resfresh()
      }).catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
    }
  }

  const updateMemberAction = (e, data) => {
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
      const selectedItem = members.find(item => item.id == e[0])
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
              <h4 className="card-title"><i class="nc-icon nc-single-02"></i> Members</h4>
            </div>
            <div className="card-body">
              <div className="table">

                <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addMember" ><i class="fas fa-plus"></i> Create </Button>
                <Button style={{ color: '#ffa400' }} onClick={e => updateMemberAction(e, updatedItemId)} type="button" data-toggle="modal" data-target="#edit"><i class="fas fa-edit"></i> Edit</Button>
                <Button style={{ color: '#ffa400' }} onClick={e => removeMemberAction(e, updatedItemId)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button>
                <Button type="button" style={{ color: '#ffa400' }} onClick={() => getAllMember()}><i class="fas fa-refresh"></i> Reload</Button>

                {loading ?
                  <LinearProgress />
                  : <div style={{ height: 430, width: '100%' }}><DataGrid
                    rows={members}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                    onSelectionModelChange={handleRowSelection}
                    components={{ Toolbar: GridToolbar }}
                  /></div>}
                <div class="modal fade" id="addMember" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddMember closeModal={closeModalAdd} />
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
                        <EditMember member={updatedItem} closeModal={closeModalEdit} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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
                        <ViewMember member={updatedItem} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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

Member.propTypes = {};

Member.defaultProps = {};

export default Member;
