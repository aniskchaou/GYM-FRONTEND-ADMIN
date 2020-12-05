import React from 'react';
import PropTypes from 'prop-types';
import './Activity.css';

const Activity = () => (
  <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title"> Cours</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                    <thead class=" text-primary">
                      <th>Nom de l'activité</th>
                      <th>Categorie</th>
                      <th>Formateur</th>
                     
                    
                    </thead>
                    <tbody>
                      <tr>
                        <td>fitness</td>
                        <td>sport</td>
                        <td>Anis</td>
                                  
                      </tr>
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
);

Activity.propTypes = {};

Activity.defaultProps = {};

export default Activity;
