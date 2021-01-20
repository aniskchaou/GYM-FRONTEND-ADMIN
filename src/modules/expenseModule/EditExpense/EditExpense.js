import React from 'react';
import PropTypes from 'prop-types';
import './EditExpense.css';

const EditExpense = () => (
  <div className="EditExpense">
 <form>
  <div class="form-group row">
    <label for="text1" class="col-4 col-form-label">Nom du fournisseur</label> 
    <div class="col-8">
      <input id="text1" name="text1" type="text" class="form-control"/>
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

EditExpense.propTypes = {};

EditExpense.defaultProps = {};

export default EditExpense;
