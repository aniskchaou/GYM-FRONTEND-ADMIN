import React, { useEffect, useState } from 'react';
import './SearchResult.css';
import memberHTTPService from '../../../main/services/memberHTTPService';
import showMessage from '../../../libraries/messages/messages';
import { LinearProgress } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { HTTP_ERR_MESSAGE } from '../../../main/messages/generic.message';

const SearchResult = (props) => {

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: 'id', headerName: '#', width: 200 },
    { field: 'first_name', headerName: 'First Name', width: 200 },
    { field: 'last_name', headerName: 'Last Name', width: 200 },
    { field: 'birth_date', headerName: 'Birth Date', width: 200 },
    { field: 'activity', headerName: 'Activity', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'weight', headerName: 'Weight', width: 200 },
    { field: 'size', headerName: 'Size', width: 200 },
    { field: 'start_date', headerName: 'Start', width: 200 },
    { field: 'end_date', headerName: 'End', width: 200 },
    { field: 'type', headerName: 'Type', width: 200 },
    { field: 'groupe', headerName: 'Group', width: 200 },
    { field: 'coach', headerName: 'Coach', width: 200 }
  ];


  useEffect(() => {
    getAllMember(props.match.params.input)
  }, []);


  const getAllMember = (name) => {
    memberHTTPService.searchMember(name)
      .then(response => {
        setMembers(response.data);
      })
      .catch(e => {
        showMessage('Error', HTTP_ERR_MESSAGE, 'warning')
      });
  };

  const handleRowSelection = (e) => {
  }

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"><i class="nc-icon nc-zoom-split"></i> Search Results</h4>
            </div>
            <div className="card-body">
              <div className="table">
                {loading ?
                  <LinearProgress />
                  : <div style={{ height: 430, width: '100%' }}><DataGrid
                    rows={members}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                    onSelectionModelChange={handleRowSelection}
                    components={{ Toolbar: GridToolbar }}
                  /></div>}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>)
}



SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default SearchResult;
