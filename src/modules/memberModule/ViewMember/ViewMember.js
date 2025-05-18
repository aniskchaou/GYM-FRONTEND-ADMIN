import React from 'react';
import PropTypes from 'prop-types';
import './ViewMember.css';


const ViewMember = (props) => (
  <div class="ViewMember">
  <div id="member-tabs" class="mb-3">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#profile" onclick="showTab(event, 'profile')">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#notes" onclick="showTab(event, 'notes')">Notes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#memberships" onclick="showTab(event, 'memberships')">Memberships</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#payments" onclick="showTab(event, 'payments')">Payments</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#rank" onclick="showTab(event, 'rank')">Rank</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#attendance" onclick="showTab(event, 'attendance')">Attendance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#checkin" onclick="showTab(event, 'checkin')">Check-in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#documents" onclick="showTab(event, 'documents')">Documents</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#messaging" onclick="showTab(event, 'messaging')">Messaging</a>
      </li>
    </ul>

    <div class="tab-content">
      <div id="profile" class="tab-pane active">
        <div class="ViewTypeSubs">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">First name : John</li>
            <li class="list-group-item">Last name : Doe</li>
            <li class="list-group-item">Birth Date : 1990-01-01</li>
            <li class="list-group-item">Groupe : A</li>
            <li class="list-group-item">Activity : Yoga</li>
            <li class="list-group-item">Address : 123 Main St</li>
            <li class="list-group-item">Mobile : 123-456-7890</li>
            <li class="list-group-item">Weight : 70kg</li>
            <li class="list-group-item">Size : 175cm</li>
            <li class="list-group-item">Start date : 2024-01-01</li>
            <li class="list-group-item">End date : 2024-12-31</li>
            <li class="list-group-item">Type : Premium</li>
            <li class="list-group-item">Coach : Jane Smith</li>
            <li class="list-group-item">Check-in code : 1548</li>
          </ul>
        </div>
      </div>
      <div id="notes" class="tab-pane">
        <div>Notes content here...</div>
      </div>
      <div id="memberships" class="tab-pane">
        <div>Memberships content here...</div>
      </div>
      <div id="payments" class="tab-pane">
        <div>Payments content here...</div>
      </div>
      <div id="rank" class="tab-pane">
        <div>Rank content here...</div>
      </div>
      <div id="attendance" class="tab-pane">
        <div>Attendance content here...</div>
      </div>
      <div id="checkin" class="tab-pane">
        <div>Check-in content here...</div>
      </div>
      <div id="documents" class="tab-pane">
        <div>Documents content here...</div>
      </div>
      <div id="messaging" class="tab-pane">
        <div>Messaging content here...</div>
      </div>
    </div>
  </div>
</div>
);

ViewMember.propTypes = {};

ViewMember.defaultProps = {};

export default ViewMember;
