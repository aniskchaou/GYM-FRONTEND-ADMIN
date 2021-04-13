import React from 'react';
import PropTypes from 'prop-types';
import './ConfigurationContent.css';

const ConfigurationContent = () => (
  <div className="Configuration-content">
    <button type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i>Editer</button>
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-md-12">
            <div class="">
              <div class="row m-l-0 m-r-0">
                <div class="col-md-12">
                  <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-800">Système</h6>
                    <div class="row">
                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Devise</p>
                        <h6 class="text-muted f-w-400">USD</h6>
                      </div>

                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Langue</p>
                        <h6 class="text-muted f-w-400">Francais</h6>
                      </div>

                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Footer</p>
                        <h6 class="text-muted f-w-400">98979989898</h6>
                      </div>

                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Backend URL</p>
                        <h6 class="text-muted f-w-400">http//localhost</h6>
                      </div>

                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Backend port</p>
                        <h6 class="text-muted f-w-400">80</h6>
                      </div>
                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Backend technologie</p>
                        <h6 class="text-muted f-w-400">Nodejs</h6>
                      </div>
                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Footer</p>
                        <h6 class="text-muted f-w-400">Developed by Anis KCHAOU</h6>
                      </div>
                    </div>
                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-800">Entreprise</h6>
                    <div class="row">


                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Nom Entreprise</p>
                        <h6 class="text-muted f-w-400">FastBus</h6>
                      </div>
                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Time zone</p>
                        <h6 class="text-muted f-w-400">UTC +1</h6>
                      </div>
                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Date format</p>
                        <h6 class="text-muted f-w-400">dd-MM-yyyy</h6>
                      </div>
                    </div>


                    <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-800">Email</h6>
                    <div class="row">
                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Mail Driver	</p>
                        <h6 class="text-muted f-w-400">gmail.google.com</h6>
                      </div>
                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">mail Host</p>
                        <h6 class="text-muted f-w-400">gmail</h6>
                      </div>
                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Mail username</p>
                        <h6 class="text-muted f-w-400">dd-MM-yyyy</h6>
                      </div>

                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Mail password</p>
                        <h6 class="text-muted f-w-400">**************</h6>
                      </div>

                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Mail encryption</p>
                        <h6 class="text-muted f-w-400">SSL</h6>
                      </div>

                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Mail From</p>
                        <h6 class="text-muted f-w-400">contact@fastbus.com</h6>
                      </div>

                      <div class="col-sm-4">
                        <p class="m-b-10 f-w-600">Mail From Name</p>
                        <h6 class="text-muted f-w-400">Admin</h6>
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

ConfigurationContent.propTypes = {};

ConfigurationContent.defaultProps = {};

export default ConfigurationContent;
