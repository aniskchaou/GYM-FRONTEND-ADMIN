import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditFrontOffice.css';
import expenseHTTPService from '../../../main/services/expenseHTTPService';
import showMessage from '../../../libraries/messages/messages';
import frontOfficeHTTPService from '../../../main/services/frontOfficeHTTPService';
import { useForm } from 'react-hook-form';
const EditFrontOffice = (props) => {
  const { register, handleSubmit, errors } = useForm() // initialise the hook
  const [frontOffice, setFrontOffice] = useState(props.frontOffice);

  useEffect(() => {
    setFrontOffice(props.frontOffice)
  }, [props.frontOffice]);


  const onSubmit = (data) => {

    //ExpenseTestService.update(props.expense, data)
    console.log(props.frontOffice.id)
    frontOfficeHTTPService.editFrontOffice(props.frontOffice.id, data).then(data => {
      // props.closeModal()
      console.log(data)
      showMessage('Confirmation', "expenseMessage.edit", 'success')
    })

  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFrontOffice({ ...frontOffice, [name]: value });
  };

  return (
    <div className="EditFrontOffice">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Slider Title</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.sliderTitle} ref={register({ required: true })}
              id="text" name="sliderTitle" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Ledt Button</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.leftButtonTitle} ref={register({ required: true })}
              id="text" name="leftButtonTitle" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Group Name</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.rightButtonTitle} ref={register({ required: true })}
              id="text" name="rightButtonTitle" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Member</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.memberstitle} ref={register({ required: true })}
              id="text" name="memberstitle" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Content</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.content} ref={register({ required: true })}
              id="text" name="content" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Footer</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.footer} ref={register({ required: true })}
              id="text" name="footer" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">About us</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.aboutustitle} ref={register({ required: true })}
              id="text" name="aboutustitle" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">sub Title</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.subTitle} ref={register({ required: true })}
              id="text" name="subTitle" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Contact Description</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.contactDescription} ref={register({ required: true })}
              id="text" name="contactDescription" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Trainer </label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.trainerstitle} ref={register({ required: true })}
              id="text" name="trainerstitle" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Quote</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.quote1Title} ref={register({ required: true })}
              id="text" name="quote1Title" type="text" class="form-control" />
          </div>
        </div>



        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Quote description</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.quote1Description} ref={register({ required: true })}
              id="text" name="quote1Description" type="text" class="form-control" />
          </div>
        </div>


        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Quote description</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.quote2Description} ref={register({ required: true })}
              id="text" name="quote2Description" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Value </label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.valuetitle} ref={register({ required: true })}
              id="text" name="valuetitle" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Value 1</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.value1Title} ref={register({ required: true })}
              id="text" name="value1Title" type="text" class="form-control" />
          </div>
        </div>



        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">description 1</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.description1} ref={register({ required: true })}
              id="text" name="description1" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">description 3</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.description3} ref={register({ required: true })}
              id="text" name="description3" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Value 2</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.value3Title} ref={register({ required: true })}
              id="text" name="value3Title" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">description 2</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.description2} ref={register({ required: true })}
              id="text" name="description2" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Testimonial 2</label>
          <div class="col-8">
            <input onChange={handleInputChange} value={frontOffice.value2Title} ref={register({ required: true })}
              id="text" name="value2Title" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary"><i class="far fa-save"></i>Save </button>
          </div>
        </div>

      </form>
    </div>
  );
}
EditFrontOffice.propTypes = {};

EditFrontOffice.defaultProps = {};

export default EditFrontOffice;
