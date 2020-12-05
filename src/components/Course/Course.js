import React from 'react';
import PropTypes from 'prop-types';
import './Course.css';

const Course = () => (
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
                      <th>Nom Membre</th>
                      <th>Nom de personnel </th>
                      <th>Heure départ</th>
                      <th>Heure fin</th>
                      <th>Frais résérvation</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Anis</td>
                        <td>Anis</td>
                        <td>14h00</td>
                        <td>16h00</td>
                        <td>234</td>
                      
                       
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

Course.propTypes = {};

Course.defaultProps = {};

export default Course;
