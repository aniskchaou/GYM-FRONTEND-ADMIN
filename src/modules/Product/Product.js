import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import AddProduct from './../AddProduct/AddProduct';
import { LoadJS } from './../init';
import EditProduct from './../EditProduct/EditProduct';

const Product = () => {
  
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
    console.log('hello')
  }, []);
  
  return(
  <div className="content">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title"> Produits</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
          <table className="table">
            <thead class=" text-primary">
              <tr><th>Nom Produit</th>
                      <th>Quantité</th>
                      <th>Prix</th>
                      <th>Actions</th></tr>
                      
                     
                    </thead>
                    <tbody>


                      <tr>
                        <td>MuscleBlaze Creatine</td>
                        <td>1 kg</td>
                        <td>1740$</td>
                        <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
                       
                      </tr>

                      <tr>
                        <td>Mettle Super Whey</td>
                        <td>2 kg</td>
                        <td>4399$</td>
                        <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
                       
                      </tr>

                      <tr>
                        <td>Ultimate Nutrition Prostar </td>
                        <td>2.39kg</td>
                        <td>3344$</td>
                        <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
                       
                      </tr>
                    </tbody> 
                    <tfoot class=" text-primary">
              <tr><th>Nom Produit</th>
                      <th>Quantité</th>
                      <th>Prix</th>
                      <th>Actions</th></tr>
                      
                     
                    </tfoot>
            </table>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addProduct">Ajouter</button>


<div class="modal fade" id="addProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
              <AddProduct/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <EditProduct/>
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
)};

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
