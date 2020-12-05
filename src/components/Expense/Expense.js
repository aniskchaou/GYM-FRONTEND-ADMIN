import React from 'react';
import PropTypes from 'prop-types';
import './Expense.css';

const Expense = () => (
  <div className="content">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"> Dépenses</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
            <thead class=" text-primary">
                      <th>Founisseur</th>
                      <th>Montant</th>
                      
                    </thead>
                    <tbody>
                      <tr>
                        <td>course</td>
                        <td>3435</td>
                                
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

Expense.propTypes = {};

Expense.defaultProps = {};

export default Expense;
