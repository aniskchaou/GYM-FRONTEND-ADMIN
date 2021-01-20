import React from 'react';
import PropTypes from 'prop-types';
import './EditActivity.css';

const EditActivity = () => (
  <div className="EditActivity">
   <form>
  <div class="form-group row">
    <label for="select" class="col-4 col-form-label">Catégorie</label> 
    <div class="col-8">
      <select id="select" name="select" class="custom-select">
        <option value="rabbit">Gymnastique</option>
        <option value="duck">Fitness</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Titre de l'activité</label> 
    <div class="col-8">
      <input id="text" name="text" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="select1" class="col-4 col-form-label">Affecter au membre du personnel</label> 
    <div class="col-8">
      <select id="select1" name="select1" class="custom-select">
        <option value="rabbit">Somerville Rossignol</option>
        <option value="duck">Romaine Gervais</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="select2" class="col-4 col-form-label">Type d'adhésion</label> 
    <div class="col-8">
      <select id="select2" name="select2" class="custom-select">
        <option value="rabbit">Primium</option>
        <option value="duck">Gold</option>
      </select>
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

EditActivity.propTypes = {};

EditActivity.defaultProps = {};

export default EditActivity;
