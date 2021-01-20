import React from 'react';
import PropTypes from 'prop-types';
import './AddMember.css';

const AddMember = () => (
  <div className="AddMember">

<form>
  <div class="form-group row">
    <label for="text1" class="col-4 col-form-label">Nom</label> 
    <div class="col-8">
      <input id="text1" name="text1" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text2" class="col-4 col-form-label">Prénom</label> 
    <div class="col-8">
      <input id="text2" name="text2" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Date de naissance</label> 
    <div class="col-8">
      <input id="text" name="text" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="select1" class="col-4 col-form-label">Groupe</label> 
    <div class="col-8">
      <select id="select1" name="select1" class="custom-select">
        <option value="rabbit">Groupe Yoga</option>
        <option value="duck">Groupe Fitness</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="select2" class="col-4 col-form-label">Type d'adhésion</label> 
    <div class="col-8">
      <select id="select2" name="select2" class="custom-select">
        <option value="rabbit">Premium</option>
        <option value="duck">Gold</option>
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
    <label for="text4" class="col-4 col-form-label">Mobile</label> 
    <div class="col-8">
      <input id="text4" name="text4" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text5" class="col-4 col-form-label">Email</label> 
    <div class="col-8">
      <input id="text5" name="text5" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text6" class="col-4 col-form-label">Poids</label> 
    <div class="col-8">
      <input id="text6" name="text6" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text7" class="col-4 col-form-label">Taille</label> 
    <div class="col-8">
      <input id="text7" name="text7" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text8" class="col-4 col-form-label">Poitrine</label> 
    <div class="col-8">
      <input id="text8" name="text8" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text9" class="col-4 col-form-label">Cuisse</label> 
    <div class="col-8">
      <input id="text9" name="text9" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text10" class="col-4 col-form-label">Bras</label> 
    <div class="col-8">
      <input id="text10" name="text10" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text11" class="col-4 col-form-label">Graisse</label> 
    <div class="col-8">
      <input id="text11" name="text11" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text12" class="col-4 col-form-label">Date début</label> 
    <div class="col-8">
      <input id="text12" name="text12" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="text13" class="col-4 col-form-label">Date fin</label> 
    <div class="col-8">
      <input id="text13" name="text13" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="select" class="col-4 col-form-label">Type d'adhésion</label> 
    <div class="col-8">
      <select id="select" name="select" class="custom-select">
        <option value="rabbit">Rabbit</option>
        <option value="duck">Duck</option>
        <option value="fish">Fish</option>
      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="select3" class="col-4 col-form-label">Entreneur</label> 
    <div class="col-8">
      <select id="select3" name="select3" class="custom-select">
        <option value="rabbit">Romaine Gervais</option>
        <option value="duck">Victor Gaudreau</option>
        <option value="fish">Fish</option>
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

AddMember.propTypes = { };

AddMember.defaultProps = { };

export default AddMember;
