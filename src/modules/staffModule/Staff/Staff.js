
import React, { useEffect, useState } from 'react';
import './Staff.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditStaff from '../EditStaff/EditStaff';
import AddStaff from '../AddStaff/AddStaff';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import staffMessage from '../../../main/messages/staffMessage';
import StaffTestService from '../../../main/mocks/StaffTestService';
import HTTPService from '../../../main/services/HTTPService';

const Staff = () => {

  const [staffs, setStaffs] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveStaffs()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setStaffs(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeOne = (data) => {
    HTTPService.remove(data)
      .then(response => {

      })
      .catch(e => {

      });
  }



  const retrieveStaffs = () => {
    var staffs = StaffTestService.getAll();
    setStaffs(staffs);
  };

  const resfresh = () => {
    retrieveStaffs()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', staffMessage.delete, 'success')
      StaffTestService.remove(data)
      //removeOne(data)
      resfresh()
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
              <div className="table-responsive">
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
                          <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                          <button onClick={e => remove(e, staffs.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                        </td>
                      </tr>
                    )}

                  </tbody>
                  <tfoot class=" text-primary">
                    <tr>
                      <th>Nom</th>
                      <th>Role</th>
                      <th>Date expiration</th>
                      <th>Mobile</th>
                      <th>Statut</th>
                    </tr>
                  </tfoot>
                </table>

                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addStaff"><i class="far fa-plus-square"></i>  Ajouter</button>


                <div class="modal fade" id="addStaff" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddStaff />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

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
                        <EditStaff staff={updatedItem} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

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
