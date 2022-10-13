
import React, { useEffect, useRef, useState } from 'react';
import './Product.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditProduct from '../EditProduct/EditProduct';
import AddProduct from '../AddProduct/AddProduct';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import productMessage from '../../../main/messages/productMessage';
import productHTTPService from '../../../main/services/productHTTPService';
import { Button, LinearProgress, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Product = () => {

  const [products, setProducts] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const [loading, setLoading] = useState(true);
  const [updatedItemId, setUpdatedItemId] = useState(0);
  const [updatedItemIds, setUpdatedItemIds] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const columns = [
    { field: 'id', headerName: '#', width: 200 },
    { field: 'name', headerName: 'Product Name', width: 200 },
    { field: 'quantity', headerName: 'Quantity', width: 200 },
    { field: 'price', headerName: 'Price', width: 200 }
  ];

  useEffect(() => {
    LoadJS()
    getAllPatient()
  }, []);


  const getAllPatient = () => {
    setLoading(true);
    productHTTPService.getAllProduct()
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(e => {
        showMessage('Confirmation', e, 'info')
      });
  };


  const resfresh = () => {
    getAllPatient()
    forceUpdate()
  }

  const removeProductAction = (e, data) => {
    e.preventDefault();
    var r = window.confirm("Etes-vous sûr que vous voulez supprimer ?");
    if (r) {
      productHTTPService.removeProduct(data).then(data => {
        showMessage('Confirmation', productMessage.delete, 'success')
        resfresh()
      }).catch(e => {
        showMessage('Confirmation', e, 'warning')
      });
    }
  }

  const updateProductAction = (e, data) => {
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
  }

  const closeModalEdit = (data) => {
    resfresh()
    closeButtonEdit.current.click()
  }

  const closeModalAdd = (data) => {
    resfresh()
    closeButtonAdd.current.click()
  }

  const handleRowSelection = (e) => {
    if (e.length == 1) {
      setUpdatedItemId(e[0])
      const selectedItem = products.find(item => item.id == e[0])
      setUpdatedItem(selectedItem)
    }
    setUpdatedItemIds(e)
  }

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"><i class="nc-icon nc-box-2"></i> Products</h4>
            </div>
            <div className="card-body">
              <div className="table">
                <Button style={{ color: '#ffa400' }} type="button" data-toggle="modal" data-target="#addProduct" ><i class="fas fa-plus"></i> Create </Button>
                <Button style={{ color: '#ffa400' }} onClick={e => updateProductAction(e, updatedItemId)} type="button" data-toggle="modal" data-target="#edit"><i class="fas fa-edit"></i> Edit</Button>
                <Button style={{ color: '#ffa400' }} onClick={e => removeProductAction(e, updatedItemId)} type="button" ><i class="fas fa-trash-alt"></i> Remove</Button>
                <Button type="button" style={{ color: '#ffa400' }} onClick={() => getAllPatient()}><i class="fas fa-refresh"></i> Reload</Button>

                {loading ?
                  <LinearProgress />
                  : <div style={{ height: 400, width: '100%' }}><DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                    onSelectionModelChange={handleRowSelection}
                    components={{ Toolbar: GridToolbar }}
                  /></div>}





                <div class="modal fade" id="addProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">New</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <AddProduct closeModal={closeModalAdd} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>


                <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                        <button onClick={resfresh} type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <EditProduct product={updatedItem} closeModal={closeModalEdit} />
                      </div>
                      <div class="modal-footer">
                        <button onClick={resfresh} ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
  )
};

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
