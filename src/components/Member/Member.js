import React from 'react';
import PropTypes from 'prop-types';
import './Member.css';
import AddMember from './../AddMember/AddMember';

const Member = () => (
  <div className="content">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title"> Membres</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead class=" text-primary">
                  <th>Nom membre</th>
                  <th>Date inscription</th>
                  <th>Date expiration</th>
                  <th>Type de membre</th>
                  <th>Statut</th>

                </thead>
                <tbody>
                  <tr>
                    <td>anis</td>
                    <td>22/10/2020</td>
                    <td>22/10/2021</td>
                    <td>normal</td>
                    <td>active</td>


                  </tr>
                </tbody>
              </table>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addMember">Ajouter</button>


<div class="modal fade" id="addMember" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <AddMember/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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

Member.propTypes = {};

Member.defaultProps = {};

export default Member;
