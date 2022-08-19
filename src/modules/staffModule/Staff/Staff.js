
import React, { useEffect, useRef, useState } from 'react';
import './Staff.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditStaff from '../EditStaff/EditStaff';
import AddStaff from '../AddStaff/AddStaff';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import staffMessage from '../../../main/messages/staffMessage';
import StaffTestService from '../../../main/mocks/StaffTestService';
import HTTPService from '../../../main/services/HTTPService';
import staffHTTPService from '../../../main/services/staffHTTPService';
import ViewStaff from '../ViewStaff/ViewStaff';

const Staff = () => {

  const [staffs, setStaffs] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);

  useEffect(() => {
    LoadJS()
    retrieveStaffs()
  }, []);



  const removeOne = (data) => {
    HTTPService.remove(data)
      .then(response => {

      })
      .catch(e => {

      });
  }

  const closeModalEdit = (data) => {
    resfreshComponent()
    closeButtonEdit.current.click()
  }

  const closeModalAdd = (data) => {
    resfreshComponent()
    closeButtonAdd.current.click()
  }

  const resfreshComponent = () => {
    //getAllPatient()
    forceUpdate()
  }

  const retrieveStaffs = () => {
    staffHTTPService.getAllStaff()
      .then(response => {
        setStaffs(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const resfresh = () => {
    retrieveStaffs()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {

      // StaffTestService.remove(data)
      staffHTTPService.removeStaff(data).then(data => {
        console.log(data)
        resfresh()
        showMessage('Confirmation', staffMessage.delete, 'success')
      })
      //removeOne(data)

    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
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
              <div className="table">
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addStaff"><i class="far fa-plus-square"></i>  Create</button>
                <table className="table">
                  <thead class=" text-primary">
                    <tr>
                      <th>Nom</th>
                      <th>Role</th>
                      <th>Date expiration</th>
                      <th>Mobile</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>


                    {staffs.map(item =>
                      <tr>
                        <td>{item.first_name}</td>
                        <td>{item.role}</td>
                        <td><span class="badge badge-primary">{item.date}</span></td>
                        <td>{item.mobile}</td>
                        <td>
                          <button style={{ margin: "3px" }} onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#view" className="button-member btn btn-primary btn-sm"><i class="fas fa-eye"></i></button>
                          <button style={{ margin: "3px" }} onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                          <button onClick={e => remove(e, item.id)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                        </td>
                      </tr>
                    )}

                  </tbody>

                </table>




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
