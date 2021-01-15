import React from 'react';
import PropTypes from 'prop-types';
import './EditActivity.css';

const EditActivity = () => (
  <div className="EditActivity">
     <form method="post" accept-charset="utf-8" class="validateForm form-horizontal" role="form"
    onsubmit="return validate_multiselect()" id="form" action="/dasinfoau/php/gym/activity/add-activity">
    <div><input type="hidden" name="_method" value="POST" /></div>
    <div class="form-group">
      <label class="control-label col-md-3" for="email">
        <font>
          <font>Sélectionnez la catégorie </font>
        </font><span class="text-danger">
          <font>
            <font>*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6 add_listcat module_padding">
        <select name="cat_id" class="validate[required] cat_list form-control">
          <option value="" selected="selected">
            <font>
              <font>Choisir une catégorie</font>
            </font>
          </option>
          <option value="1">
            <font>
              <font>Ordinaire</font>
            </font>
          </option>
          <option value="2">
            <font>
              <font>Limité</font>
            </font>
          </option>
          <option value="3">
            <font>
              <font>Total des exercices de gymnastique pour les abdominaux (abdominaux)</font>
            </font>
          </option>
          <option value="4">
            <font>
              <font>Exercices de gymnastique totale pour les jambes</font>
            </font>
          </option>
          <option value="5">
            <font>
              <font>Exercices de gymnastique totale pour les biceps</font>
            </font>
          </option>
          <option value="6">
            <font>
              <font>Exercice</font>
            </font>
          </option>
        </select>
      </div>
      <div class="col-md-2">
        <button class="form-control add_category btn btn-default btn-flat" type="button"
          data-url="/dasinfoau/php/gym/gym-ajax/add-category">
          <font>
            <font>ajouter une catégorie</font>
          </font>
        </button>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-md-3" for="email">
        <font>
          <font>Titre de l'activité </font>
        </font><span class="text-danger">
          <font>
            <font>*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6">
        <div class="input text"><input type="text" name="title" class="validate[required,maxSize[40]] form-control"
            id="" value="" /></div>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-md-3 " for="email">
        <font>
          <font>Affecter au membre du personnel </font>
        </font><span class="text-danger">
          <font>
            <font>*</font>
          </font>
        </span>
      </label>

      <div class="col-md-6 module_padding">
        <select name="assigned_to" class="validate[required] form-control">
          <option value="" selected="selected">
            <font>
              <font>Sélectionner un membre du personnel</font>
            </font>
          </option>
          <option value="2">
            <font>
              <font>Sergio Romero</font>
            </font>
          </option>
        </select>
      </div>

      <div class="col-md-3">
        <a href="/dasinfoau/php/gym/StaffMembers/addStaff" class="btn btn-flat btn-default">
          <font>
            <font>Ajouter un membre du personnel</font>
          </font>
        </a>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-md-3" for="email">
        <font>
          <font>Sélectionnez l'adhésion </font>
        </font><span class="text-danger">
          <font>
            <font>*</font>
          </font>
        </span>
      </label>
      <div class="col-md-6 module_padding">
        <input type="hidden" name="membership_id" value="" />
        <select name="membership_id[]" multiple="multiple" class="form-control membership_list validate[required]"
          id="membership">
          <option value="1">
            <font>Adhésion Platine</font>
          </option>
          <option value="2">
            <font>Abonnement Or</font>
          </option>
          <option value="3">
            <font>Adhésion Silver</font>
          </option>
          <option value="4">
            <font>Plan de base</font>
          </option>
        </select>
      </div>


      <div class="btn-group">
        <button type="button" class="multiselect dropdown-toggle btn btn-default" data-toggle="dropdown"
          title="Aucune sélection"><span class="multiselect-selected-text">
            <font>
              <font>Aucune sélection</font>
            </font>
          </span> <b class="caret">
          </b></button>
        <ul class="multiselect-container dropdown-menu">
          <li class="multiselect-item multiselect-all"><a tabindex="0" class="multiselect-all">
              <label class="checkbox"><input type="checkbox" value="multiselect-all" />
                <font>
                  <font> Tout sélectionner</font>
                </font>
              </label></a></li>
          <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="1" />
                <font>
                  <font> Adhésion Platine</font>
                </font>
              </label></a></li>
          <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="2" />
                <font>
                  <font> Abonnement Or</font>
                </font>
              </label></a></li>
          <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="3"/>
                <font>
                  <font> Adhésion Silver</font>
                </font>
              </label></a></li>
          <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="4" />
                <font>
                  <font> Plan de base</font>
                </font>
              </label></a></li>
        </ul>
      </div>
    </div>
    <div class="col-md-3">
      <a href="/dasinfoau/php/gym/Membership/add" class="btn btn-flat btn-default">
        <font>
          <font>Ajouter un abonnement</font>
        </font>
      </a>
    </div>


<div id="video" class="video_div">
  <div class="form-group">
    <label class="control-label col-md-3" for="email">
      <font>
        <font>Ajouter un lien intégré Youtube</font>
      </font>
    </label>

    <div class="col-md-6 module_padding">
      <textarea name="video[]" rows="5" cols="70" class="form-control resize"></textarea>
    </div>
    <div class="col-md-2">
      <button type="button" class="btn btn-flat btn-default">
        <i class="entypo-trash">
          <font>
            <font>Effacer</font>
          </font>
        </i>
      </button>
    </div>
  </div>
</div>

<div class="form-group">
  <label class="col-md-3 control-label"></label>
  <div class="col-md-3">
    <input type="hidden" id="count" value="1" />
    <button id="add_new_entry" class="btn btn-flat btn-default btn-sm btn-icon icon-left " type="button"
      name="add_new_entry">
      <font>
        <font>Ajouter plus</font>
      </font>
    </button>
  </div>
</div>
<button class="col-md-offset-3 btn btn-flat btn-success" name="add_activity" type="submit" >
<font>
  <font>Enregistrer l'activité</font>
</font></button>
</form>
  </div>
);

EditActivity.propTypes = {};

EditActivity.defaultProps = {};

export default EditActivity;
