
import React, { useState } from 'react';
import './AddExpense.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import expenseMessage from '../../../main/messages/expenseMessage'
import expenseValidation from '../../../main/validations/expenseValidations'
import ExpenseTestService from '../../../main/mocks/ExpenseTestService';
import expenseHTTPService from '../../../main/services/expenseHTTPService';

const AddExpense = (props) => {
  const initialState = {
    date: '',
    name: '',
    amount: '',
  };

  const { register, handleSubmit, errors } = useForm()
  const [expense, setExpense] = useState(initialState);

  const onSubmit = (data) => {
    //saveExpense(data)
    //ExpenseTestService.create(data)
    expenseHTTPService.createExpense(data).then(data => {
      setExpense(initialState)
      props.closeModal()
      showMessage('Confirmation', expenseMessage.add, 'success')
    })

  }


  const handleInputChange = event => {
    const { name, value } = event.target;
    setExpense({ ...expense, [name]: value });
  };


  return (

    <div className="AddExpense">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label">Name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={expense.name} ref={register({ required: true })}
              id="text1" name="name" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.name && expenseValidation.name}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text8" class="col-4 col-form-label">Amount</label>
          <div class="col-8">

            <div class="input-group mb-3">
              <input onChange={handleInputChange} value={expense.amount} ref={register({ required: true })}
                id="text8" name="amount" type="number" class="form-control" />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">$</span>
              </div>
            </div>
            <div className="error text-danger">
              {errors.amount && expenseValidation.amount}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Date</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={expense.date} ref={register({ required: true })}
              id="text" name="date" type="date" class="form-control" />
            <div className="error text-danger">
              {errors.date && expenseValidation.date}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i>  Save</button>
          </div>
        </div>


      </form>
    </div>
  )
};

AddExpense.propTypes = {};

AddExpense.defaultProps = {};

export default AddExpense;
