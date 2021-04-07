
import React, { useEffect, useState } from 'react';
import './Event.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditEvent from '../EditEvent/EditEvent';
import AddEvent from '../AddEvent/AddEvent';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import eventMessage from '../../../main/messages/eventMessage';
import EventTestService from '../../../main/mocks/EventTestService';
import HTTPService from '../../../main/services/HTTPService';

const Event = () => {

  const [events, setEvents] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveEvents()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setEvents(response.data);
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



  const retrieveEvents = () => {
    var events = EventTestService.getAll();
    setEvents(events);
  };

  const resfresh = () => {
    retrieveEvents()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', eventMessage.delete, 'success')
      EventTestService.remove(data)
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
              <h4 className="card-title"> Evenement</h4>
            </div>
            <div className="card-body">

              <table className="table">
                <thead class=" text-primary">
                  <tr> <th>Nom de l'evenement</th>
                    <th>Date evenement</th>
                    <th>Endroit</th>
                    <th>Heure de début</th>
                    <th>Heure de fin</th>
                    <th>Actions</th></tr>
                </thead>
                <tbody>


                  {events.map(item =>
                    <tr>
                      <td>{item.event_name}</td>
                      <td>{item.event_date}</td>
                      <td>{item.place_id}</td>
                      <td>{item.starttime}</td>
                      <td>{item.endtime}</td><td>
                        <button onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button onClick={e => remove(e, events.indexOf(item))} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                      </td>
                    </tr>
                  )}

                </tbody>
                <tfoot class=" text-primary">
                  <tr> <th>Nom de l'evenement</th>
                    <th>Date evenement</th>
                    <th>Endroit</th>
                    <th>Heure de début</th>
                    <th>Heure de fin</th>
                    <th>Actions</th></tr>
                </tfoot>
              </table>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addEvent"><i class="far fa-plus-square"></i></button>


              <div class="modal fade" id="addEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                      <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <AddEvent />
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
                      <EditEvent event={updatedItem} />
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
  )
};

Event.propTypes = {};

Event.defaultProps = {};

export default Event;
