import React from 'react';
import PropTypes from 'prop-types';
import './AddRevenue.css';

const AddRevenue = () => (
  <div className="AddRevenue">
  <form>
  <div class="form-group row">
    <label for="text1" class="col-4 col-form-label">Étiquette de revenu</label> 
    <div class="col-8">
      <input id="text1" name="text1" type="text" class="form-control"/>
    </div>
  </div>
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
    <label for="text8" class="col-4 col-form-label">Montant</label> 
    <div class="col-8">
      <input id="text8" name="text8" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Date</label> 
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

AddRevenue.propTypes = {};

AddRevenue.defaultProps = {};

export default AddRevenue;
