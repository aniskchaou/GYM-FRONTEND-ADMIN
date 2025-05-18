
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
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';

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

  const [pricing, setPricing] = useState('');
  const [duration, setDuration] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [accessToTrainingTimes, setAccessToTrainingTimes] = useState(1);

  const [cost, setCost] = useState('');
  const [frequency, setFrequency] = useState('');
  const [frequencyType, setFrequencyType] = useState('');
  const [signUpFee, setSignUpFee] = useState('');
  const [chargeLateFees, setChargeLateFees] = useState(false);
  const [lateFeesAfter, setLateFeesAfter] = useState('');

  const [membershipFeeOnRenewal, setMembershipFeeOnRenewal] = useState(false);
  const [documents, setDocuments] = useState(null);

  const [limitedDuration, setLimitedDuration] = useState('');
  const [cancellationFee, setCancellationFee] = useState('');

  const [periodicStart, setPeriodicStart] = useState('');
  const [periodicEnd, setPeriodicEnd] = useState('');

  const [maxMembers, setMaxMembers] = useState(1);
  const [availableForSignup, setAvailableForSignup] = useState(false);
  const [availableInPortal, setAvailableInPortal] = useState(false);
  const [canBookSessions, setCanBookSessions] = useState(false);

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
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setJob({ ...job, [name]: value });
  };



  const handleDocumentsChange = (e) => {
      setDocuments(e.target.files[0]);
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
                <option value="Silver">Silver</option>
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


        <label>
                Pricing:
                <select value={pricing} onChange={(e) => setPricing(e.target.value)}>
                    <option value="">Select Pricing</option>
                    <option value="Recurring">Recurring</option>
                    <option value="OneTime">One Time</option>
                    <option value="PerSession">Per-Session</option>
                    <option value="Trial">Trial</option>
                </select>
            </label>

            {pricing === 'Recurring' && (
                <>
                    <label>
                        Cost:
                        <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Frequency Every:
                        <input type="number" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
                        <select value={frequencyType} onChange={(e) => setFrequencyType(e.target.value)}>
                            <option value="Days">Days</option>
                            <option value="Weeks">Weeks</option>
                            <option value="Months">Months</option>
                            <option value="Years">Years</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Sign-Up Fee:
                        <input type="number" value={signUpFee} onChange={(e) => setSignUpFee(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Charge Late Fees:
                        <input type="checkbox" checked={chargeLateFees} onChange={(e) => setChargeLateFees(e.target.checked)} />
                    </label>
                    <br />
                    {chargeLateFees && (
                        <label>
                            After: <input type="number" value={lateFeesAfter} onChange={(e) => setLateFeesAfter(e.target.value)} /> days
                        </label>
                    )}
                </>
            )}

            {pricing === 'OneTime' && (
                <>
                    <label>
                        Cost:
                        <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Sign-Up Fee:
                        <input type="number" value={signUpFee} onChange={(e) => setSignUpFee(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Charge Late Fees:
                        <input type="checkbox" checked={chargeLateFees} onChange={(e) => setChargeLateFees(e.target.checked)} />
                    </label>
                    <br />
                    <label>
                        Charge Membership Fee Again on Auto Renewal:
                        <input type="checkbox" checked={membershipFeeOnRenewal} onChange={(e) => setMembershipFeeOnRenewal(e.target.checked)} />
                    </label>
                </>
            )}

            {(pricing === 'PerSession' || pricing === 'Trial') && (
                <>
                    <label>
                        Cost:
                        <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Sign-Up Fee:
                        <input type="number" value={signUpFee} onChange={(e) => setSignUpFee(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Charge Late Fees:
                        <input type="checkbox" checked={chargeLateFees} onChange={(e) => setChargeLateFees(e.target.checked)} />
                    </label>
                </>
            )}

            <br />
            <label>
                Documents:
                <input type="file" onChange={handleDocumentsChange} />
            </label>

            <br />
            <label>
                Duration:
                <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                    <option value="">Select Duration</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="LimitedDuration">Limited Duration</option>
                    <option value="Periodic">Periodic</option>
                </select>
            </label>

            {duration === 'LimitedDuration' && (
                <>
                    <label>
                        Duration (Months or Days):
                        <input type="text" value={limitedDuration} onChange={(e) => setLimitedDuration(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Cancellation Fee:
                        <input type="number" value={cancellationFee} onChange={(e) => setCancellationFee(e.target.value)} />
                    </label>
                </>
            )}

            {duration === 'Periodic' && (
                <>
                    <label>
                        Start:
                        <input type="date" value={periodicStart} onChange={(e) => setPeriodicStart(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        End:
                        <input type="date" value={periodicEnd} onChange={(e) => setPeriodicEnd(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Cancellation Fee:
                        <input type="number" value={cancellationFee} onChange={(e) => setCancellationFee(e.target.value)} />
                    </label>
                </>
            )}

            <br />
            <label>
                Access To Training Times:
                <input type="number" value={accessToTrainingTimes} min="1" max="10" onChange={(e) => setAccessToTrainingTimes(e.target.value)} />
                <select value={frequencyType} onChange={(e) => setFrequencyType(e.target.value)}>
                    <option value="Days">Days</option>
                    <option value="Weeks">Weeks</option>
                </select>
            </label>
            
            <br />
            <label>
                Enrollment:
                <select value={enrollment} onChange={(e) => setEnrollment(e.target.value)}>
                    <option value="unlimited">Unlimited</option>
                    <option value="limited">Limited</option>
                </select>
            </label>

            {enrollment === 'limited' && (
                <>
                    <label>
                        Maximum Members:
                        <input type="number" value={maxMembers} min="1" max="10" onChange={(e) => setMaxMembers(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Available for selection on the sign-up form:
                        <input type="checkbox" checked={availableForSignup} onChange={(e) => setAvailableForSignup(e.target.checked)} />
                    </label>
                    <br />
                    <label>
                        Available for selection in the member portal:
                        <input type="checkbox" checked={availableInPortal} onChange={(e) => setAvailableInPortal(e.target.checked)} />
                    </label>
                    <br />
                    <label>
                        Members can book sessions:
                        <input type="checkbox" checked={canBookSessions} onChange={(e) => setCanBookSessions(e.target.checked)} />
                    </label>
                </>
            )}




      </div>
    </div>
  )
};

AddTypeSubs.propTypes = {};

AddTypeSubs.defaultProps = {};

export default AddTypeSubs;
