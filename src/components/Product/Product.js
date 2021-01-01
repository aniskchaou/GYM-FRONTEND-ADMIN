import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import AddProduct from './../AddProduct/AddProduct';

const Product = () => (
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
          </div>
        </div>
      </div>
    </div>
  
  </div>
</div>
);

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
