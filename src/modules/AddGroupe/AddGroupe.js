import React from 'react';
import PropTypes from 'prop-types';
import './AddGroupe.css';

const AddGroupe = () => (
<div className="AddGroupe">
  <form enctype="multipart/form-data" method="post" accept-charset="utf-8" class="validateForm addgroup"
    action="/dasinfoau/php/gym/gym-group/add-group">
    <div ><input type="hidden" name="_method" value="POST"/></div>
    <div class="form-group">
      <label class="control-label ">
        <font   >
          <font   >Nom du groupe </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="input text">
        <div class="form-validation-field-0formError parentFormundefined formError"
          >
          <div class="formErrorContent">
            <font   >
              <font   >* Ce champ est requis</font>
            </font><br/>
          </div>
        
        </div>
        <input type="text" name="name" class="form-control validate[required,maxSize[30]]" autofocus="autofocus"
          id="form-validation-field-0" value=""/>
      </div>
    </div>
    <div class="form-group"><label for="group-image">
        <font   >
          <font   >Image de groupe</font>
        </font>
      </label>
      <input type="file" name="image" class="form-control" id="imgInp"/>

    </div>
    <img src="/dasinfoau/php/gym//upload/Thumbnail-img.png" class="img-responsive" id="blah" height="100px"
      width="150px"/><br/><br/><button class="btn btn-flat btn-success" name="add_group" type="submit"
      >
      <font   >
        <font   >Enregistrer le groupe</font>
      </font>
    </button>
  </form>
</div>
);

AddGroupe.propTypes = { };

AddGroupe.defaultProps = { };

export default AddGroupe;
