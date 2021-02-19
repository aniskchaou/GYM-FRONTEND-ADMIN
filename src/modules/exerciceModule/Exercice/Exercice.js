
import React, { useEffect, useState } from 'react';
import './Exercice.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditExercice from '../EditExercice/EditExercice';
import AddExercice from '../AddExercice/AddExercice';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import exerciceMessage from '../../../main/messages/exerciceMessage';
import ExerciceTestService from '../../../main/mocks/ExerciceTestService';
import HTTPService from '../../../main/services/HTTPService';

const Exercice = () => {

  const [exercices, setExercices] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveExercices()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setExercices(response.data);
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



  const retrieveExercices = () => {
    var exercices = ExerciceTestService.getAll();
    setExercices(exercices);
  };

  const resfresh = () => {
    retrieveExercices()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', exerciceMessage.delete, 'success')
      ExerciceTestService.remove(data)
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
              <h4 className="card-title"> Entrainement</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead class=" text-primary">
                    <tr> <th>Nom de produit</th>
                      <th>Prix de produit</th>
                      <th>Quantité</th>
                      <th>Actions</th></tr>

                  </thead>
                  <tbody>
                    <tr>
                      <td>vitamine</td>
                      <td>66</td>
                      <td>6</td>
                      <td>
                        <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addExercice"><i class="far fa-plus-square"></i>  Ajouter</button>


                <div class="modal fade" id="addExercice" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddExercice />
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
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <EditExercice exercice={updatedItem} />
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

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

Exercice.propTypes = {};

Exercice.defaultProps = {};

export default Exercice;
