import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Groupe.css';
import AddGroupe from './../AddGroupe/AddGroupe';
import { LoadJS } from './../../../libraries/datatables/datatables';
import EditGroupe from './../EditGroupe/EditGroupe';
import HTTPService from '../../../main/services/HTTPService';
import GroupeTestService from '../../../main/mocks/GroupeTestService';
import showMessage from '../../../libraries/messages/messages';
import groupeMessage from '../../../main/messages/groupeMessage';
import useForceUpdate from 'use-force-update';


const Groupe = () => {

  const [groupes, setGroupes] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveGroupes()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setGroupes(response.data);
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



  const retrieveGroupes = () => {
    var groupes = GroupeTestService.getAll();
    setGroupes(groupes);
  };

  const resfresh = () => {
    retrieveGroupes()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', groupeMessage.delete, 'success')
      GroupeTestService.remove(data)
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
              <h4 className="card-title"> <i className="nc-icon nc-badge"></i> Groupes</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead class=" text-primary">
                    <tr> <th>Nom</th>
                      <th>Nombre de membres </th>
                      <th>Actions</th></tr>

                  </thead>
                  <tbody>

                    {groupes.map(item =>
                      <tr>
                        <td>{item.groupe_name}</td>
                        <td>4</td>
                        <td>
                          <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                          <button onClick={e => remove(e, groupes.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                        </td>

                      </tr>
                    )}

                  </tbody>
                  <tfoot class=" text-primary">
                    <tr> <th>Nom</th>
                      <th>Nombre de membres </th>
                      <th>Actions</th></tr>

                  </tfoot>
                </table>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addGroupe"><i class="far fa-plus-square"></i>  Ajouter</button>


                <div class="modal fade" id="addGroupe" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddGroupe />
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
                        <EditGroupe groupe={updatedItem} />
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

Groupe.propTypes = {};

Groupe.defaultProps = {};

export default Groupe;
