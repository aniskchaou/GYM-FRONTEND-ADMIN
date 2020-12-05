import React from 'react';
import PropTypes from 'prop-types';
import './Exercice.css';

const Exercice = () => (
  <div className="content">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"> Entrainement</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
            <thead class=" text-primary">
                      <th>Nom de produit</th>
                      <th>Prix de produit</th>
                      <th>Quantité</th>
                     
                    
                    </thead>
                    <tbody>
                      <tr>
                        <td>vitamine</td>
                        <td>66</td>
                        <td>6</td>
                                  
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

Exercice.propTypes = {};

Exercice.defaultProps = {};

export default Exercice;
