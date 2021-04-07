
import React, { useEffect, useState } from 'react';
import './Presence.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditPresence from '../EditPresence/EditPresence';
import AddPresence from '../AddPresence/AddPresence';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import presenceMessage from '../../../main/messages/presenceMessage';
import PresenceTestService from '../../../main/mocks/PresenceTestService';
import HTTPService from '../../../main/services/HTTPService';

const Presence = () => {

  const [presences, setPresences] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();


  useEffect(() => {
    LoadJS()
    retrievePresences()
  }, []);


  const getAll = () => {
    HTTPService.getAll()
      .then(response => {
        setPresences(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeOne = (data) => {
    HTTPService.remove(data)
      .then(response => {

      })
      .catch(e => {

      });
  }



  const retrievePresences = () => {
    var presences = PresenceTestService.getAll();
    setPresences(presences);
  };

  const resfresh = () => {
    retrievePresences()
    forceUpdate()
  }

  const remove = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      showMessage('Confirmation', presenceMessage.delete, 'success')
      PresenceTestService.remove(data)
      //removeOne(data)
      resfresh()
    }

  }

  const update = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }


  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> Présenses</h4>
            </div>
            <div className="card-body">
              <table className="table">
                <thead class=" text-primary">
                  <tr> <th>Nom membre</th>
                    <th>Date</th>
                    <th>jour</th>
                    <th>Statut</th></tr>
                </thead>
                <tbody>

                  <tr>
                    <td>Christophe Marceau</td>
                    <td>08/01/2021</td>
                    <td>vendredi</td>
                    <td><span class="badge badge-success">absent</span></td>
                  </tr>

                </tbody>
                <tfoot class=" text-primary">
                  <tr> <th>Nom membre</th>
                    <th>Date</th>
                    <th>jour</th>
                    <th>Statut</th></tr>
                </tfoot>
              </table>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

Presence.propTypes = {};

Presence.defaultProps = {};

export default Presence;
