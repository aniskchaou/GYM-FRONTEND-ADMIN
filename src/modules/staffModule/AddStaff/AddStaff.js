
import React, { useState } from 'react';
import './AddStaff.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import staffMessage from '../../../main/messages/staffMessage'
import staffValidation from '../../../main/validations/staffValidation'
import StaffTestService from '../../../main/mocks/StaffTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddStaff = () => {
  const initialState = {
    date: '',
    role: '',
    address: '',
    email: '',
    mobile: '',
    first_name: '',
    last_name: '',
  };

  const { register, handleSubmit, errors } = useForm()
  const [staff, setStaff] = useState(initialState);

  const onSubmit = (data) => {
    //saveStaff(data)
    StaffTestService.create(data)
    setStaff(initialState)
    showMessage('Confirmation', staffMessage.add, 'success')
  }

  const saveStaff = (data) => {

    HTTPService.create(data)
      .then(response => {
        setStaff(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setStaff({ ...staff, [name]: value });
  };

  return (
    <div className="AddStaff">

      <form onSubmit={handleSubmit(onSubmit)} onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="text1" class="col-4 col-form-label">Nom</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={staff.first_name} ref={register({ required: true })}
              id="text1" name="first_name" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.first_name && staffValidation.first_name}
            </div>
          </div>

        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Prénom</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={staff.last_name} ref={register({ required: true })}
              id="text" name="last_name" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.last_name && staffValidation.last_name}
            </div>
          </div>

        </div>


        <div class="form-group row">
          <label for="text2" class="col-4 col-form-label">Date de naissance</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={staff.date} ref={register({ required: true })}
              id="text2" name="date" type="dare" class="form-control" />
            <div className="error text-danger">
              {errors.date && staffValidation.date}
            </div>
          </div>

        </div>


        <div class="form-group row">
          <label for="select" class="col-4 col-form-label">Role</label>
          <div class="col-8">
            <select onChange={handleInputChange} value={staff.role} ref={register({ required: true })}
              id="select" name="role" class="custom-select">
              <option value="Yoga">Yoga</option>
              <option value="Fitness">Fitness</option>
            </select>
            <div className="error text-danger">
              {errors.role && staffValidation.role}
            </div>
          </div>

        </div>


        <div class="form-group row">
          <label for="text3" class="col-4 col-form-label">Adresse</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={staff.address} ref={register({ required: true })}
              id="text3" name="address" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.address && staffValidation.address}
            </div>
          </div>

        </div>

        <div class="form-group row">
          <label for="text4" class="col-4 col-form-label">Email</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={staff.email} ref={register({ required: true })}
              id="text4" name="email" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.email && staffValidation.email}
            </div>
          </div>

        </div>

        <div class="form-group row">
          <label for="text5" class="col-4 col-form-label">Mobile</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={staff.mobile} ref={register({ required: true })}
              id="text5" name="mobile" type="number" class="form-control" />
            <div className="error text-danger">
              {errors.mobile && staffValidation.mobile}
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

AddStaff.propTypes = {};

AddStaff.defaultProps = {};

export default AddStaff;
