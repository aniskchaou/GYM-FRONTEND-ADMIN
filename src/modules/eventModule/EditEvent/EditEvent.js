import React from 'react';
import PropTypes from 'prop-types';
import './EditEvent.css';

const EditEvent = () => (
  <div className="EditEvent">
       <form method="post" accept-charset="utf-8" class="validateForm form-horizontal" role="form" id="event"
  action="/dasinfoau/php/gym/gym-reservation/add-reservation">
  <div ><input type="hidden" name="_method" value="POST" /></div>
  <div class="form-group"><label class="control-label col-md-2" for="email">Nom de l'évenement<span class="text-danger">
        *</span></label>
    <div class="col-md-6">
      <div class="input text"><input type="text" name="event_name"
          class="form-control validate[required,custom[onlyLetterSp,maxSize[50]]]" id="" value="" /></div>
    </div>
  </div>
  <div class="form-group"><label class="control-label col-md-2" for="email"> Date<span class="text-danger">
        *</span></label>
    <div class="col-md-6">
      <div class="input text"><input type="text" name="event_date" autocomplete="off"
          class="form-control validate[required] date hasDatepicker" id="dp1609369438332" /></div>
    </div>
  </div>
  <div class="form-group"><label class="control-label col-md-2" for="email">Lieu<span class="text-danger">
        *</span></label>
    <div class="col-md-6 module_padding"><select name="place_id"
        class="form-control events_place_list validate[required]">
        <option value="">Select Event Places</option>
        <option value="1">New Location Address</option>
      </select></div>
    
  </div>
  <div class="form-group"><label class="control-label col-md-2" for="start time">Début<span class="text-danger">
        *</span></label>
    <div class="col-md-6 ">
      <div class="input text"><input type="text" name="starttime" id="time"
          class="form-control validate[required]  text-input" value="" /></div>
    </div>
  </div>
  <div class="form-group"><label class="control-label col-md-2" for="start time">Fin<span class="text-danger">
        *</span></label>
    <div class="col-md-6 ">
      <div class="input text"><input type="text" name="endtime" id="timepicker"
          class="form-control validate[required]  text-input" value="" /></div>
    </div>
  </div><br/><button class="btn btn-flat btn-success col-md-offset-2" name="add_class" type="submit"
    >Sauvegarder</button>
</form>
  </div>
);

EditEvent.propTypes = {};

EditEvent.defaultProps = {};

export default EditEvent;
