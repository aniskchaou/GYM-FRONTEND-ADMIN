import React from 'react';
import PropTypes from 'prop-types';
import './EditStaff.css';

const EditStaff = () => (
  <div className="EditStaff">
    <form enctype="multipart/form-data" method="post" accept-charset="utf-8" class="validateForm form-horizontal"
  role="form" onsubmit="return validate_multiselect()" id="form" action="/dasinfoau/php/gym/staff-members/add-staff">
  <div ><input type="hidden" name="_method" value="POST"/></div>
  <fieldset>
    <legend>
      <font   >
        <font   >Informations personnelles</font>
      </font>
    </legend>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Prénom </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6">
        <div class="input text">
          <div class="form-validation-field-0formError parentFormform formError"
            >
            <div class="formErrorContent">
              <font   >
                <font   >* Ce champ est obligatoire </font>
              </font><br/>
              <font   >
                <font   >* Lettres uniquement</font>
              </font><br/>
            </div>
           
          </div><input type="text" name="first_name"
            class="form-control validate[required,custom[onlyLetterSp],maxSize[30]]" id="form-validation-field-0"
            value=""/>
        </div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Deuxième nom</font>
        </font>
      </label>
      <div class="col-md-6">
        <div class="input text"><input type="text" name="middle_name"
            class="form-control validate[custom[onlyLetterSp],maxSize[30]]" id="" value=""/></div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Nom de famille </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6">
        <div class="input text"><input type="text" name="last_name"
            class="form-control validate[required,custom[onlyLetterSp],maxSize[30]]" id="" value="" /></div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Sexe </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6 checkbox"><input type="hidden" name="gender" value=""/><label for="gender-male"><input
            type="radio" name="gender" value="male" class="gender" id="gender-male" checked="checked"/>
          <font   >
            <font   > Masculin</font>
          </font>
        </label><label for="gender-female"><input type="radio" name="gender" value="female" class="gender"
            id="gender-female"/>
          <font   >
            <font   > Femme</font>
          </font>
        </label></div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Date de naissance </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6">
        <div class="input text"><input type="text" name="birth_date"
            class="form-control dob date validate[required] hasDatepicker" id="dp1609370367739" value=""/></div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-2 col-xs-12 assign_box" for="email">
        <font   >
          <font   >Attribuer un rôle </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6 col-xs-6"><select name="role" class="form-control validate[required] roles_list">
          <option value="">
            <font   >
              <font   >Sélectionnez un rôle</font>
            </font>
          </option>
          <option value="1">
            <font   >
              <font   >Yoga</font>
            </font>
          </option>
        </select></div>
      <div class="col-md-2 col-xs-6"><a href="javascript:void(0)" class="add-role btn btn-flat btn-success"
          data-url="/dasinfoau/php/gym/gym-ajax/add-role"
          >
          <font   >
            <font   >Ajouter enlever</font>
          </font>
        </a></div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Spécialisation </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8"><input type="hidden" name="s_specialization" value=""/><select name="s_specialization[]"
          multiple="multiple" class="form-control validate[required] specialization_list multi" id="specialization"
        >
          <option value="1">
            <font   >
              <font   >Yoga</font>
            </font>
          </option>
          <option value="2">
            <font   >
              <font   >La musculation</font>
            </font>
          </option>
          <option value="3">
            <font   >
              <font   >Cardio</font>
            </font>
          </option>
        </select>
        <div class="btn-group"><button type="button" class="multiselect dropdown-toggle btn btn-default"
            data-toggle="dropdown" title="Aucune sélection"><span class="multiselect-selected-text">
              <font   >
                <font   >Aucune sélection</font>
              </font>
            </span> <b class="caret"></b></button>
          <ul class="multiselect-container dropdown-menu">
            <li class="multiselect-item multiselect-all"><a tabindex="0" class="multiselect-all"><label
                  class="checkbox"><input type="checkbox" value="multiselect-all"/>
                  <font   >
                    <font   > Tout sélectionner</font>
                  </font>
                </label></a></li>
            <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="1"/>
                  <font   >
                    <font   > Yoga</font>
                  </font>
                </label></a></li>
            <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="2"/>
                  <font   >
                    <font   > La musculation</font>
                  </font>
                </label></a></li>
            <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="3"/>
                  <font   >
                    <font   > Cardio</font>
                  </font>
                </label></a></li>
          </ul>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" class="add-spec btn btn-flat btn-success"
          data-url="/dasinfoau/php/gym/GymAjax/AddSpecialization"
          >
          <font   >
            <font   >Ajouter enlever</font>
          </font>
        </a>
      </div>
    </div>
  </fieldset>
  <fieldset>
    <legend>
      <font   >
        <font   >Informations de contact</font>
      </font>
    </legend>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Adresse de la ville de résidence </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6">
        <div class="input text"><input type="text" name="address" class="form-control validate[required,maxSize[150]]"
            id="" value=""/></div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Ville </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6">
        <div class="input text"><input type="text" name="city"
            class="form-control validate[required,custom[onlyLetterSp],maxSize[20]]" id="" value=""/></div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Numéro de mobile </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6">
        <div class="input-group">
          <div class="input-group-addon">
            <font   >
              <font   >+61</font>
            </font>
          </div>
          <div class="input text"><input type="text" name="mobile"
              class="form-control validate[required,custom[onlyNumberSp],maxSize[15]]" id="" value="" /></div>
        </div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Téléphone</font>
        </font>
      </label>
      <div class="col-md-6">
        <div class="input text"><input type="text" name="phone"
            class="form-control validate[custom[onlyNumberSp],maxSize[15]]" id="" value="" /></div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Courriel </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6">
        <div class="input text"><input type="text" name="email" class="form-control validate[required,custom[email]]"
            id="" value="" /></div>
      </div>
    </div>
  </fieldset>
  <fieldset>
    <legend>
      <font   >
        <font   >Informations de connexion</font>
      </font>
    </legend>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Nom d'utilisateur </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6">
        <div class="input text"><input type="text" name="username" class="form-control validate[required]" id=""
            value="" /></div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Mot de passe </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6"><input type="password" name="password" class="form-control validate[required]" value="" />
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-2" for="email">
        <font   >
          <font   >Afficher l'image </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-4"><input type="file" name="image" class="form-control" id="imgInp" />
       
        <br/><img src="/dasinfoau/php/gym/webroot/upload/Thumbnail-img.png" class="img-responsive" id="blah"
          height="100px" width="150px"/>
      </div>
    </div>
  </fieldset><br/>
  <div class="col-md-2 col-md-offset-2"><button class="btn btn-flat btn-success" name="add_group" type="submit"
      >
      <font   >
        <font   >Sauver le personnel</font>
      </font>
    </button></div>
</form>
  </div>
);

EditStaff.propTypes = {};

EditStaff.defaultProps = {};

export default EditStaff;
