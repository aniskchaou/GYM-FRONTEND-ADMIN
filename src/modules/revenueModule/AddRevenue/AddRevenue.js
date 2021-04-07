
import React, { useState } from 'react';
import './AddRevenue.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import revenueMessage from '../../../main/messages/revenueMessage'
import revenueValidation from '../../../main/validations/revenueValidation'
import RevenueTestService from '../../../main/mocks/RevenueTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddRevenue = () => {
  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [revenue, setRevenue] = useState(initialState);

  const onSubmit = (data) => {
    //saveRevenue(data)
    RevenueTestService.create(data)
    setRevenue(initialState)
    showMessage('Confirmation', revenueMessage.add, 'success')
  }

  const saveRevenue = (data) => {

    HTTPService.create(data)
      .then(response => {
        setRevenue(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setRevenue({ ...revenue, [name]: value });
  };

  return (
    <div className="AddRevenue">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label">Étiquette de revenu</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={revenue.revenue} ref={register({ required: true })}
              id="text1" name="revenue" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.revenue && revenueValidation.revenue}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label">Membre</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={revenue.member} ref={register({ required: true })}
              id="select1" name="member" class="custom-select">
              <option value="Victor Gaudreau">Victor Gaudreau</option>
              <option value="Albracca Tougas">Albracca Tougas</option>
            </select>
            <div className="error text-danger">
              {errors.member && revenueValidation.member}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="text8" class="col-4 col-form-label">Montant</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={revenue.amount} ref={register({ required: true })}
              id="text8" name="amount" type="number" class="form-control" />
            <div className="error text-danger">
              {errors.amount && revenueValidation.amount}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Date</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={revenue.date} ref={register({ required: true })}
              id="text" name="date" type="date" class="form-control" />
            <div className="error text-danger">
              {errors.date && revenueValidation.date}
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

AddRevenue.propTypes = {};

AddRevenue.defaultProps = {};

export default AddRevenue;
