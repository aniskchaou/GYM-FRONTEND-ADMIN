import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditRevenue.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import revenueMessage from '../../../main/messages/revenueMessage'
import revenueValidation from '../../../main/validations/revenueValidation'

import revenueHTTPService from '../../../main/services/revenueHTTPService'

const EditRevenue = (props) => {

  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [revenue, setRevenue] = useState(props.revenue);

  useEffect(() => {
    setRevenue(props.revenue)
  }, [props.revenue]);


  const onSubmit = (data) => {
    revenueHTTPService.editRevenue(props.revenue.id, data).then(data => {
      props.closeModal()
      showMessage('Confirmation', revenueMessage.edit, 'success')
    })

  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRevenue({ ...revenue, [name]: value });
  };


  return (
    <div className="EditRevenue">
      <form onSubmit={handleSubmit(onSubmit)}>


        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label">Member</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={revenue.name} ref={register({ required: true })}
              id="text8" name="name" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.name && revenueValidation.name}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="text8" class="col-4 col-form-label">Amount</label>
          <div class="col-8">
            <div class="input-group mb-3">
              <input onChange={handleInputChange} value={revenue.amount} ref={register({ required: true })}
                id="text8" name="amount" type="number" class="form-control" />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">$</span>
              </div>
            </div>

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
              Save</button>
          </div>
        </div>


      </form>

    </div>
  )
};

EditRevenue.propTypes = {};

EditRevenue.defaultProps = {};

export default EditRevenue;
