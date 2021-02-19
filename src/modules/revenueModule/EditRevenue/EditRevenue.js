import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditRevenue.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import revenueMessage from '../../../main/messages/revenueMessage'
import revenueValidation from '../../../main/validations/revenueValidation'
import RevenueTestService from '../../../main/mocks/RevenueTestService';

const EditRevenue = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [revenue, setRevenue] = useState(props.revenue);

  useEffect(() => {
    setRevenue(props.revenue)
  }, [props.revenue]);


  const onSubmit = (data) => {

    RevenueTestService.update(props.revenue, data)
    showMessage('Confirmation', revenueMessage.edit, 'success')
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRevenue({ ...revenue, [name]: value });
  };


  return (
    <div className="EditRevenue">
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
              <option value="rabbit">Victor Gaudreau</option>
              <option value="duck">Albracca Tougas</option>
              <option value="fish">Fish</option>
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
              id="text8" name="amount" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.amount && revenueValidation.amount}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Date</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={revenue.date} ref={register({ required: true })}
              id="text" name="date" type="text" class="form-control" />
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

EditRevenue.propTypes = {};

EditRevenue.defaultProps = {};

export default EditRevenue;
