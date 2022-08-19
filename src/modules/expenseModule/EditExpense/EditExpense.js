import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditExpense.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import expenseMessage from '../../../main/messages/expenseMessage'
import expenseValidation from '../../../main/validations/expenseValidations'
import ExpenseTestService from '../../../main/mocks/ExpenseTestService';
import expenHTTPService from '../../../main/services/expenseHTTPService'

const EditExpense = (props) => {

  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [expense, setExpense] = useState(props.expense);

  useEffect(() => {
    setExpense(props.expense)
  }, [props.expense]);


  const onSubmit = (data) => {

    //ExpenseTestService.update(props.expense, data)
    expenHTTPService.editExpense(props.expense.id, data).then(data => {
      props.closeModal()
      showMessage('Confirmation', expenseMessage.edit, 'success')
    })

  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setExpense({ ...expense, [name]: value });
  };


  return (
    <div className="EditExpense">
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

EditExpense.propTypes = {};

EditExpense.defaultProps = {};

export default EditExpense;
