import React from 'react';
import PropTypes from 'prop-types';
import './AddEvent.css';

const AddEvent = () => (
  <div className="AddEvent">
    <form method="post" accept-charset="utf-8" class="validateForm form-horizontal" role="form" id="event"
  action="/dasinfoau/php/gym/gym-reservation/add-reservation">
  <div ><input type="hidden" name="_method" value="POST" /></div>
  <div class="form-group"><label class="control-label col-md-2" for="email">Event Name<span class="text-danger">
        *</span></label>
    <div class="col-md-6">
      <div class="input text"><input type="text" name="event_name"
          class="form-control validate[required,custom[onlyLetterSp,maxSize[50]]]" id="" value="" /></div>
    </div>
  </div>
  <div class="form-group"><label class="control-label col-md-2" for="email">Event Date<span class="text-danger">
        *</span></label>
    <div class="col-md-6">
      <div class="input text"><input type="text" name="event_date" autocomplete="off"
          class="form-control validate[required] date hasDatepicker" id="dp1609369438332" /></div>
    </div>
  </div>
  <div class="form-group"><label class="control-label col-md-2" for="email">Event Place<span class="text-danger">
        *</span></label>
    <div class="col-md-6 module_padding"><select name="place_id"
        class="form-control events_place_list validate[required]">
        <option value="">Select Event Places</option>
        <option value="1">New Location Address</option>
      </select></div>
    <div class="col-md-2"><a href="javascript:void(0)" data-url="/dasinfoau/php/gym/GymAjax/EventPlaceList"
        id="eventplace_list" class="btn btn-flat btn-default">Add or Remove</a></div>
  </div>
  <div class="form-group"><label class="control-label col-md-2" for="start time">Start Time<span class="text-danger">
        *</span></label>
    <div class="col-md-6 ">
      <div class="input text"><input type="text" name="starttime" id="time"
          class="form-control validate[required]  text-input" value="" /></div>
    </div>
  </div>
  <div class="form-group"><label class="control-label col-md-2" for="start time">End Time<span class="text-danger">
        *</span></label>
    <div class="col-md-6 ">
      <div class="input text"><input type="text" name="endtime" id="timepicker"
          class="form-control validate[required]  text-input" value="" /></div>
    </div>
  </div><br/><button class="btn btn-flat btn-success col-md-offset-2" name="add_class" type="submit"
    >Save Class</button>
</form>
  </div>
);

AddEvent.propTypes = {};

AddEvent.defaultProps = {};

export default AddEvent;
