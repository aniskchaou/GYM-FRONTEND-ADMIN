
import React, { useEffect, useState } from 'react';
import './AddActivity.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import activityMessage from '../../../main/messages/activityMessage'
import activityValidation from '../../../main/validations/activityValidation'
import ActivityTestService from '../../../main/mocks/ActivityTestService';
import activityHTTPService from '../../../main/services/activityHTTPService';
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService';
import memberHTTPService from '../../../main/services/memberHTTPService';

const AddActivity = (props) => {
  const initialState = {
    category: '',
    title: '',
    member: '',
    type: ''
  };

  const { register, handleSubmit, errors } = useForm()
  const [activity, setActivity] = useState(initialState);
  const [typeSubs, setTypeSubs] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getAllMember()
    getTypeSubs()
  }, []);

  const onSubmit = (data) => {
    //saveActivity(data)
    //ActivityTestService.create(data)
    activityHTTPService.createActivity(data).then(data => {
      props.closeModal()
      setActivity(initialState)
      showMessage('Confirmation', activityMessage.add, 'success')
    }).catch(e => {
      console.log(e)
    })

  }

  const getAllMember = () => {

    memberHTTPService.getAllMember()
      .then(response => {
        setMembers(response.data);
        //forceUpdate()
      })
      .catch(e => {
        showMessage('Confirmation', e, 'info')
      });
  };

  const getTypeSubs = () => {

    typeSubsHTTPService.getAllTypeSubs().then(data => {
      setTypeSubs(data.data);


    })
  };



  const handleInputChange = event => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };


  return (

    <div className="AddActivity">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="select" class="col-4 col-form-label">Category</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={activity.category} ref={register({ required: true })}
              id="select" name="category" class="custom-select">
              <option value="Gymnastique">Gymnastique</option>
              <option value="Fitness">Fitness</option>
            </select>
            <div className="error text-danger">
              {errors.category && activityValidation.category}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={activity.title} ref={register({ required: true })}
              id="text" name="title" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.title && activityValidation.title}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label">Coach</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={activity.member}
              ref={register({ required: true })} id="select1" name="member" class="custom-select">

              {members.map(item =>
                <option value={item.id}>{item.name}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.member && activityValidation.member}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select2" class="col-4 col-form-label">Subscription Type</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={activity.type} ref={register({ required: true })}
              id="select2" name="type" class="custom-select">
              {typeSubs.map(item =>
                <option value={item.id}>{item.name}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.type && activityValidation.type}
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

AddActivity.propTypes = {};

AddActivity.defaultProps = {};

export default AddActivity;
