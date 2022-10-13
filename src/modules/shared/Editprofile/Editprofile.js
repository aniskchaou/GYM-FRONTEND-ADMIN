

import './Editprofile.css';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import userHTTPService from '../../../main/services/userHTTPService'

const Editprofile = (props) => {

  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [groupe, setGroupe] = useState(props.groupe);

  useEffect(() => {
    setGroupe(props.user)
  }, [props.user]);


  const onSubmit = (data) => {
    userHTTPService.updateUser(groupe.id, groupe).then(data => {
      props.closeModal()
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setGroupe({ ...groupe, [name]: value });
  };


  return (
    <div className="EditGroupe">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Full Name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={groupe?.name} ref={register({ required: true })}
              id="text" name="name" type="text" class="form-control" />

          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Date of birth</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={groupe?.birthday} ref={register({ required: true })}
              id="text" name="birthday" type="date" class="form-control" />

          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Email</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={groupe?.email} ref={register({ required: true })}
              id="text" name="email" type="text" class="form-control" />

          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Telephone</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={groupe?.telephone} ref={register({ required: true })}
              id="text" name="telephone" type="text" class="form-control" />

          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Address</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={groupe?.address} ref={register({ required: true })}
              id="text" name="address" type="text" class="form-control" />

          </div>
        </div>


        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary">Save </button>
          </div>
        </div>

      </form>
    </div>
  )
};

Editprofile.propTypes = {};

Editprofile.defaultProps = {};

export default Editprofile;
