import React from 'react';
import PropTypes from 'prop-types';
import './AddTypeSubs.css';

const AddTypeSubs = () => (
  <div className="AddTypeSubs">
  <form enctype="multipart/form-data" method="post" accept-charset="utf-8" id="form"
    class="validateForm form-horizontal" onsubmit="return validate_multiselect()"
    action="/dasinfoau/php/gym/membership/add">
    <div   ><input type="hidden" name="_method" value="POST"/><input type="hidden" name="_csrfToken"
        value="70fba24f32c42384c2bfae98d71bad2adcc57601cc961f951380f2261a2af2bcd543a887e94201de888c85b4a901b331a6f4a12e1e4036b6d6a0a6c0a12e6a32"/>
    </div>
    <div class="form-group"><label class="control-label col-md-3">
        <font   >
          <font   >Nom du membre </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8">
        <div class="input text"><input type="text" name="membership_label"
            class="form-control validate[required,custom[onlyLetterSp],maxSize[50]]" id="" value=""/></div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-3">
        <font   >
          <font   >Catégorie d'adhésion </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-5 module_padding"><select name="membership_cat_id"
          class="form-control validate[required] cat_list">
          <option value="" selected="selected">
            <font   >
              <font   >Choisir une catégorie</font>
            </font>
          </option>
          <option value="1">
            <font   >
              <font   >Ordinaire</font>
            </font>
          </option>
          <option value="2">
            <font   >
              <font   >Limité</font>
            </font>
          </option>
          <option value="3">
            <font   >
              <font   >Total des exercices de gymnastique pour les abdominaux (abdominaux)
              </font>
            </font>
          </option>
          <option value="4">
            <font   >
              <font   >Exercices de gymnastique totale pour les jambes</font>
            </font>
          </option>
          <option value="5">
            <font   >
              <font   >Exercices de gymnastique totale pour les biceps</font>
            </font>
          </option>
          <option value="6">
            <font   >
              <font   >Exercice</font>
            </font>
          </option>
        </select></div>
      <div class="col-md-2"><button class="form-control add_category btn btn-success btn-flat" type="button"
          data-url="/dasinfoau/php/gym/gym-ajax/add-category"
          >
          <font   >
            <font   >ajouter une catégorie</font>
          </font>
        </button></div>
    </div>
    <div class="form-group"><label class="control-label col-md-3">
        <font   >
          <font   >Période d'adhésion </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8">
        <div class="input-group"><span class="input-group-addon">
            <font   >
              <font   >Nbre de jours</font>
            </font>
          </span>
          <div class="input text"><input type="text" name="membership_length"
              class="form-control validate[required,custom[onlyNumberSp],maxSize[4]]" id="" value=""/></div>
        </div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-3">
        <font   >
          <font   >Limite d'adhésion </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-3 module_padding"><label class="radio-inline"><input type="radio" class="check_limit"
            name="membership_class_limit" value="Limited" checked=""/>
          <font   >
            <font   >Limité</font>
          </font>
        </label>
        <label class="radio-inline"><input type="radio" class="check_limit" name="membership_class_limit"
            value="Unlimited"/>
          <font   >
            <font   >Illimité</font>
          </font>
        </label>
      </div>
      <div class="col-md-2 div_limit module_padding">
        <div class="input text"><input type="text" name="limit_days" placeholder="Nbre de classes"
            class="form-control validate[required,custom[onlyNumberSp],maxSize[2]]" id="" value=""/></div>
      </div>
      <div class="col-md-3 div_limit"><select name="limitation" class="form-control">
          <option value="per_week">
            <font   >
              <font   >Cours chaque semaine</font>
            </font>
          </option>
          <option value="per_month">
            <font   >
              <font   >Cours tous les mois</font>
            </font>
          </option>
        </select></div>
    </div>
    <div class="form-group"><label class="control-label col-md-3">
        <font   >
          <font   >Montant de l'adhésion </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8">
        <div class="input-group"><span class="input-group-addon">
            <font   >
              <font   >$</font>
            </font>
          </span>
          <div class="input text"><input type="text" name="membership_amount"
              class="form-control validate[required,custom[onlyNumberSp],maxSize[8]]" id="" value=""/></div>
        </div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-3">
        <font   >
          <font   >Sélectionnez la classe </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-5"><input type="hidden" name="membership_class" value=""/><select name="membership_class[]"
          multiple="multiple" class="form-control class_list"   >
          <option value="1">
            <font   >
              <font   >CINQ À DOUZE</font>
            </font>
          </option>
          <option value="2">
            <font   >
              <font   >Cours d'aérobic</font>
            </font>
          </option>
          <option value="3">
            <font   >
              <font   >Classe HIT</font>
            </font>
          </option>
          <option value="4">
            <font   >
              <font   >TOUS LES MEMBRES</font>
            </font>
          </option>
          <option value="5">
            <font   >
              <font   >Pilates</font>
            </font>
          </option>
          <option value="6">
            <font   >
              <font   >Classe de Zumba</font>
            </font>
          </option>
          <option value="7">
            <font   >
              <font   >Cours de Power Yoga</font>
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
                    <font   > CINQ À DOUZE</font>
                  </font>
                </label></a></li>
            <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="2"/>
                  <font   >
                    <font   > Cours d'aérobic</font>
                  </font>
                </label></a></li>
            <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="3"/>
                  <font   >
                    <font   > Classe HIT</font>
                  </font>
                </label></a></li>
            <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="4"/>
                  <font   >
                    <font   > TOUS LES MEMBRES</font>
                  </font>
                </label></a></li>
            <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="5"/>
                  <font   >
                    <font   > Pilates</font>
                  </font>
                </label></a></li>
            <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="6"/>
                  <font   >
                    <font   > Classe de Zumba</font>
                  </font>
                </label></a></li>
            <li><a tabindex="0"><label class="checkbox"><input type="checkbox" value="7"/>
                  <font   >
                    <font   > Cours de Power Yoga</font>
                  </font>
                </label></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-3">
        <font   >
          <font   >Plan de versement </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-2 module_padding">
        <div class="input text"><input type="text" name="installment_amount"
            class="form-control validate[required,custom[onlyNumberSp],maxSize[6]]" placeholder="Montant" id=""
            value=""/></div>
      </div>
      <div class="col-md-4 module_padding"><select name="install_plan_id"
          class="form-control plan_list validate[required]">
          <option value="" selected="selected">
            <font   >
              <font   >Sélectionnez un plan de versement</font>
            </font>
          </option>
          <option value="1">
            <font   >
              <font   >1 mois</font>
            </font>
          </option>
          <option value="2">
            <font   >
              <font   >1 semaine</font>
            </font>
          </option>
          <option value="3">
            <font   >
              <font   >1 année</font>
            </font>
          </option>
        </select></div>
      <div class="col-md-2"><button class="form-control add_plan btn btn-success btn-flat" type="button"
          data-url="/dasinfoau/php/gym/gym-ajax/add-instalment-plan"
          >
          <font   >
            <font   >Ajouter un plan de versement</font>
          </font>
        </button></div>
    </div>
    <div class="form-group"><label class="control-label col-md-3">
        <font   >
          <font   >Frais d'inscription </font>
        </font><span class="text-danger">
          <font   >
            <font   >*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8">
        <div class="input-group"><span class="input-group-addon">
            <font   >
              <font   >$</font>
            </font>
          </span>
          <div class="input text"><input type="text" name="signup_fee"
              class="form-control validate[required,custom[onlyNumberSp],maxSize[6]]" id="" value=""/></div>
        </div>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-3">
        <font   >
          <font   >Description de l'adhésion</font>
        </font>
      </label>
      <div class="col-md-8">
        <ul class="wysihtml5-toolbar" >
          <li class="dropdown">
            <a class="btn btn-default dropdown-toggle " data-toggle="dropdown">

              <span class="glyphicon glyphicon-font"></span>

              <span class="current-font">
                <font   >
                  <font   >Texte normal</font>
                </font>
              </span>
              <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
              <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="p" tabindex="-1"
                  href="javascript:;" unselectable="on">
                  <font   >
                    <font   >Texte normal</font>
                  </font>
                </a></li>
              <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" tabindex="-1"
                  href="javascript:;" unselectable="on">
                  <font   >
                    <font   >Titre 1</font>
                  </font>
                </a></li>
              <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" tabindex="-1"
                  href="javascript:;" unselectable="on">Heading 2</a></li>
              <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" tabindex="-1"
                  href="javascript:;" unselectable="on">Heading 3</a></li>
              <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h4" tabindex="-1"
                  href="javascript:;" unselectable="on">Heading 4</a></li>
              <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h5" tabindex="-1"
                  href="javascript:;" unselectable="on">Heading 5</a></li>
              <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h6" tabindex="-1"
                  href="javascript:;" unselectable="on">Heading 6</a></li>
            </ul>
          </li>
          <li>
            <div class="btn-group">
              <a class="btn  btn-default" data-wysihtml5-command="bold" title="CTRL + B" tabindex="-1"
                href="javascript:;" unselectable="on">
                <font   >
                  <font   >Audacieux</font>
                </font>
              </a>
              <a class="btn  btn-default" data-wysihtml5-command="italic" title="CTRL + I" tabindex="-1"
                href="javascript:;" unselectable="on">
                <font   >
                  <font   >Italique</font>
                </font>
              </a>
              <a class="btn  btn-default" data-wysihtml5-command="underline" title="CTRL + U" tabindex="-1"
                href="javascript:;" unselectable="on">
                <font   >
                  <font   >Souligner</font>
                </font>
              </a>

              <a class="btn  btn-default" data-wysihtml5-command="small" title="CTRL + S" tabindex="-1"
                href="javascript:;" unselectable="on">
                <font   >
                  <font   >Petit</font>
                </font>
              </a>

            </div>
          </li>
          <li>
            <a class="btn  btn-default" data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="blockquote"
              data-wysihtml5-display-format-name="false" tabindex="-1" href="javascript:;" unselectable="on">

              <span class="glyphicon glyphicon-quote"></span>

            </a>
          </li>
          <li>
            <div class="btn-group">
              <a class="btn  btn-default" data-wysihtml5-command="insertUnorderedList" title="Liste non ordonnée"
                tabindex="-1" href="javascript:;" unselectable="on">

                <span class="glyphicon glyphicon-list"></span>

              </a>
              <a class="btn  btn-default" data-wysihtml5-command="insertOrderedList" title="Liste ordonnée"
                tabindex="-1" href="javascript:;" unselectable="on">

                <span class="glyphicon glyphicon-th-list"></span>

              </a>
              <a class="btn  btn-default" data-wysihtml5-command="Outdent" title="Outdent" tabindex="-1"
                href="javascript:;" unselectable="on">

                <span class="glyphicon glyphicon-indent-right"></span>

              </a>
              <a class="btn  btn-default" data-wysihtml5-command="Indent" title="Retrait" tabindex="-1"
                href="javascript:;" unselectable="on">

                <span class="glyphicon glyphicon-indent-left"></span>

              </a>
            </div>
          </li>
          <li>
            <div class="bootstrap-wysihtml5-insert-link-modal modal fade" data-wysihtml5-dialog="createLink">
              <div class="modal-dialog ">
                <div class="modal-content">
                  <div class="modal-header">
                    <a class="close" data-dismiss="modal">×</a>
                    <h3>Insert link</h3>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <input value="http://" class="bootstrap-wysihtml5-insert-link-url form-control"
                        data-wysihtml5-dialog-field="href"/>
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" class="bootstrap-wysihtml5-insert-link-target" checked=""/>Open link in
                        new window
                      </label>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <a class="btn btn-default" data-dismiss="modal" data-wysihtml5-dialog-action="cancel"
                      href="#">Cancel</a>
                    <a href="#" class="btn btn-primary" data-dismiss="modal" data-wysihtml5-dialog-action="save">Insert
                      link</a>
                  </div>
                </div>
              </div>
            </div>
            <a class="btn  btn-default" data-wysihtml5-command="createLink" title="Insérer un lien" tabindex="-1"
              href="javascript:;" unselectable="on">

              <span class="glyphicon glyphicon-share"></span>

            </a>
          </li>
          <li>
            <div class="bootstrap-wysihtml5-insert-image-modal modal fade" data-wysihtml5-dialog="insertImage">
              <div class="modal-dialog ">
                <div class="modal-content">
                  <div class="modal-header">
                    <a class="close" data-dismiss="modal">×</a>
                    <h3>Insert image</h3>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <input value="http://" class="bootstrap-wysihtml5-insert-image-url form-control"
                        data-wysihtml5-dialog-field="src"/>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <a class="btn btn-default" data-dismiss="modal" data-wysihtml5-dialog-action="cancel"
                      href="#">Cancel</a>
                    <a class="btn btn-primary" data-dismiss="modal" data-wysihtml5-dialog-action="save" href="#">Insert
                      image</a>
                  </div>
                </div>
              </div>
            </div>
            <a class="btn  btn-default" data-wysihtml5-command="insertImage" title="Insérer une image" tabindex="-1"
              href="javascript:;" unselectable="on">

              <span class="glyphicon glyphicon-picture"></span>

            </a>
          </li>
        </ul><textarea name="membership_description" rows="15" class="form-control textarea"
            ></textarea><input type="hidden" name="_wysihtml5_mode" value="1"/><iframe
          class="wysihtml5-sandbox" security="restricted" allowtransparency="true" frameborder="0" width="0" height="0"
          marginwidth="0" marginheight="0"
      ></iframe>
      </div>
    </div>
    <div class="form-group"><label class="control-label col-md-3">
        <font   >
          <font   >Image d'adhésion</font>
        </font>
      </label>
      <div class="col-md-8"><input type="file" name="gmgt_membershipimage" class="form-control" id="imgInp"/>

      </div>
    </div>
    <div class="col-md-offset-3"><img src="/dasinfoau/php/gym//upload/Thumbnail-img.png" class="img-responsive"
        height="100px" width="150px" id="blah" /></div><br/><br/><br/>
    <div class="col-md-offset-3"><button class="btn btn-flat btn-success submit_button" name="add_membership"
        type="submit" >
        <font   >
          <font   >Enregistrer l'adhésion</font>
        </font>
      </button></div>
  </form>
</div>
);

AddTypeSubs.propTypes = {};

AddTypeSubs.defaultProps = {};

export default AddTypeSubs;
