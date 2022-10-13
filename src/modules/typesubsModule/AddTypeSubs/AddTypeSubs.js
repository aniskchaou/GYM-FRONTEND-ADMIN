
import React, { useEffect, useState } from 'react';
import './AddTypeSubs.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages';
import HTTPService from '../../../main/services/HTTPService';
import typeSubValidation from '../../../main/validations/typeSubValidation'
import typeSubMessage from '../../../main/messages/typeSubMessage '
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService'
import { LoadJS } from '../../../libraries/datatables/datatables';
import memberHTTPService from '../../../main/services/memberHTTPService';
import ReactTooltip from 'react-tooltip';
import { useHistory } from 'react-router-dom';

const AddTypeSubs = (props) => {

  const initialState = {
    member: "",
    category: "",
    period: "",
    limit: "",
    amount: "",
    description: "",
    fee: "",
    time_payment: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [job, setJob] = useState(initialState);
  const [members, setMembers] = useState([]);
  const history = useHistory()
  useEffect(() => {
    getAllMember()
  }, []);

  const onSubmit = (data) => {
    typeSubsHTTPService.createTypeSubs(data).then(data => {
      setJob(initialState)
      props.closeModal()
      showMessage('Confirmation', typeSubMessage.add, 'success')
    })
  }

  const getAllMember = () => {
    memberHTTPService.getAllMember()
      .then(response => {
        setMembers(response.data);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setJob({ ...job, [name]: value });
  };


  return (
    <div className="AddTypeSubs">
      <div className="table-responsivee">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReactTooltip />

          <div class="form-group row">
            <label for="select" class="col-4 col-form-label"> Category</label>
            <div class="col-8">
              <select onChange={handleInputChange} value={job.category} ref={register({ required: true })}
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
            <label for="text1" class="col-4 col-form-label"><span> Period  </span>  <i data-tip="Subscription period expressed in number of weeks" class="fa fa-question-circle" aria-hidden="true"></i> </label>
            <div class="col-8">
              <div class="input-group mb-3">
                <input onChange={handleInputChange} value={job.period} ref={register({ required: true })}
                  id="text1" name="period" type="number" class="form-control" />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">weeks</span>
                </div>
              </div>
              <div className="error text-danger">
                {errors.period && typeSubValidation.period}
              </div>
            </div>
          </div>



          <div class="form-group row">
            <label for="text3" class="col-4 col-form-label">Amount </label>
            <div class="col-8">

              <div class="input-group mb-3">
                <input onChange={handleInputChange} value={job.amount} ref={register({ required: true })}
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
              <textarea onChange={handleInputChange} value={job.description} ref={register({ required: true })}
                id="textarea" name="description" cols="40" rows="5" class="form-control"></textarea>
              <div className="error text-danger">
                {errors.description && typeSubValidation.description}
              </div>
            </div>
          </div>


          <div class="form-group row">
            <label for="text4" class="col-4 col-form-label">Enrollment fee </label>
            <div class="col-8">
              <div class="input-group mb-3">
                <input onChange={handleInputChange} value={job.fee} ref={register({ required: true })}
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
            <label for="select1" class="col-4 col-form-label"><span></span>Payment Plan  <i data-tip="Payment mode" class="fa fa-question-circle" aria-hidden="true"></i>  </label>
            <div class="col-8">
              <select onChange={handleInputChange} value={job.time_payment} ref={register({ required: true })}
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
    </div>
  )
};

AddTypeSubs.propTypes = {};

AddTypeSubs.defaultProps = {};

export default AddTypeSubs;
