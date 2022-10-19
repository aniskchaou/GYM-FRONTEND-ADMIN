import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './IncomeSummary.css';
import revenueHTTPService from '../../../main/services/revenueHTTPService';
const IncomeSummary = () => {
  const [all, setAll] = useState(0);
  const [today, setToday] = useState(0);


  useEffect(() => {
    revenueHTTPService.getTotalIncome().then(data => {
      setAll(data.data.all)
    })
    revenueHTTPService.getTodayIncome().then(data => {
      setToday(data.data.today)
    })

  }, []);

  return (
    <div className="IncomeSummary row">
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
                  <p className="card-category">Today</p>
                  <p className="card-title blue">{today}</p><p>
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
                  <p className="card-category">This week</p>
                  <p className="card-title red">0</p><p>
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
                  <p className="card-category ">This month</p>
                  <p className="card-title green">0</p><p>
                  </p></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

IncomeSummary.propTypes = {};

IncomeSummary.defaultProps = {};

export default IncomeSummary;
