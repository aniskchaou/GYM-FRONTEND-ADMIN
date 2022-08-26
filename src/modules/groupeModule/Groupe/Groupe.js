import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Groupe.css';
import AddGroupe from './../AddGroupe/AddGroupe';
import { LoadJS } from './../../../libraries/datatables/datatables';
import EditGroupe from './../EditGroupe/EditGroupe';
import groupeHTTPService from '../../../main/services/groupeHTTPService';
import GroupeTestService from '../../../main/mocks/GroupeTestService';
import showMessage from '../../../libraries/messages/messages';
import groupeMessage from '../../../main/messages/groupeMessage';
import useForceUpdate from 'use-force-update';


const Groupe = () => {

  const [groupes, setGroupes] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    LoadJS()
    getAllGroupes()
  }, []);


  const getAllGroupes = () => {
    setLoading(true)
    groupeHTTPService.getAllGroupe()
      .then(response => {
        setGroupes(response.data);
        setLoading(false)
      })
      .catch(e => {
        showMessage('Confirmation', e, 'info')
      });
  };


  const resfresh = () => {
    getAllGroupes()
    forceUpdate()
  }

  const removeGroupeAction = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', 'patientMessage.delete', 'success')
      groupeHTTPService.removeGroupe(data).then(data => {
        resfresh()
      }).catch(e => {
        showMessage('Confirmation', e, 'warning')
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

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> <i className="nc-icon nc-badge"></i> Groups</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addGroupe"><i class="far fa-plus-square"></i>  Create</button>

                <table className="table">
                  <thead class=" text-primary">
                    <tr> <th>Groupe Name</th>
                      <th>Actions</th></tr>
                  </thead>
                  <tbody>
                    {loading ? <div class="d-flex justify-content-center" >
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div></div> : groupes.map(item =>
                        <tr>
                          <td>{item.name}</td>
                          <td>
                            <button style={{ margin: "3px" }} onClick={e => updateGroupeAction(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                            <button onClick={e => removeGroupeAction(e, item.id)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                          </td>

                        </tr>
                      )}

                  </tbody>
                </table>


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
