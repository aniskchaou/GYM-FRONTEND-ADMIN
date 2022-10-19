
import React, { useState } from 'react';
import './AddGroupe.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import groupeMessage from '../../../main/messages/groupeMessage'
import groupeValidation from '../../../main/validations/groupeValidation'
import groupeHTTPService from '../../../main/services/groupeHTTPService';
import ReactTooltip from 'react-tooltip';
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';

const AddGroupe = (props) => {

  const initialState = {
    groupe_name: "",

  };

  const { register, handleSubmit, errors } = useForm()
  const [groupe, setGroupe] = useState(initialState);

  const onSubmit = (data) => {
    groupeHTTPService.createGroupe(data).then(data => {
      setGroupe(initialState)
      showMessage('Confirmation', groupeMessage.add, 'success')
      props.closeModal(data)
    }).catch(e => {
      showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
    })

  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setGroupe({ ...groupe, [name]: value });
  };


  return (
    <div className="AddGroupe">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReactTooltip />
        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Groupe Name <i data-tip="Group Name" class="fa fa-question-circle" aria-hidden="true"></i> </label>
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
            <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i>Save </button>
          </div>
        </div>

      </form>
    </div>
  )
};

AddGroupe.propTypes = {};

AddGroupe.defaultProps = {};

export default AddGroupe;
