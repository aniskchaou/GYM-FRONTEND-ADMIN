
import React, { useState } from 'react';
import './AddEvent.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import eventMessage from '../../../main/messages/eventMessage'
import eventValidation from '../../../main/validations/eventValidation'
import EventTestService from '../../../main/mocks/EventTestService';
import eventHTTPService from '../../../main/services/eventHTTPService';

const AddEvent = (props) => {
  const initialState = {
    event_name: "",
    event_date: "",
    starttime: "",
    endtime: "",
  };

  const { register, handleSubmit, errors } = useForm()
  const [event, setEvent] = useState(initialState);
  const [value, setValue] = useState(null);

  const onSubmit = (data) => {
    //saveEvent(data)
    eventHTTPService.createEvent(data).then(data => {
      console.log(data)
      setEvent(initialState)
      setValue(null)
      props.closeModal()
      showMessage('Confirmation', eventMessage.add, 'success')
    }).catch(e => {
      console.log(e)
    })

  }

  const saveEvent = (data) => {

    /* HTTPService.create(data)
       .then(response => {
         setEvent(initialState)
       })
       .catch(e => {
         console.log(e);
       });
     */
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setEvent({ ...event, [name]: value });
  };
  return (
    <div className="AddEvent">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8" class="validateForm form-horizontal"
        role="form" id="event">




        <div class="form-group"><label class="control-label col-md-2" for="email">Name<span class="text-danger">
          *</span></label>
          <div class="col-md-12">
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
          <div class="col-md-12">
            <div class="input text">
              <input type="date" onChange={handleInputChange} value={event.event_date} ref={register({ required: true })}
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
          <div class="col-md-12 ">
            <div class="input text">
              <input onChange={handleInputChange} value={event.starttime} ref={register({ required: true })}
                type="time" name="starttime" id="time"
                class="form-control validate[required]  text-input" />
              <div className="error text-danger">
                {errors.starttime && eventValidation.starttime}
              </div>
            </div>
          </div>
        </div>


        <div class="form-group"><label class="control-label col-md-2" for="start time">End<span class="text-danger">
          *</span></label>
          <div class="col-md-12 ">
            <div class="input text">
              <input onChange={handleInputChange} value={event.endtime} ref={register({ required: true })}
                type="time" name="endtime" id="timepicker"
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

AddEvent.propTypes = {};

AddEvent.defaultProps = {};

export default AddEvent;
