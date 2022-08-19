import React from 'react';
import PropTypes from 'prop-types';
import './ViewTypeSubs.css';
import typeSubMessage from '../../../main/messages/typeSubMessage ';

const ViewTypeSubs = (props) => (
  <div className="ViewTypeSubs">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Category : {props.typeSub.category}</li>
      <li class="list-group-item">Period : {props.typeSub.period} Weeks</li>
      <li class="list-group-item">Amount :  {props.typeSub.amount} $</li>
      <li class="list-group-item">Description : {props.typeSub.description} </li>
      <li class="list-group-item">Fee : {props.typeSub.fee} </li>
      <li class="list-group-item">Plan :   {props.typeSub.time_payment}</li>
    </ul>
  </div>
);

ViewTypeSubs.propTypes = {};

ViewTypeSubs.defaultProps = {};

export default ViewTypeSubs;
