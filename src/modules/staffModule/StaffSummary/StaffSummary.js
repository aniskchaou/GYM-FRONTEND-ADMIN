import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './StaffSummary.css';
import staffHTTPService from '../../../main/services/staffHTTPService';
const StaffSummary = () => {
  const [all, setAll] = useState(0);
  const [workout, setWorkout] = useState(0);
  const [fitness, setFitness] = useState(0);
  const [yoga, setYoga] = useState(0);

  useEffect(() => {
    staffHTTPService.getAll().then(data => {
      setAll(data.data.all)
    })
    staffHTTPService.getAllFitness().then(data => {
      setFitness(data.data.fitness)
    })
    staffHTTPService.getAllYoga().then(data => {
      setYoga(data.data.yoga)
    })
    staffHTTPService.getWorkOut().then(data => {
      setWorkout(data.data.workout)
    })
  }, []);

  return (
    <div className="StaffSummary row">

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className="card-body ">
            <div className="row">
              <div className="col-5 col-md-4">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-chart-bar-32 purple"></i>
                </div>
              </div>
              <div className="col-7 col-md-8">
                <div className="numbers">
                  <p className="card-category">Total</p>
                  <p className="card-title purple">{all}</p><p>
                  </p></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className="card-body ">
            <div className="row">
              <div className="col-5 col-md-4">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-chart-bar-32 blue"></i>
                </div>
              </div>
              <div className="col-7 col-md-8">
                <div className="numbers">
                  <p className="card-category">Yoga </p>
                  <p className="card-title blue">{yoga}</p><p>
                  </p></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className="card-body ">
            <div className="row">
              <div className="col-5 col-md-4">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-chart-bar-32 red"></i>
                </div>
              </div>
              <div className="col-7 col-md-8">
                <div className="numbers">
                  <p className="card-category">Workout </p>
                  <p className="card-title red">{workout}</p><p>
                  </p></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className="card-body ">
            <div className="row">
              <div className="col-5 col-md-4">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-chart-bar-32 green"></i>
                </div>
              </div>
              <div className="col-7 col-md-8">
                <div className="numbers">
                  <p className="card-category ">Fitness </p>
                  <p className="card-title green">{fitness}</p><p>
                  </p></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
};

StaffSummary.propTypes = {};

StaffSummary.defaultProps = {};

export default StaffSummary;
