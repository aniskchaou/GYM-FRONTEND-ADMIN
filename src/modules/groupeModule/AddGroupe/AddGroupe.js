import React from 'react';
import PropTypes from 'prop-types';
import './AddGroupe.css';

const AddGroupe = () => (
<div className="AddGroupe">
<form>
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Nom du groupe</label> 
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

AddGroupe.propTypes = { };

AddGroupe.defaultProps = { };

export default AddGroupe;
