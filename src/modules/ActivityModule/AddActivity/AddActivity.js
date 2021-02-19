
import React, { useState } from 'react';
import './AddActivity.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import activityMessage from '../../../main/messages/activityMessage'
import activityValidation from '../../../main/validations/activityValidation'
import ActivityTestService from '../../../main/mocks/ActivityTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddActivity = () => {
  const initialState = {
    category: '',
    title: '',
    member: '',
    type: ''
  };

  const { register, handleSubmit, errors } = useForm()
  const [activity, setActivity] = useState(initialState);

  const onSubmit = (data) => {
    //saveActivity(data)
    ActivityTestService.create(data)
    setActivity(initialState)
    showMessage('Confirmation', activityMessage.add, 'success')
  }

  const saveActivity = (data) => {

    HTTPService.create(data)
      .then(response => {
        setActivity(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };


  return (

    <div className="AddActivity">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="select" class="col-4 col-form-label">Catégorie</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={activity.category} ref={register({ required: true })}
              id="select" name="category" class="custom-select">
              <option value="rabbit">Gymnastique</option>
              <option value="duck">Fitness</option>
            </select>
            <div className="error text-danger">
              {errors.category && activityValidation.category}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Titre de l'activité</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={activity.title} ref={register({ required: true })}
              id="text" name="title" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.title && activityValidation.title}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label">Affecter au membre du personnel</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={activity.member}
              ref={register({ required: true })} id="select1" name="member" class="custom-select">
              <option value="rabbit">Somerville Rossignol</option>
              <option value="duck">Romaine Gervais</option>
            </select>
            <div className="error text-danger">
              {errors.member && activityValidation.member}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select2" class="col-4 col-form-label">Type d'adhésion</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={activity.type} ref={register({ required: true })}
              id="select2" name="type" class="custom-select">
              <option value="rabbit">Primium</option>
              <option value="duck">Gold</option>
            </select>
            <div className="error text-danger">
              {errors.type && activityValidation.type}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i>
 Sauvegarder</button>
          </div>
        </div>


      </form>
    </div>


  )
};

AddActivity.propTypes = {};

AddActivity.defaultProps = {};

export default AddActivity;
