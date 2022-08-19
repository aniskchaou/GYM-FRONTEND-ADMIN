import React from 'react';
import PropTypes from 'prop-types';
import './ViewMember.css';

const ViewMember = (props) => (
  <div className="ViewMember">
    <div className="ViewTypeSubs">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">First name : {props.member.first_name}</li>
        <li class="list-group-item">Last name : {props.member.last_name}</li>
        <li class="list-group-item">Birth Date  {props.member.birth_date}</li>
        <li class="list-group-item">Groupe : {props.member.groupe}</li>
        <li class="list-group-item">Activity :  {props.member.activity} </li>
        <li class="list-group-item">Address : {props.member.address} </li>
        <li class="list-group-item">Mobile : {props.member.mobile} </li>
        <li class="list-group-item">Weight :   {props.member.weight}</li>
        <li class="list-group-item">Size :   {props.member.size}</li>
        <li class="list-group-item">Satrt date :   {props.member.start_date}</li>
        <li class="list-group-item">End date :   {props.member.end_date}</li>
        <li class="list-group-item">Type :   {props.member.type}</li>
        <li class="list-group-item">Coach :   {props.member.coach}</li>
      </ul>
    </div>
  </div>
);

ViewMember.propTypes = {};

ViewMember.defaultProps = {};

export default ViewMember;
