import React from 'react';
import PropTypes from 'prop-types';
import './Payment.css';

const Payment = () => (
  <div className="content">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title"> Paiement</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead class=" text-primary">
                  <th>Titre</th>
                  <th>Nom de membre</th>
                  <th>Montant</th>
                  <th>Montant payé</th>
                  <th>Montant du</th>
                  <th>debut ahdesion</th>
                  <th>Statut</th>
                </thead>
                <tbody>
                  <tr>
                    <td>course</td>
                    <td>12/22/2020</td>
                    <td>Paris</td>
                    <td>14:00</td>
                    <td>16:00</td>
                    <td>16:00</td>
                    <td>16:00</td>
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

Payment.propTypes = {};

Payment.defaultProps = {};

export default Payment;
