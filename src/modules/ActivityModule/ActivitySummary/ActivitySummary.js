import React from 'react';
import PropTypes from 'prop-types';
import './ActivitySummary.css';

const ActivitySummary = () => (
  <div className="ActivitySummary row">
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
                <p className="card-category">Trainers</p>
                <p className="card-title purple">4</p><p>
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
                <p className="card-category">Yoga Trainers</p>
                <p className="card-title blue">4</p><p>
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
                <p className="card-category">Workout Trainers</p>
                <p className="card-title red">4</p><p>
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
                <p className="card-category ">Fitness Trainers</p>
                <p className="card-title green">4</p><p>
                </p></div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
);

ActivitySummary.propTypes = {};

ActivitySummary.defaultProps = {};

export default ActivitySummary;
