import React, { useEffect, useState } from 'react';
import './Member.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditMember from '../EditMember/EditMember';
import AddMember from '../AddMember/AddMember';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import memberMessage from '../../../main/messages/memberMessage';
import MemberTestService from '../../../main/mocks/MemberTestService';
import HTTPService from '../../../main/services/HTTPService';

const Member = () => {

  const [members, setMembers] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveMembers()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setMembers(response.data);
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



  const retrieveMembers = () => {
    var members = MemberTestService.getAll();
    setMembers(members);
  };

  const resfresh = () => {
    retrieveMembers()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', memberMessage.delete, 'success')
      MemberTestService.remove(data)
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
              <h4 className="card-title"> Membres</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead class=" text-primary">
                    <tr> <th>Nom membre</th>
                      <th>Date inscription</th>
                      <th>Date expiration</th>
                      <th>Type de membre</th>
                      <th>Statut</th>
                      <th>Actions</th></tr>
                  </thead>
                  <tbody>


                    {members.map(item =>

                      <tr>
                        <td> {item.first_name}</td>
                        <td>{item.start_date}</td>
                        <td>{item.end_date}</td>
                        <td>{item.type}</td>
                        <td class="badge badge-success">Active</td>
                        <td>
                          <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                          <button onClick={e => remove(e, members.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                        </td>

                      </tr>




                    )}







                    <tr>
                      <td>  Marshall Brodeur</td>
                      <td>13/01/2020</td>
                      <td>13/06/2021</td>
                      <td>normal</td>
                      <td class="badge badge-success">Active</td>
                      <td>
                        <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>

                    </tr>

                    <tr>
                      <td>  Musette Gervais</td>
                      <td>05/08/2020</td>
                      <td>05/08/2021</td>
                      <td>normal</td>
                      <td class="badge badge-success">Active</td>
                      <td>
                        <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>

                    </tr>

                    <tr>
                      <td> Christophe Marceau</td>
                      <td>03/03/2020</td>
                      <td>03/12/2020</td>
                      <td>normal</td>
                      <td class="badge badge-danger">Inactive</td>
                      <td>
                        <button data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>

                    </tr>









                  </tbody>
                  <tfoot class=" text-primary">
                    <tr> <th>Nom membre</th>
                      <th>Date inscription</th>
                      <th>Date expiration</th>
                      <th>Type de membre</th>
                      <th>Statut</th>
                      <th>Actions</th></tr>
                  </tfoot>
                </table>

                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addMember"><i class="far fa-plus-square"></i>  Ajouter</button>


                <div class="modal fade" id="addMember" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddMember />
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
                        <EditMember member={updatedItem} />
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

Member.propTypes = {};

Member.defaultProps = {};

export default Member;
