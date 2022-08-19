
import React, { useEffect, useRef, useState } from 'react';
import './Activity.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditActivity from '../EditActivity/EditActivity';
import AddActivity from '../AddActivity/AddActivity';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import activityMessage from '../../../main/messages/activityMessage';
import ActivityTestService from '../../../main/mocks/ActivityTestService';
import HTTPService from '../../../main/services/HTTPService';
import activityHTTPService from '../../../main/services/activityHTTPService';



const deleteTask = () => {
  return window.confirm("Êtes-vous sûr de vouloir supprimer cette tache ?")
}
const Activity = () => {

  const [activities, setActivities] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);


  useEffect(() => {
    LoadJS()
    getAllPatient()
  }, []);


  const getAllPatient = () => {

    activityHTTPService.getAllActivity()
      .then(response => {
        setActivities(response.data);
        forceUpdate()
      })
      .catch(e => {
        showMessage('Confirmation', e, 'info')
      });
  };


  const resfresh = () => {
    getAllPatient()
    forceUpdate()
  }

  const removeActivityAction = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', 'patientMessage.delete', 'success')
      activityHTTPService.removeActivity(data).then(data => {
        resfresh()
      }).catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
    }
  }

  const updateActivityAction = (e, data) => {
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
              <h4 className="card-title"> Activities</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addActivity"><i class="far fa-plus-square"></i>  Create</button>
                <table className="table">
                  <thead class=" text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Coach</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                    {activities.map(item =>
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.member}</td>
                        <td>

                          <button style={{ margin: "3px" }} onClick={e => updateActivityAction(e, item)} type="button" data-toggle="modal" data-target="#editActivity" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                          <button onClick={e => removeActivityAction(e, item.id)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                        </td>
                      </tr>

                    )}
                  </tbody>

                </table>



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
                        <button onClick={resfresh} ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

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
                        <button onClick={resfresh} type="button" ref={closeButtonEdit} class="btn btn-secondary" data-dismiss="modal">Fermer</button>

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
