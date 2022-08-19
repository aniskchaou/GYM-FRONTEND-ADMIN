
import React, { useEffect, useState } from 'react';
import './Presence.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditPresence from '../EditPresence/EditPresence';
import AddPresence from '../AddPresence/AddPresence';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import presenceMessage from '../../../main/messages/presenceMessage';
import PresenceTestService from '../../../main/mocks/PresenceTestService';
import HTTPService from '../../../main/services/HTTPService';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css'; // a dependency of timegrid
import '@fullcalendar/timegrid/main.css';
import attendanceHTTPService from '../../../main/services/attendanceHTTPService';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import memberHTTPService from '../../../main/services/memberHTTPService';

const Presence = () => {
  let yourDate = new Date().toISOString()
  let d = yourDate.substring(0, yourDate.length, -2)

  const initialState = {
    member: "hello",
    date: d

  };

  const [attendance, setAttendance] = useState([])
  const [createAttendance, setCreateAttendance] = useState(initialState)
  const { register, handleSubmit, errors } = useForm()
  const forceUpdate = useForceUpdate();
  const history = useHistory()
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getAttendencesCalendar()
    getAllMember()
  }, []);
  const onSubmit = (data) => {
    console.log(data)
    attendanceHTTPService.createtendances(data).then(data => {
      showMessage('Confirmation', data, 'info')
      setCreateAttendance(initialState)
      getAttendencesCalendar()
      history.replace('/presence')
    }).catch(e => {
      showMessage('Confirmation', e.message, 'danger')
    })
  }


  const getAttendencesCalendar = () => {

    attendanceHTTPService.getAllAtendances()
      .then(response => {
        setAttendance(response.data);

      })
      .catch(e => {
        showMessage('Confirmation', e, 'info')
      });
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCreateAttendance({ ...createAttendance, [name]: value });
  };

  const getAllMember = () => {

    memberHTTPService.getAllMember()
      .then(response => {
        setMembers(response.data);
        // forceUpdate()
      })
      .catch(e => {
        showMessage('Confirmation', e, 'info')
      });
  };

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> Attendances</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-group row">
                  <label for="text" class="col-4 col-form-label">Member Name</label>
                  <div class="col-8">
                    <select onChange={handleInputChange} value={createAttendance.member} ref={register({ required: true })}
                      id="select" name="member" class="custom-select">
                      {members.map(item =>
                        <option value={item.id}>{item.name}</option>
                      )}
                    </select>
                  </div>
                  <input value={createAttendance.date} ref={register({ required: true })}
                    id="hidden" name="date" type="hidden" class="form-control" />
                </div>


                <div class="form-group row">
                  <div class="offset-4 col-8">
                    <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i> Save</button>
                  </div>
                </div>

              </form>

            </div>

            <div className="card-body">
              <FullCalendar
                plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                select={console.log('select')} //NOT WORKING HERE
                dateClick={console.log('dateclick')} //SAME
                headerToolbar={{
                  left: 'dayGridMonth,timeGridWeek,timeGridDay',
                  center: 'title',
                  right: 'prevYear,prev,next,nextYear'
                }}
                slotMinTime="07:00:00"
                slotMaxTime="20:00:00"
                editable={false}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={false}
                events={
                  attendance}
              />

            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

Presence.propTypes = {};

Presence.defaultProps = {};

export default Presence;
