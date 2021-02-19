import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditEvent.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import eventMessage from '../../../main/messages/eventMessage'
import eventValidation from '../../../main/validations/eventValidation'
import EventTestService from '../../../main/mocks/EventTestService';


const EditEvent = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [event, setEvent] = useState(props.event);

  useEffect(() => {
    setEvent(props.event)
  }, [props.event]);


  const onSubmit = (data) => {

    EventTestService.update(props.event, data)
    showMessage('Confirmation', eventMessage.edit, 'success')
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEvent({ ...event, [name]: value });
  };



  return (
    <div className="EditEvent">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8" class="validateForm form-horizontal"
        role="form" id="event">




        <div class="form-group"><label class="control-label col-md-2" for="email">Nom de l'évenement<span class="text-danger">
          *</span></label>
          <div class="col-md-6">
            <div class="input text">
              <input onChange={handleInputChange} value={event.event_name} ref={register({ required: true })}
                type="text" name="event_name"
                class="form-control" id="" />
              <div className="error text-danger">
                {errors.event_name && eventValidation.event_name}
              </div>
            </div>
          </div>
        </div>



        <div class="form-group"><label class="control-label col-md-2" for="email"> Date<span class="text-danger">
          *</span></label>
          <div class="col-md-6">
            <div class="input text">
              <input type="text" onChange={handleInputChange} value={event.event_date} ref={register({ required: true })}
                name="event_date" autocomplete="off"
                class="form-control validate[required] date hasDatepicker" id="dp1609369438332" />
              <div className="error text-danger">
                {errors.event_date && eventValidation.event_date}
              </div>
            </div>
          </div>
        </div>



        <div class="form-group"><label class="control-label col-md-2" for="email">Lieu<span class="text-danger">
          *</span></label>
          <div class="col-md-6 module_padding">
            <select name="place_id" onChange={handleInputChange} value={event.place_id} ref={register({ required: true })}
              class="form-control events_place_list validate[required]">
              <option  >Select Event Places</option>
              <option value="1">New Location Address</option>
            </select>
            <div className="error text-danger">
              {errors.place_id && eventValidation.place_id}
            </div>
          </div>
        </div>



        <div class="form-group"><label class="control-label col-md-2" for="start time">Début<span class="text-danger">
          *</span></label>
          <div class="col-md-6 ">
            <div class="input text">
              <input onChange={handleInputChange} value={event.starttime} ref={register({ required: true })}
                type="text" name="starttime" id="time"
                class="form-control validate[required]  text-input" />
              <div className="error text-danger">
                {errors.starttime && eventValidation.starttime}
              </div>
            </div>
          </div>
        </div>


        <div class="form-group"><label class="control-label col-md-2" for="start time">Fin<span class="text-danger">
          *</span></label>
          <div class="col-md-6 ">
            <div class="input text">
              <input onChange={handleInputChange} value={event.endtime} ref={register({ required: true })}
                type="text" name="endtime" id="timepicker"
                class="form-control validate[required]  text-input" />
              <div className="error text-danger">
                {errors.endtime && eventValidation.endtime}
              </div>
            </div>
          </div>
        </div>


        <br /><button class="btn btn-flat btn-success col-md-offset-2" name="add_class" type="submit"
        >Sauvegarder</button>
      </form>
    </div>
  )
};

EditEvent.propTypes = {};

EditEvent.defaultProps = {};

export default EditEvent;
