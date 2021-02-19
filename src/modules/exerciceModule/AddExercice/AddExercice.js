
import React, { useState } from 'react';
import './AddExercice.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import exerciceMessage from '../../../main/messages/exerciceMessage'
import ExerciceTestService from '../../../main/mocks/ExerciceTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddExercice = () => {
  const initialState = {
    post: "",
    description: "",
    start: "",
    end: "",
    location: "",
    requirement: ""
  };

  const { register, handleSubmit, errors } = useForm()
  const [exercice, setExercice] = useState(initialState);

  const onSubmit = (data) => {
    //saveExercice(data)
    ExerciceTestService.create(data)
    setExercice(initialState)
    showMessage('Confirmation', exerciceMessage.add, 'success')
  }

  const saveExercice = (data) => {

    HTTPService.create(data)
      .then(response => {
        setExercice(initialState)
      })
      .catch(e => {
        console.log(e);
      });

  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setExercice({ ...exercice, [name]: value });
  };

  return (

    <div className="AddExercice">
      <form onSubmit={handleSubmit(onSubmit)} method="post" accept-charset="utf-8" class="validateForm form-horizontal" role="form"
      >

        <div class="form-group">

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
              </span></a>
            </div>


            <select name="member_id" class="mem_list" required="required" id="mem_list"
              tabindex="-1" title="" >
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

            </select>
          </div>
          <div class="col-md-2">
            <a class="btn btn-default btn-flat">
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
          <div class="col-md-8 datepaginator" id="paginator" >
            <ul class="pagination">

              <li><a href="#" class="dp-item" data-moment="2020-12-26" title="Samedi 26 décembre 2020" >
                <font>
                  <font>Sam </font>
                </font> <br />
                <font>
                  <font>26</font>
                </font>
              </a></li>
              <li><a href="#" class="dp-item" data-moment="2020-12-27" title="Dimanche 27 décembre 2020"
              >
                <font>
                  <font>Dim </font>
                </font> <br />
                <font>
                  <font>27</font>
                </font>
              </a></li>



            </ul>
          </div>
        </div>


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
  )
};

AddExercice.propTypes = {};

AddExercice.defaultProps = {};

export default AddExercice;
