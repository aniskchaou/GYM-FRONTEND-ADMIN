
import React, { useEffect, useState } from 'react';
import './Activity.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditActivity from '../EditActivity/EditActivity';
import AddActivity from '../AddActivity/AddActivity';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import activityMessage from '../../../main/messages/activityMessage';
import ActivityTestService from '../../../main/mocks/ActivityTestService';
import HTTPService from '../../../main/services/HTTPService';



const deleteTask = () => {
  return window.confirm("Êtes-vous sûr de vouloir supprimer cette tache ?")
}
const Activity = () => {

  const [activitys, setActivitys] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveActivitys()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setActivitys(response.data);
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



  const retrieveActivitys = () => {
    var activitys = ActivityTestService.getAll();
    setActivitys(activitys);
  };

  const resfresh = () => {
    retrieveActivitys()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', activityMessage.delete, 'success')
      ActivityTestService.remove(data)
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
              <h4 className="card-title"> activité</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead class=" text-primary">
                    <tr>
                      <th>Nom de l'activité</th>
                      <th>Categorie</th>
                      <th>Formateur</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                    {activitys.map(item =>
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.member}</td>
                        <td>
                          <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                          <button onClick={e => remove(e, activitys.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                        </td>
                      </tr>

                    )}

                    <tr>
                      <td>musculation</td>
                      <td>sport</td>
                      <td>Audric Renard</td>
                      <td>
                        <button type="button" data-toggle="modal" data-target="#editActivity" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>
                    </tr>

                    <tr>
                      <td>dance</td>
                      <td>sport</td>
                      <td>Virginie Brunault</td>
                      <td>
                        <button type="button" data-toggle="modal" data-target="#editActivity" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>
                    </tr>

                  </tbody>
                  <tfoot class=" text-primary">
                    <tr>
                      <th>Nom de l'activité</th>
                      <th>Categorie</th>
                      <th>Formateur</th>
                      <th>Actions</th>
                    </tr>
                  </tfoot>
                </table>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addActivity"><i class="far fa-plus-square"></i>  Ajouter</button>


                <div class="modal fade" id="addActivity" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddActivity />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

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
                        <EditActivity activity={updatedItem} />
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

Activity.propTypes = {};

Activity.defaultProps = {};

export default Activity;
