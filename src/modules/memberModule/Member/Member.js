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
import MemberSummary from '../MemberSummary/MemberSummary';
import MemberBarChart from '../MemberBarChart/MemberBarChart';
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';
import User from '../../../main/config/user';

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
  { field: 'id', headerName: '#', width: 100 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'dateOfBirth', headerName: 'Birth Date', width: 150 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'membership', headerName: 'Membership', width: 200 },
  { field: 'preferences', headerName: 'Preferences', width: 200 },
  { field: 'wearableDevice', headerName: 'Device', width: 200 },
  { field: 'workoutHistory', headerName: 'Workout History', width: 250 },
  { field: 'aiRecommendations', headerName: 'AI Recommendations', width: 250 }
];


  useEffect(() => {
    //LoadJS()
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
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };


  const resfresh = () => {
    getAllMember()
    forceUpdate()
  }

  const removeMemberAction = (e, data) => {
    e.preventDefault();
    var r = window.confirm(User.DELETE_MSG);
    if (r) {
      memberHTTPService.removeMember(data).then(data => {
        showMessage('Confirmation', memberMessage.delete, 'success')
        resfresh()
      }).catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
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
                <MemberSummary />

                <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addMember" ><i class="fas fa-plus"></i> Create </Button>
                <Button style={{ color: '#ffa400' }} onClick={e => updateMemberAction(e, updatedItemId)} type="button" data-toggle="modal" data-target="#edit"><i class="fas fa-edit"></i> Edit</Button>
                <Button style={{ color: '#ffa400' }} onClick={e => removeMemberAction(e, updatedItemId)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button>
                <Button type="button" style={{ color: '#ffa400' }} onClick={() => getAllMember()}><i class="fas fa-refresh"></i> Reload</Button>
                <Button style={{ color: '#ffa400' }} data-toggle="modal" data-target="#chart" type="button" ><i class="fas fa-chart-bar"></i> Analytics</Button>
                <MemberBarChart />
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
