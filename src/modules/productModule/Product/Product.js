
import React, { useEffect, useRef, useState } from 'react';
import './Product.css';
import { LoadJS } from '../../../libraries/datatables/datatables';
import EditProduct from '../EditProduct/EditProduct';
import AddProduct from '../AddProduct/AddProduct';
import useForceUpdate from 'use-force-update';
import showMessage from '../../../libraries/messages/messages';
import productMessage from '../../../main/messages/productMessage';
import ProductTestService from '../../../main/mocks/ProductTestService';
import productHTTPService from '../../../main/services/productHTTPService';

const Product = () => {

  const [products, setProducts] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const [loading, setLoading] = useState(true);


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
      //showMessage('Confirmation', 'patientMessage.delete', 'success')
      productHTTPService.removeProduct(data).then(data => {
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

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title"> Products</h4>
            </div>
            <div className="card-body">
              <div className="table">
                <table className="table">
                  <thead class=" text-primary">
                    <tr><th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Actions</th></tr>


                  </thead>
                  <tbody>
                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addProduct"><i class="far fa-plus-square"></i>  Create</button>

                    {products.map(item =>
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.quantity} kg</td>
                        <td>{item.price} $</td>
                        <td>
                          <button style={{ margin: "3px" }} onClick={e => updateProductAction(e, item)} type="button" data-toggle="modal" data-target="#edit" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                          <button onClick={e => removeProductAction(e, item.id)} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                        </td>

                      </tr>
                    )}

                  </tbody>

                </table>



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
                        <button onClick={resfresh} ref={closeButtonAdd} type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

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
                        <button onClick={resfresh} ref={closeButtonEdit} type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

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
