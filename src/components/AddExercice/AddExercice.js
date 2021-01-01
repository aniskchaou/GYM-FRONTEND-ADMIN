import React from 'react';
import PropTypes from 'prop-types';
import './AddExercice.css';

const AddExercice = () => (

<div className="AddExercice">
  <form method="post" accept-charset="utf-8" class="validateForm form-horizontal" role="form"
    action="/dasinfoau/php/gym/gym-daily-workout/add-workout">
    <div><input type="hidden" name="_method" value="POST"/></div>
    <div class="form-group">
      <input type="hidden" id="s_role" value="administrator" />
      <input type="hidden" id="user_id" value="1" />
      <label class="control-label col-md-2" for="email">
        <font>
          <font>Sélectionnez un membre </font>
        </font><span class="text-danger">
          <font>
            <font>*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8">
        <div class="select2-container mem_list" id="s2id_mem_list"><a href="javascript:void(0)" class="select2-choice"
            tabindex="-1"> <span class="select2-chosen" id="select2-chosen-1">
              <font>
                <font>Sélectionnez un membre</font>
              </font>
            </span><abbr class="select2-search-choice-close"></abbr> <span class="select2-arrow" role="presentation"><b
                role="presentation"></b></span></a><label for="s2id_autogen1" class="select2-offscreen"></label><input
            class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button"
            aria-labelledby="select2-chosen-1" id="s2id_autogen1"/>
          <div class="select2-drop select2-display-none select2-with-searchbox">
            <div class="select2-search"> <label for="s2id_autogen1_search" class="select2-offscreen"></label> <input
                type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list"
                aria-owns="select2-results-1" id="s2id_autogen1_search" placeholder=""/> </div>
            <ul class="select2-results" role="listbox" id="select2-results-1"> </ul>
          </div>
        </div><select name="member_id" class="mem_list" required="required" id="mem_list"
          data-url="/dasinfoau/php/gym/GymAjax/getWorkoutDates" tabindex="-1" title="" >
          <option value="" selected="selected">
            <font>
              <font>Sélectionnez un membre</font>
            </font>
          </option>
          <option value="3">
            <font>
              <font>Alex Johnson</font>
            </font>
          </option>
          <option value="4">
            <font>
              <font>Braidy Con</font>
            </font>
          </option>
          <option value="5">
            <font>
              <font>Rasik Parmar</font>
            </font>
          </option>
          <option value="6">
            <font>
              <font>Jawad Khan</font>
            </font>
          </option>
        </select>
      </div>
      <div class="col-md-2">
        <a href="/dasinfoau/php/gym/GymMember/addMember" class="btn btn-default btn-flat">
          <font>
            <font>Ajouter un membre</font>
          </font>
        </a>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-md-2" for="email">
        <font>
          <font>Sélectionnez la date </font>
        </font><span class="text-danger">
          <font>
            <font>*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8 datepaginator" id="paginator" data-url="/dasinfoau/php/gym/GymAjax/gymWorkoutData">
        <ul class="pagination">
          <li><a href="#" class="dp-nav dp-nav-left dp-nav-square-edges" title="" ><i
                class="glyphicon glyphicon-chevron-left dp-nav-left"></i></a></li>
          <li><a href="#" class="dp-item" data-moment="2020-12-26" title="Samedi 26 décembre 2020" >
              <font>
                <font>Sam </font>
              </font> <br/>
              <font>
                <font>26</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-item" data-moment="2020-12-27" title="Dimanche 27 décembre 2020"
             >
              <font>
                <font>Dim </font>
              </font> <br/>
              <font>
                <font>27</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-item dp-divider" data-moment="2020-12-28" title="Lundi 28 décembre 2020"
              >
              <font>
                <font>Lun </font>
              </font> <br/>
              <font>
                <font>28</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-item" data-moment="2020-12-29" title="Mardi 29 décembre 2020" >
              <font>
                <font>Mar </font>
              </font> <br/>
              <font>
                <font>29</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-item" data-moment="2020-12-30" title="Mercredi 30 décembre 2020"
              >
              <font>
                <font>Mer </font>
              </font> <br/>
              <font>
                <font>30</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-item dp-selected dp-today" data-moment="2020-12-31" title="Jeudi 31 décembre 2020"
              ><i id="dp-calendar" class="glyphicon glyphicon-calendar"></i>
              <font>
                <font>Jeudi </font>
              </font> <br/>
              <font>
                <font>31 décembre 2020</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-item" data-moment="2021-01-01" title="Vendredi 1er janvier 2021"
              >
              <font>
                <font>Ven </font>
              </font> <br/>
              <font>
                <font>1er</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-item" data-moment="2021-01-02" title="Samedi 2 janvier 2021" >
              <font>
                <font>Samedi </font>
              </font> <br/>
              <font>
                <font>2</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-item" data-moment="2021-01-03" title="Dimanche 3 janvier 2021" >
              <font>
                <font>Dim </font>
              </font> <br/>
              <font>
                <font>3</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-item dp-divider" data-moment="2021-01-04" title="Lundi 4 janvier 2021"
              >
              <font>
                <font>Lun </font>
              </font> <br/>
              <font>
                <font>4</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-item" data-moment="2021-01-05" title="Mardi 5 janvier 2021" >
              <font>
                <font>Mar </font>
              </font> <br/>
              <font>
                <font>5</font>
              </font>
            </a></li>
          <li><a href="#" class="dp-nav dp-nav-right dp-nav-square-edges" title="" ><i
                class="glyphicon glyphicon-chevron-right dp-nav-right"></i></a></li>
        </ul>
      </div>
    </div>

    <input type="hidden" name="record_date" id="record_date" value="2020-12-31" />
    <div class="form-group">
      <label class="control-label col-md-2" for="email">
        <font>
          <font>Entraînement </font>
        </font><span class="text-danger">
          <font>
            <font>*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8 workout_area">
        <div class="work_out_datalist">
          <font>
            <font>
              Sélectionnez la date d'enregistrement pour l'entraînement d'aujourd'hui </font>
          </font>
        </div>
      </div>
    </div>

    <div class="col-sm-offset-2 col-md-8">
      <font>
        <font><input type="submit" value="sauver" name="save_workout" class="btn btn-flat btn-success" id="save_workout"
             /></font>
      </font>
    </div>
    <input type="hidden" id="date_range" disabled="" />


  </form>
</div>
);

AddExercice.propTypes = { };

AddExercice.defaultProps = { };

export default AddExercice;
