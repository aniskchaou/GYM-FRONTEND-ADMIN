
import React, { useEffect, useRef, useState } from 'react';
import './TypeSubs.css';
import { LoadJS } from '../../../libraries/datatables/datatables';

import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import typeSubMessage from '../../../main/messages/typeSubMessage ';
import HTTPService from '../../../main/services/HTTPService';
import EditTypeSubs from '../EditTypeSubs/EditTypeSubs';
import AddTypeSubs from '../AddTypeSubs/AddTypeSubs';
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService'
import ViewTypeSubs from '../ViewTypeSubs/ViewTypeSubs';
import { NavLink, useHistory } from 'react-router-dom';
import memberHTTPService from '../../../main/services/memberHTTPService';
import ReactTooltip from 'react-tooltip';

const TypeSubs = () => {

  const [typeSubs, setTypeSubs] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  let history = useHistory();
  useEffect(() => {
    LoadJS()
    getTypeSubs()
    getMembers()
  }, []);

  const getMemberById = (id) => {
    return members.filter(item => item.id == id)[0]?.name

  }


  const getTypeSubs = () => {
    setLoading(true)
    typeSubsHTTPService.getAllTypeSubs().then(data => {
      setTypeSubs(data.data);
      console.log(data.data)
      forceUpdate()
      setLoading(false)
    })
  };

  const resfresh = () => {
    forceUpdate()
    getTypeSubs()
  }

  const remove = (e, data) => {
    e.preventDefault();

    var response = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (response) {
      typeSubsHTTPService.removeTypeSubs(data).then(data => {
        showMessage('Confirmation', typeSubMessage.delete, 'success')
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
    setUpdatedItem(data)
    // resfresh()
  }

  const closeModalEdit = (data) => {
    //resfresh()
    closeButtonEdit.current.click()
    resfresh()

  }

  const closeModalAdd = (data) => {
    //resfresh()
    closeButtonAdd.current.click()
    resfresh()
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
              <div className="table">

                <NavLink to="add-type-subs" type="button" class="btn btn-success" data-toggle="modal" data-target="#addTypeSubs"><i class="far fa-plus-square"></i>  Create</NavLink>

                <table className="table">
                  <thead class=" text-primary"><tr>
                    <th>Payment plan</th>
                    <th>Period </th>
                    <th>Fee</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr></thead>
                  <tbody>

                    <ReactTooltip />
                    {loading ? <div class="d-flex justify-content-center" >
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div></div> :
                      typeSubs.map(item =>
                        <tr>
                          <td >{item.time_payment}</td>
                          <td><span class="badge badge-success">{item.period} Months</span></td>
                          <td>{item.fee} $</td>
                          <td><span class="badge badge-primary">{item.amount} $</span></td>
                          <td>
                            <button data-tip="View" style={{ margin: "3px" }} onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#view" className="button-member btn btn-primary btn-sm"><i class="fas fa-eye" ></i></button>
                            <button style={{ margin: "3px" }} onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" className="btn btn-warning btn-sm"><i class="fas fa-edit" data-tip="Edit" ></i></button>
                            <button onClick={e => remove(e, item.id)} type="button" className="btn btn-danger btn-sm"><i class="fas fa-trash-alt" data-tip="Delete"></i></button>
                          </td>
                        </tr>
                      )}


                  </tbody>

                </table>



                <div class="modal fade" id="addTypeSubs" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
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
                        <EditTypeSubs typeSub={updatedItem} closeModal={closeModalEdit} />
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
                        <ViewTypeSubs typeSub={updatedItem} />
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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

TypeSubs.propTypes = {};

TypeSubs.defaultProps = {};

export default TypeSubs;
