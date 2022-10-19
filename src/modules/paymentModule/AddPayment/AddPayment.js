
import React, { useEffect, useState } from 'react';
import './AddPayment.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import paymentMessage from '../../../main/messages/paymentMessage'
import paymentValidation from '../../../main/validations/paymentValidation'
import paymentHTTPService from '../../../main/services/paymentHTTPService';
import memberHTTPService from '../../../main/services/memberHTTPService';
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService';
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';

const AddPayment = (props) => {

  const initialState = {
    validity: "",
    member: "",
    type: "",
    amount: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [payment, setPayment] = useState(initialState);
  const [members, setMembers] = useState([]);
  const [typeSubs, setTypeSubs] = useState([]);

  useEffect(() => {
    getMembers()
    getTypeSubs()
  }, []);


  const onSubmit = (data) => {
    paymentHTTPService.createPayment(data).then(data => {
      props.closeModal()
      setPayment(initialState)
      showMessage('Confirmation', paymentMessage.add, 'success')
    })
  }

  const getTypeSubs = () => {
    typeSubsHTTPService.getAllTypeSubs()
      .then(response => {
        setTypeSubs(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const getMembers = () => {
    memberHTTPService.getAllMember()
      .then(response => {
        setMembers(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPayment({ ...payment, [name]: value });
  };


  return (
    <div className="AddPayment">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label">Member</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={payment.member} ref={register({ required: true })}
              name="member" class="custom-select">
              {members.map(item =>
                <option value={item.id}>{item.first_name} {item.last_name}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.member && paymentValidation.member}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="select" class="col-4 col-form-label">Subscription type</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={payment.type} ref={register({ required: true })}
              name="type" class="custom-select">
              {typeSubs.map(item =>
                <option value={item.id}>{item.category}</option>
              )}
            </select>
            <div className="error text-danger">
              {errors.type && paymentValidation.type}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text8" class="col-4 col-form-label">Amount</label>
          <div class="col-8">

            <div class="input-group mb-3">
              <input onChange={handleInputChange} value={payment.amount} ref={register({ required: true })}
                id="text8" name="amount" type="number" class="form-control" />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">$</span>
              </div>
            </div>
            <div className="error text-danger">
              {errors.amount && paymentValidation.amount}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Date</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={payment.validity} ref={register({ required: true })}
              id="text" name="validity" type="date" class="form-control" />
            <div className="error text-danger">
              {errors.validity && paymentValidation.validity}
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

AddPayment.propTypes = {};

AddPayment.defaultProps = {};

export default AddPayment;
