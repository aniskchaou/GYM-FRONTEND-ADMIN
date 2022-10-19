
import React, { useEffect, useState } from 'react';
import './AddMember.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import memberMessage from '../../../main/messages/memberMessage'
import memberValidation from '../../../main/validations/memberValidation'
import MemberTestService from '../../../main/mocks/MemberTestService';
import memberHTTPService from '../../../main/services/memberHTTPService';
import staffHTTPService from '../../../main/services/staffHTTPService';
import activityHTTPService from '../../../main/services/activityHTTPService';
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService';
import groupeHTTPService from '../../../main/services/groupeHTTPService'
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';


const AddMember = (props) => {


  const initialState = {
    first_name: "",
    last_name: "",
    birth_date: "",
    groupe: "",
    activity: "",
    address: "",
    mobile: "",
    weight: "",
    size: "",
    start_date: "",
    end_date: "",
    type: "",
    coach: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [member, setMember] = useState(initialState);
  const [staffs, setStaffs] = useState([]);
  const [activities, setActivities] = useState([]);
  const [groupes, setGroupes] = useState([]);
  const [typeSubs, setTypeSubs] = useState([]);

  useEffect(() => {
    getAllStaffs()
    getAllActivities()
    getAllGroupes()
    getTypeSubs()
  }, []);

  const onSubmit = (data) => {
    memberHTTPService.createMember(data).then(data => {
      props.closeModal()
      setMember(initialState)
      showMessage('Confirmation', memberMessage.add, 'success')
    }).catch(err => {
      console.log(err.message)
      showMessage('Confirmation', err.message, 'warning')
    })

  }

  const getAllStaffs = () => {
    staffHTTPService.getAllStaff()
      .then(response => {
        setStaffs(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const getAllActivities = () => {
    activityHTTPService.getAllActivity()
      .then(response => {
        setActivities(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const getTypeSubs = () => {
    typeSubsHTTPService.getAllTypeSubs()
      .then(response => {
        setTypeSubs(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const getAllGroupes = () => {
    groupeHTTPService.getAllGroupes()
      .then(response => {
        setGroupes(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  return (
    <div className="AddMember">

      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label">First Name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.first_name} ref={register({ required: true })}
              id="text1" name="first_name" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.first_name && memberValidation.first_name}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text2" class="col-4 col-form-label">Last Name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.last_name} ref={register({ required: true })}
              id="text2" name="last_name" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.last_name && memberValidation.last_name}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Date of birth</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.birth_date} ref={register({ required: true })}
              id="text" name="birth_date" type="date" class="form-control" />
            <div className="error text-danger">
              {errors.birth_date && memberValidation.birth_date}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label">Groupe</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={member.groupe} ref={register({ required: true })}
              id="select1" name="groupe" class="custom-select">
              {groupes.map(item =>
                <option value={item.id}>{item.name}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.groupe && memberValidation.groupe}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select2" class="col-4 col-form-label">Activity</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={member.type} ref={register({ required: true })}
              id="select2" name="type" class="custom-select">
              {activities.map(item =>
                <option value={item.id}>{item.title}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.type && memberValidation.type}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="text3" class="col-4 col-form-label">Address</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.address} ref={register({ required: true })}
              id="text3" name="address" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.address && memberValidation.address}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text4" class="col-4 col-form-label">Mobile</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.mobile} ref={register({ required: true })}
              id="text4" name="mobile" type="number" class="form-control" />
            <div className="error text-danger">
              {errors.mobile && memberValidation.mobile}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text5" class="col-4 col-form-label">Email</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.email} ref={register({ required: true })}
              id="text5" name="email" type="email" class="form-control" />
            <div className="error text-danger">
              {errors.email && memberValidation.email}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text6" class="col-4 col-form-label">Weight</label>
          <div class="col-8">

            <div class="input-group mb-3">
              <input onChange={handleInputChange} value={member.weight} ref={register({ required: true })}
                id="text6" name="weight" type="number" class="form-control" />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">Kg</span>
              </div>
            </div>
            <div className="error text-danger">
              {errors.weight && memberValidation.weight}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text7" class="col-4 col-form-label">Size</label>
          <div class="col-8">
            <div class="input-group mb-3">
              <input onChange={handleInputChange} value={member.size} ref={register({ required: true })}
                id="text7" name="size" type="number" class="form-control" />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">m</span>
              </div>
            </div>

            <div className="error text-danger">
              {errors.size && memberValidation.size}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="text12" class="col-4 col-form-label">Start Date</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.start_date} ref={register({ required: true })}
              id="text12" name="start_date" type="date" class="form-control" />
            <div className="error text-danger">
              {errors.start_date && memberValidation.start_date}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text13" class="col-4 col-form-label">Start End</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={member.end_date} ref={register({ required: true })}
              id="text13" name="end_date" type="date" class="form-control" />
            <div className="error text-danger">
              {errors.end_date && memberValidation.end_date}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select" class="col-4 col-form-label">Subscription type</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={member.type} ref={register({ required: true })}
              id="select" name="type" class="custom-select">
              {typeSubs.map(item =>
                <option value={item.id}>{item.category}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.type && memberValidation.type}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select3" class="col-4 col-form-label">Coach</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={member.coach} ref={register({ required: true })}
              id="select3" name="coach" class="custom-select">

              {staffs.map(item =>
                <option value={item.id}>{item.first_name}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.coach && memberValidation.coach}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i>
              Save</button>
          </div>
        </div>


      </form>
    </div>
  )
};

AddMember.propTypes = {};

AddMember.defaultProps = {};

export default AddMember;
