import React from 'react';
import PropTypes from 'prop-types';
import './ViewStaff.css';

const ViewStaff = (props) => (
  <div className="ViewStaff">
    <div className="ViewTypeSubs">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">First Name : {props.staff.first_name}</li>
        <li class="list-group-item">Last Name : {props.staff.last_name}</li>
        <li class="list-group-item">Date of birth  {props.staff.date}</li>
        <li class="list-group-item">Role : {props.staff.role}</li>
        <li class="list-group-item">Mobile :  {props.staff.mobile} </li>
        <li class="list-group-item">Address : {props.staff.address} </li>
        <li class="list-group-item">Email : {props.staff.email} </li>
      </ul>
    </div>
  </div>
);

ViewStaff.propTypes = {};

ViewStaff.defaultProps = {};

export default ViewStaff;
