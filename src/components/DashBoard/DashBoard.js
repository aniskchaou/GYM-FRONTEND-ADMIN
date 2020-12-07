import React from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';

const DashBoard = () => (
  <div classNameName="content">
  <div classNameName="row">
    <div classNameName="col-md-12">
      <div classNameName="card">
        <div classNameName="card-header">
          <h4 classNameName="card-title"> Tableau de bord</h4>
        </div>
        <div classNameName="card-body">
         
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Membres</p>
                      <p className="card-title">3</p><p>
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
                      <i className="nc-icon nc-money-coins text-success"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Résérvations</p>
                      <p className="card-title">23</p><p>
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
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Exercices</p>
                      <p className="card-title">23</p><p>
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
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Activités</p>
                      <p className="card-title">4</p><p>
                    </p></div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>














        </div>
      </div>
    </div>
  
  </div>
</div>
);

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
