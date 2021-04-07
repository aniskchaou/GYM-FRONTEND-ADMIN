
import React, { useState } from 'react';
import './AddExpense.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import expenseMessage from '../../../main/messages/expenseMessage'
import expenseValidation from '../../../main/validations/expenseValidations'
import ExpenseTestService from '../../../main/mocks/ExpenseTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddExpense = () => {
  const initialState = {
    date: '',
    supplier: '',
    amount: '',
  };

  const { register, handleSubmit, errors } = useForm()
  const [expense, setExpense] = useState(initialState);

  const onSubmit = (data) => {
    //saveExpense(data)
    ExpenseTestService.create(data)
    setExpense(initialState)
    showMessage('Confirmation', expenseMessage.add, 'success')
  }

  const saveExpense = (data) => {

    HTTPService.create(data)
      .then(response => {
        setExpense(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setExpense({ ...expense, [name]: value });
  };


  return (

    <div className="AddExpense">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label">Nom du fournisseur</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={expense.supplier} ref={register({ required: true })}
              id="text1" name="supplier" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.supplier && expenseValidation.supplier}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text8" class="col-4 col-form-label">Montant</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={expense.amount} ref={register({ required: true })}
              id="text8" name="amount" type="number" class="form-control" />
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
            <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i>  Sauvegarder</button>
          </div>
        </div>


      </form>
    </div>
  )
};

AddExpense.propTypes = {};

AddExpense.defaultProps = {};

export default AddExpense;
