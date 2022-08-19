import React, { useEffect, useRef, useState } from 'react';
import './Member.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditMember from '../EditMember/EditMember';
import AddMember from '../AddMember/AddMember';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import memberMessage from '../../../main/messages/memberMessage';
import MemberTestService from '../../../main/mocks/MemberTestService';
import memberHTTPService from '../../../main/services/memberHTTPService';
import ViewMember from '../ViewMember/ViewMember';

const Member = () => {

  const [members, setMembers] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);


  useEffect(() => {
    LoadJS()
    getAllMember()
  }, []);


  const getAllMember = () => {

    memberHTTPService.getAllMember()
      .then(response => {
        setMembers(response.data);
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
        // showMessage('Confirmation', 'patientMessage.delete', 'success')
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
  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> Members</h4>
            </div>
            <div className="card-body">

              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-globe text-warning"></i>
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Membres</p>
                            <p className="card-title">3</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-money-coins text-success"></i>
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Résérvations</p>
                            <p className="card-title">23</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-vector text-danger"></i>
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Exercices</p>
                            <p className="card-title">23</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-favourite-28 text-primary"></i>
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Activités</p>
                            <p className="card-title">4</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>










              <div className="table">
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addMember"><i class="far fa-plus-square"></i>  Create</button>
                <table className="table">
                  <thead class=" text-primary">
                    <tr> <th>Name</th>
                      <th>Date</th>
                      <th>Member type</th>
                      <th>Coach</th>
                      <th>Actions</th></tr>
                  </thead>
                  <tbody>


                    {members.map(item =>
                      <tr>
                        <td> {item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.telephone}</td>
                        <td><span class="badge badge-success">{item.name}</span></td>
                        <td>
                          <button style={{ margin: "3px" }} onClick={e => updateMemberAction(e, item)} type="button" data-toggle="modal" data-target="#view" className="button-member btn btn-primary btn-sm"><i class="fas fa-eye"></i></button>
                          <button style={{ margin: "3px" }} onClick={e => updateMemberAction(e, item)} type="button" data-toggle="modal" data-target="#edit" className="button-member btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                          <button onClick={e => removeMemberAction(e, item.id)} type="button" className="btn btn-danger btn-sm button-member"><i class="fas fa-trash-alt"></i></button>
                        </td>

                      </tr>
                    )}
                  </tbody>

                </table>




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
                        <button onClick={resfresh} ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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
