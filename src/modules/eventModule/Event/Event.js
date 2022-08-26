
import React, { useEffect, useRef, useState } from 'react';
import './Event.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditEvent from '../EditEvent/EditEvent';
import AddEvent from '../AddEvent/AddEvent';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import eventMessage from '../../../main/messages/eventMessage';
import EventTestService from '../../../main/mocks/EventTestService';
import eventHTTPService from '../../../main/services/eventHTTPService';

const Event = () => {

  const [events, setEvents] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const [value, setValue] = useState(null);
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);

  useEffect(() => {
    LoadJS()
    retrieveEvents()
  }, []);


  const retrieveEvents = () => {
    eventHTTPService.getAllEvent()
      .then(response => {

        setEvents(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeOne = (data) => {
    /*HTTPService.remove(data)
      .then(response => {

      })
      .catch(e => {

      });*/
  }





  const resfresh = () => {
    retrieveEvents()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', eventMessage.delete, 'success')
      eventHTTPService.removeEvent(data).then(data => {
        resfresh()
      })
      //removeOne(data)

    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }

  const closeModalEdit = (data) => {
    //  resfreshComponent()
    closeButtonEdit.current.click()
  }

  const closeModalAdd = (data) => {
    // resfreshComponent()
    closeButtonAdd.current.click()
  }
  const resfreshComponent = () => {
    forceUpdate()
  }


  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> Events</h4>
            </div>
            <div className="card-body">
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addEvent"><i class="far fa-plus-square"></i> Create</button>
              <table className="table">
                <thead class=" text-primary">
                  <tr> <th>Name</th>
                    <th>Date </th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Actions</th></tr>
                </thead>
                <tbody>


                  {events.map(item =>
                    <tr>
                      <td>{item.event_name}</td>
                      <td>{item.event_date}</td>
                      <td>{item.starttime}</td>
                      <td>{item.endtime}</td><td>
                        <button style={{ margin: "3px" }} onClick={e => update(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button onClick={e => remove(e, item.id)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                      </td>
                    </tr>
                  )}

                </tbody>
              </table>



              <div class="modal fade" id="addEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                      <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <AddEvent closeModal={closeModalAdd} />
                    </div>
                    <div class="modal-footer">
                      <button onClick={resfresh} ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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
                      <EditEvent event={updatedItem} closeModal={closeModalEdit} />
                    </div>
                    <div class="modal-footer">
                      <button onClick={resfresh} ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

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
