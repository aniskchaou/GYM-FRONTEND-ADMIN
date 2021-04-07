
import React, { useState } from 'react';
import './AddTypeSubs.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../../libraries/messages/messages'
import typeSubMessage from '../../../../main/messages/typeSubMessage '
import typeSubValidation from '../../../../main/validations/typeSubValidation'
import TypeSubTestService from '../../../../main/mocks/TypeSubTestService';
import HTTPService from '../../../../main/services/HTTPService';


const AddTypeSubs = () => {
  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [job, setJob] = useState(initialState);

  const onSubmit = (data) => {
    //saveJob(data)
    TypeSubTestService.create(data)
    setJob(initialState)
    showMessage('Confirmation', typeSubMessage.add, 'success')
  }

  const saveJob = (data) => {

    HTTPService.create(data)
      .then(response => {
        setJob(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setJob({ ...job, [name]: value });
  };


  return (
    <div className="AddTypeSubs">
      <form onSubmit={handleSubmit(onSubmit)}>



        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Nom du membre</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={job.member} ref={register({ required: true })}
              id="text" name="member" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.member && typeSubValidation.member}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="select" class="col-4 col-form-label">Catégorie d'adhésion</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={job.category} ref={register({ required: true })}
              id="select" name="category" class="custom-select">
              <option value="Glod">Gold</option>
              <option value="Premium">Premium</option>
            </select>
            <div className="error text-danger">
              {errors.category && typeSubValidation.category}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label">Période d'adhésion</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={job.period} ref={register({ required: true })}
              id="text1" name="period" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.period && typeSubValidation.period}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text2" class="col-4 col-form-label">Limite d'adhésion</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={job.limit} ref={register({ required: true })}
              id="text2" name="limit" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.limit && typeSubValidation.limit}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text3" class="col-4 col-form-label">Montant de l'adhésion</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={job.amount} ref={register({ required: true })}
              id="text3" name="amount" type="number" class="form-control" />
            <div className="error text-danger">
              {errors.amount && typeSubValidation.amount}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="textarea" class="col-4 col-form-label">Description de l'adhésion</label>
          <div class="col-8">
            <textarea onChange={handleInputChange} value={job.description} ref={register({ required: true })}
              id="textarea" name="description" cols="40" rows="5" class="form-control"></textarea>
            <div className="error text-danger">
              {errors.description && typeSubValidation.description}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text4" class="col-4 col-form-label">Frais d'inscription</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={job.fee} ref={register({ required: true })}
              id="text4" name="fee" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.fee && typeSubValidation.fee}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label">Plan de versement</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={job.time_payment} ref={register({ required: true })}
              id="select1" name="time_payment" class="custom-select">
              <option value="1">1 semaine</option>
              <option value="3">1 mois</option>
            </select>
            <div className="error text-danger">
              {errors.time_payment && typeSubValidation.time_payment}
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

AddTypeSubs.propTypes = {};

AddTypeSubs.defaultProps = {};

export default AddTypeSubs;
