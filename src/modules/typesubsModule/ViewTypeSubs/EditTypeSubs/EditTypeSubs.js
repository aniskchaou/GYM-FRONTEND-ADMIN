import React from 'react';
import PropTypes from 'prop-types';
import './EditTypeSubs.css';

const EditTypeSubs = () => (
  <div className="EditTypeSubs">
       <form>
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Nom du membre</label> 
    <div class="col-8">
      <input id="text" name="text" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="select" class="col-4 col-form-label">Catégorie d'adhésion</label> 
    <div class="col-8">
      <select id="select" name="select" class="custom-select">
        <option value="Glod">Gold</option>
        <option value="Premium">Premium</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="text1" class="col-4 col-form-label">Période d'adhésion</label> 
    <div class="col-8">
      <input id="text1" name="text1" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text2" class="col-4 col-form-label">Limite d'adhésion</label> 
    <div class="col-8">
      <input id="text2" name="text2" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text3" class="col-4 col-form-label">Montant de l'adhésion</label> 
    <div class="col-8">
      <input id="text3" name="text3" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="textarea" class="col-4 col-form-label">Description de l'adhésion</label> 
    <div class="col-8">
      <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control"></textarea>
    </div>
  </div>
  <div class="form-group row">
    <label for="text4" class="col-4 col-form-label">Frais d'inscription</label> 
    <div class="col-8">
      <input id="text4" name="text4" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="select1" class="col-4 col-form-label">Plan de versement</label> 
    <div class="col-8">
      <select id="select1" name="select1" class="custom-select">
        <option value="rabbit">1 semaine</option>
        <option value="duck">1 mois</option>
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

EditTypeSubs.propTypes = {};

EditTypeSubs.defaultProps = {};

export default EditTypeSubs;
