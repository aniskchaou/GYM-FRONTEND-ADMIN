import React, { useEffect, useRef, useState } from 'react';
import './Groupe.css';
import AddGroupe from './../AddGroupe/AddGroupe';
import { LoadJS } from './../../../libraries/datatables/datatables';
import EditGroupe from './../EditGroupe/EditGroupe';
import groupeHTTPService from '../../../main/services/groupeHTTPService';
import showMessage from '../../../libraries/messages/messages';
import useForceUpdate from 'use-force-update';
import { Button, LinearProgress, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import User from '../../../main/config/user';
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';

const Groupe = () => {

  const [groupes, setGroupes] = useState([]);
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
    { field: 'name', headerName: 'Groupe Name', width: 200 }
  ];


  useEffect(() => {
    LoadJS()
    getAllGroupes()
  }, []);


  const getAllGroupes = () => {
    setLoading(true)
    groupeHTTPService.getAllGroupes()
      .then(response => {
        setGroupes(response.data);
        setLoading(false)
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };


  const resfresh = () => {
    getAllGroupes()
    forceUpdate()
  }

  const removeGroupeAction = (e, data) => {
    e.preventDefault();
    var confirm = window.confirm(User.DELETE_MSG);
    if (confirm) {
      groupeHTTPService.removeGroupe(data).then(data => {
        resfresh()
        showMessage('Confirmation', 'patientMessage.delete', 'success')
      }).catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
    }
  }

  const updateGroupeAction = (e, data) => {
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
      const selectedItem = groupes.find(item => item.id == e[0])
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
              <h4 className="card-title"> <i className="nc-icon nc-badge"></i> Groups</h4>
            </div>
            <div className="card-body">
              <div>
                <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addGroupe" ><i class="fas fa-plus"></i> Create </Button>
                <Button style={{ color: '#ffa400' }} onClick={e => updateGroupeAction(e, updatedItemId)} type="button" data-toggle="modal" data-target="#edit"><i class="fas fa-edit"></i> Edit</Button>
                <Button style={{ color: '#ffa400' }} onClick={e => removeGroupeAction(e, updatedItemId)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button>
                <Button type="button" style={{ color: '#ffa400' }} onClick={() => getAllGroupes()}><i class="fas fa-refresh"></i> Reload</Button>


                {loading ?
                  <LinearProgress />
                  : <div style={{ height: 430, width: '100%' }}><DataGrid
                    rows={groupes}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                    onSelectionModelChange={handleRowSelection}
                    components={{ Toolbar: GridToolbar }}
                  /></div>}
                <div class="modal fade" id="addGroupe" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddGroupe closeModal={closeModalAdd} />
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
                        <EditGroupe groupe={updatedItem} closeModal={closeModalEdit} />
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

Groupe.propTypes = {};

Groupe.defaultProps = {};

export default Groupe;
