import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditPayment.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import paymentMessage from '../../../main/messages/paymentMessage'
import paymentValidation from '../../../main/validations/paymentValidation'
import PaymentTestService from '../../../main/mocks/PaymentTestService';

const EditPayment = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [payment, setPayment] = useState(props.payment);

  useEffect(() => {
    setPayment(props.payment)
  }, [props.payment]);


  const onSubmit = (data) => {

    PaymentTestService.update(props.payment, data)
    showMessage('Confirmation', paymentMessage.edit, 'success')
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPayment({ ...payment, [name]: value });
  };


  return (
    <div className="EditPayment">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label">Membre</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={payment.member} ref={register({ required: true })}
              id="select1" name="member" class="custom-select">
              <option value="rabbit">Victor Gaudreau</option>
              <option value="duck">Albracca Tougas</option>
              <option value="fish">Fish</option>
            </select>
            <div className="error text-danger">
              {errors.member && paymentValidation.member}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select" class="col-4 col-form-label">Type d'adhésion</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={payment.type} ref={register({ required: true })}
              id="select" name="type" class="custom-select">
              <option value="rabbit">Premium</option>
              <option value="duck">Gold</option>
              <option value="fish">Fish</option>
            </select>
            <div className="error text-danger">
              {errors.type && paymentValidation.type}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text8" class="col-4 col-form-label">Montant</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={payment.amount} ref={register({ required: true })}
              id="text8" name="amount" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.amount && paymentValidation.amount}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Adhésion valable à partir de</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={payment.validity} ref={register({ required: true })}
              id="text" name="validity" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.validity && paymentValidation.validity}
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

EditPayment.propTypes = {};

EditPayment.defaultProps = {};

export default EditPayment;
