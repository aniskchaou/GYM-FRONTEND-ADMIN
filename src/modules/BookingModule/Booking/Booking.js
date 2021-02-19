
import React, { useEffect, useState } from 'react';
import './Booking.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditBooking from '../EditBooking/EditBooking';
import AddBooking from '../AddBooking/AddBooking';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import bookingMessage from '../../../main/messages/bookingMessage';
import BookingTestService from '../../../main/mocks/BookingTestService';
import HTTPService from '../../../main/services/HTTPService';

const Booking = () => {

  const [bookings, setBookings] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrieveBookings()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setBookings(response.data);
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



  const retrieveBookings = () => {
    var bookings = BookingTestService.getAll();
    setBookings(bookings);
  };

  const resfresh = () => {
    retrieveBookings()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', bookingMessage.delete, 'success')
      BookingTestService.remove(data)
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
              <h4 className="card-title"> Réservations</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">

                </table>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addBooking"><i class="far fa-plus-square"></i>  Ajouter</button>


                <div class="modal fade" id="addBooking" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddBooking />
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

Booking.propTypes = {};

Booking.defaultProps = {};

export default Booking;
