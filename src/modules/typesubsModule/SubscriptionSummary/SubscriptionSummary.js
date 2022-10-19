import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SubscriptionSummary.css';
import typeSubsHTTPService from '../../../main/services/typeSubsHTTPService';

const SubscriptionSummary = () => {

  const [all, setAll] = useState(0);
  const [silver, setSilver] = useState(0);
  const [gold, setGold] = useState(0);
  const [premium, setPremium] = useState(0);

  useEffect(() => {
    typeSubsHTTPService.getAllCount().then(data => {
      setAll(data.data.all)
    })
    typeSubsHTTPService.getGold().then(data => {
      setGold(data.data.gold)
    })
    typeSubsHTTPService.getPremium().then(data => {
      setPremium(data.data.premium)
    })
    typeSubsHTTPService.getSilver().then(data => {
      setSilver(data.data.silver)
    })
  }, []);


  return (
    <div className="SubscriptionSummary row">
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
                  <i className="nc-icon nc-chart-bar-32  blue"></i>
                </div>
              </div>
              <div className="col-7 col-md-8">
                <div className="numbers">
                  <p className="card-category">Gold</p>
                  <p className="card-title blue">{gold}</p><p>
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
                  <p className="card-category">Silver</p>
                  <p className="card-title red">{silver}</p><p>
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
                  <p className="card-category ">Premium</p>
                  <p className="card-title green">{premium}</p><p>
                  </p></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
};

SubscriptionSummary.propTypes = {};

SubscriptionSummary.defaultProps = {};

export default SubscriptionSummary;
