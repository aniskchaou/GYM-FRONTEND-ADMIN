import React, { useEffect, useState } from 'react';
import './EditGroupe.css';
import showMessage from '../../../libraries/messages/messages'
import groupeMessage from '../../../main/messages/groupeMessage'
import groupeValidation from '../../../main/validations/groupeValidation'
import { useForm } from 'react-hook-form';
import groupeHTTPService from '../../../main/services/groupeHTTPService'


const EditGroupe = (props) => {

  const { register, handleSubmit, errors } = useForm()
  const [groupe, setGroupe] = useState(props.groupe);

  useEffect(() => {
    setGroupe(props.groupe)
  }, [props.groupe]);


  const onSubmit = (data) => {
    groupeHTTPService.editGroupe(props.groupe, data).then(data => {
      props.closeModal()
      showMessage('Confirmation', groupeMessage.edit, 'success')
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
          <label for="text" class="col-4 col-form-label">Group Name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={groupe.name} ref={register({ required: true })}
              id="text" name="name" type="text" class="form-control" />
            <div className="error text-danger">
              {errors.name && groupeValidation.name}
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

EditGroupe.propTypes = {};

EditGroupe.defaultProps = {};

export default EditGroupe;
