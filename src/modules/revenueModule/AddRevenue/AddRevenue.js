
import React, { useState } from 'react';
import './AddRevenue.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import revenueMessage from '../../../main/messages/revenueMessage'
import revenueValidation from '../../../main/validations/revenueValidation'
import RevenueTestService from '../../../main/mocks/RevenueTestService';
import revenueHTTPService from '../../../main/services/revenueHTTPService';

const AddRevenue = (props) => {
  const initialState = {
    name: "",
    date: "",
    amount: "",
  };

  const { register, handleSubmit, errors } = useForm()
  const [revenue, setRevenue] = useState(initialState);

  const onSubmit = (data) => {
    //saveRevenue(data)
    //RevenueTestService.create(data)
    console.log(data)
    revenueHTTPService.createRevenue(data).then(data => {

      setRevenue(initialState)
      props.closeModal()
      showMessage('Confirmation', revenueMessage.add, 'success')
    })

  }




  const handleInputChange = event => {
    const { name, value } = event.target;
    setRevenue({ ...revenue, [name]: value });
  };

  return (
    <div className="AddRevenue">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label">Name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={revenue.name} ref={register({ required: true })}
              id="text1" name="name" type="text" class="form-control" />
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
              id="text" name="date" type="date" class="form-control" />
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

AddRevenue.propTypes = {};

AddRevenue.defaultProps = {};

export default AddRevenue;
