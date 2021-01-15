import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Booking.css';
import AddBooking from '../../AddBooking/AddBooking';
import { LoadJS } from '../../init';

const Booking = () => {
  
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
    console.log('hello')
  }, []);
  
  return(
  <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title"> Cours</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      
                    </table>
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addBooking">Ajouter</button>


<div class="modal fade" id="addBooking" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <AddBooking/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
)};

Booking.propTypes = {};

Booking.defaultProps = {};

export default Booking;
