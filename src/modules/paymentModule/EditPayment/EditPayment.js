import React from 'react';
import PropTypes from 'prop-types';
import './EditPayment.css';

const EditPayment = () => (
  <div className="EditPayment">
       <form>
  <div class="form-group row">
    <label for="select1" class="col-4 col-form-label">Membre</label> 
    <div class="col-8">
      <select id="select1" name="select1" class="custom-select">
        <option value="rabbit">Victor Gaudreau</option>
        <option value="duck">Albracca Tougas</option>
        <option value="fish">Fish</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="select" class="col-4 col-form-label">Type d'adhésion</label> 
    <div class="col-8">
      <select id="select" name="select" class="custom-select">
        <option value="rabbit">Premium</option>
        <option value="duck">Gold</option>
        <option value="fish">Fish</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="text8" class="col-4 col-form-label">Montant</label> 
    <div class="col-8">
      <input id="text8" name="text8" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Adhésion valable à partir de</label> 
    <div class="col-8">
      <input id="text" name="text" type="text" class="form-control"/>
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

EditPayment.propTypes = {};

EditPayment.defaultProps = {};

export default EditPayment;
