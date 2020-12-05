import React from 'react';
import PropTypes from 'prop-types';
import './Groupe.css';

const Groupe = () => (
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
                      <th>Nom</th>
                      <th>Nombre de membres </th>
                    
                     
                    </thead>
                    <tbody>
                      <tr>
                        <td>groupe 1</td>
                        <td>4</td>
                      
                       
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

Groupe.propTypes = {};

Groupe.defaultProps = {};

export default Groupe;
