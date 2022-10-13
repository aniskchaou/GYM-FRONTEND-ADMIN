import React, { useEffect, useState } from 'react';
import './EditTypeSubs.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages';
import typeSubValidation from '../../../main/validations/typeSubValidation'
import typeSubMessage from '../../../main/messages/typeSubMessage '
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService'
import ReactTooltip from 'react-tooltip';
import memberHTTPService from '../../../main/services/memberHTTPService';

const EditTypeSubs = (props) => {

  const { register, handleSubmit, errors } = useForm()
  const [typeSub, setTypeSub] = useState(props.typeSub);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setTypeSub(props.typeSub)
    getAllMember()
  }, [props.typeSub]);


  const onSubmit = (data) => {
    typeSubsHTTPService.editTypeSubs(props.typeSub, data).then(data => {
      props.closeModal()
      showMessage('Confirmation', typeSubMessage.edit, 'success')
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTypeSub({ ...typeSub, [name]: value });
  };

  const getAllMember = () => {
    memberHTTPService.getAllMember()
      .then(response => {
        setMembers(response.data);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'info')
      });
  };



  return (
    <div className="EditTypeSubs">
      <ReactTooltip />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group row">
          <label for="select" class="col-4 col-form-label">Category</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={typeSub.category} ref={register({ required: true })}
              id="select" name="category" class="custom-select">
              <option value="Sliver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Premium">Premium</option>
            </select>
            <div className="error text-danger">
              {errors.category && typeSubValidation.category}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label"><span>Period </span>  <i data-tip="Subscription period expressed in number of weeks" class="fa fa-question-circle" aria-hidden="true"></i> </label>
          <div class="col-8">
            <div class="input-group mb-3">
              <input onChange={handleInputChange} value={typeSub.period} ref={register({ required: true })}
                id="text1" name="period" type="number" class="form-control" />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">week</span>
              </div>
            </div>

            <div className="error text-danger">
              {errors.period && typeSubValidation.period}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text3" class="col-4 col-form-label">Amount</label>
          <div class="col-8">

            <div class="input-group mb-3">
              <input onChange={handleInputChange} value={typeSub.amount} ref={register({ required: true })}
                id="text3" name="amount" type="number" class="form-control" />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">$</span>
              </div>
            </div>
            <div className="error text-danger">
              {errors.amount && typeSubValidation.amount}
            </div>
          </div>
        </div>

        <div class="form-group row">
          <label for="textarea" class="col-4 col-form-label">Description</label>
          <div class="col-8">
            <textarea onChange={handleInputChange} value={typeSub.description} ref={register({ required: true })}
              id="textarea" name="description" cols="40" rows="5" class="form-control"></textarea>
            <div className="error text-danger">
              {errors.description && typeSubValidation.description}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <label for="text4" class="col-4 col-form-label">Enrollement fee</label>
          <div class="col-8">
            <div class="input-group mb-3">
              <input onChange={handleInputChange} value={typeSub.fee} ref={register({ required: true })}
                id="text4" name="fee" type="number" class="form-control" />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">$</span>
              </div>
            </div>

            <div className="error text-danger">
              {errors.fee && typeSubValidation.fee}
            </div>
          </div>
        </div>



        <div class="form-group row">
          <label for="select1" class="col-4 col-form-label"><span>Payment plan </span> <i data-tip="Payment mode" class="fa fa-question-circle" aria-hidden="true"></i>  </label>
          <div class="col-8">
            <select onChange={handleInputChange} value={typeSub.time_payment} ref={register({ required: true })}
              id="select1" name="time_payment" class="custom-select">
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
            <div className="error text-danger">
              {errors.time_payment && typeSubValidation.time_payment}
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

EditTypeSubs.propTypes = {};

EditTypeSubs.defaultProps = {};

export default EditTypeSubs;
