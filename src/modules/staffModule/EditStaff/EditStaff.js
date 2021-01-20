import React from 'react';
import PropTypes from 'prop-types';
import './EditStaff.css';

const EditStaff = () => (
  <div className="EditStaff">
     <form>
  <div class="form-group row">
    <label for="text1" class="col-4 col-form-label">Nom</label> 
    <div class="col-8">
      <input id="text1" name="text1" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Prénom</label> 
    <div class="col-8">
      <input id="text" name="text" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text2" class="col-4 col-form-label">Date de naissance</label> 
    <div class="col-8">
      <input id="text2" name="text2" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="select" class="col-4 col-form-label">Role</label> 
    <div class="col-8">
      <select id="select" name="select" class="custom-select">
        <option value="rabbit">Yoga</option>
        <option value="duck">Fitness</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="text3" class="col-4 col-form-label">Adresse</label> 
    <div class="col-8">
      <input id="text3" name="text3" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text4" class="col-4 col-form-label">Email</label> 
    <div class="col-8">
      <input id="text4" name="text4" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text5" class="col-4 col-form-label">Mobile</label> 
    <div class="col-8">
      <input id="text5" name="text5" type="text" class="form-control"/>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
  </div>
);

EditStaff.propTypes = {};

EditStaff.defaultProps = {};

export default EditStaff;
