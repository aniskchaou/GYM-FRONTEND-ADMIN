import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditGroupe.css';
import showMessage from '../../../libraries/messages/messages'
import groupeMessage from '../../../main/messages/groupeMessage'
import groupeValidation from '../../../main/validations/groupeValidation'
import GroupeTestService from '../../../main/mocks/GroupeTestService';
import { useForm } from 'react-hook-form';

const EditGroupe = (props) => {

  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [groupe, setGroupe] = useState(props.groupe);

  useEffect(() => {
    setGroupe(props.groupe)
  }, [props.groupe]);


  const onSubmit = (data) => {

    GroupeTestService.update(props.groupe, data)
    showMessage('Confirmation', groupeMessage.edit, 'success')
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setGroupe({ ...groupe, [name]: value });
  };


  return (
    <div className="EditGroupe">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Nom du groupe</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={groupe.groupe_name} ref={register({ required: true })}
              id="text" name="groupe_name" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.groupe_name && groupeValidation.groupe_name}
            </div>
          </div>
        </div>


        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i>Sauvegarder</button>
          </div>
        </div>

      </form>
    </div>
  )
};

EditGroupe.propTypes = {};

EditGroupe.defaultProps = {};

export default EditGroupe;
