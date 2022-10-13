import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import User from '../../../main/config/user';
import Editprofile from '../Editprofile/Editprofile'
import userHTTPService from '../../../main/services/userHTTPService';

const Profile = () => {

  const [updatedItem, setUpdatedItem] = useState({});
  const closeButtonEdit = useRef(null);


  const editPtofile = () => {
    setUpdatedItem(User.USER_DETAIL)
  }


  const closeModalEdit = (data) => {
    closeButtonEdit.current.click()
    userHTTPService.getUser(User.USER_DETAIL.id).then(data => {
      setUpdatedItem(data.data)
      User.USER_DETAIL = data.data
    })
  }

  return (
    <div className="col-md-12">
      <div >

        <div className="card-body">
          <div >

            <div class="card profile-card-2">
              <div class="card-img-block" id="backgound-profile">

              </div>
              <div class="card-body pt-5">

                <img src="images/admin.jpg" alt="profile-image" class="profile" />
                <h5 class="card-title">Full Name</h5>
                <p class="card-text">{User.USER_DETAIL.name}</p>

                <h5 class="card-title">Date of birth</h5>
                <p class="card-text">{User.USER_DETAIL.birthday}</p>

                <h5 class="card-title">Email</h5>
                <p class="card-text">{User.USER_DETAIL.email}</p>

                <h5 class="card-title">Telephone</h5>
                <p class="card-text">{User.USER_DETAIL.telephone}.</p>

                <h5 class="card-title">Address</h5>
                <p class="card-text">{User.USER_DETAIL.address}.</p>

                <h5 class="card-title">Role</h5>
                <p class="card-text">{User.USER_DETAIL.role}</p>

                <div class="icon-block">
                  <button type="button" onClick={editPtofile} data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-user-edit"></i> Edit</button>

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
                        <Editprofile user={updatedItem} closeModal={closeModalEdit} />
                      </div>
                      <div class="modal-footer">
                        <button ref={closeButtonEdit} class="btn btn-secondary" data-dismiss="modal">Close</button>

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

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
