import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditEvent.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import eventMessage from '../../../main/messages/eventMessage'
import eventValidation from '../../../main/validations/eventValidation'
import EventTestService from '../../../main/mocks/EventTestService';
import eventHTTPService from '../../../main/services/eventHTTPService'

const EditEvent = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [eventt, setEventt] = useState(props.event);

  useEffect(() => {
    setEventt(props.event)
  }, [props.event]);


  const onSubmit = (data) => {

    // EventTestService.update(props.event, data)
    eventHTTPService.editEvent(props.event.id, data).then(data => {
      props.closeModal()
      showMessage('Confirmation', eventMessage.edit, 'success')
    })

  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEventt({ ...eventt, [name]: value });
  };



  return (
    <div className="EditEvent">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8" class="validateForm form-horizontal"
        role="form" id="event">




        <div class="form-group"><label class="control-label col-md-2" for="email">Name<span class="text-danger">
          *</span></label>
          <div class="col-md-6">
            <div class="input text">
              <input onChange={handleInputChange} value={eventt.event_name} ref={register({ required: true })}
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
              <input type="text" onChange={handleInputChange} value={eventt.event_date} ref={register({ required: true })}
                name="event_date" autocomplete="off"
                class="form-control validate[required] date hasDatepicker" id="dp1609369438332" />
              <div className="error text-danger">
                {errors.event_date && eventValidation.event_date}
              </div>
            </div>
          </div>
        </div>





        <div class="form-group"><label class="control-label col-md-2" for="start time">Start<span class="text-danger">
          *</span></label>
          <div class="col-md-6 ">
            <div class="input text">
              <input onChange={handleInputChange} value={eventt.starttime} ref={register({ required: true })}
                type="text" name="starttime" id="time"
                class="form-control validate[required]  text-input" />
              <div className="error text-danger">
                {errors.starttime && eventValidation.starttime}
              </div>
            </div>
          </div>
        </div>


        <div class="form-group"><label class="control-label col-md-2" for="start time">End<span class="text-danger">
          *</span></label>
          <div class="col-md-6 ">
            <div class="input text">
              <input onChange={handleInputChange} value={eventt.endtime} ref={register({ required: true })}
                type="text" name="endtime" id="timepicker"
                class="form-control validate[required]  text-input" />
              <div className="error text-danger">
                {errors.endtime && eventValidation.endtime}
              </div>
            </div>
          </div>
        </div>


        <br /><button class="btn btn-flat btn-success col-md-offset-2" name="add_class" type="submit"
        >Save</button>
      </form>
    </div>
  )
};

EditEvent.propTypes = {};

EditEvent.defaultProps = {};

export default EditEvent;
