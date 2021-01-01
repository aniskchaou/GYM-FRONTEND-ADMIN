import React from 'react';
import PropTypes from 'prop-types';
import './AddProduct.css';

const AddProduct = () => (
  <div className="AddProduct">
   <form class="validateForm form-horizontal" method="post" role="form">		
		<div class="form-group">	
		<label class="control-label col-md-2" for="email"><font   ><font   >Nom du produit </font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
		<div class="col-md-6">
			<input type="text" name="product_name" class="form-control validate[required]" value="" maxlength="40" />
		</div>	
		</div>
		<div class="form-group">	
		<label class="control-label col-md-2" for="email"><font   ><font   >Prix ​​du produit </font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
		<div class="col-md-6">
			<div class="input-group">
				<span class="input-group-addon"><font   ><font   >$</font></font></span>
				<input type="text" name="price" class="form-control validate[required,custom[integer,min[0]]]" value="" maxlength="10" />
			</div>	
		</div>	
		</div>
		<div class="form-group">	
		<label class="control-label col-md-2" for="email"><font   ><font   >Quantité de produit </font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
		<div class="col-md-6">
			<input type="text" name="quantity" class="form-control validate[required,custom[integer,min[0]]]" value="" maxlength="5" />
		</div>	
		</div>
		<div class="col-md-offset-2 col-md-6 add_product_save">
			<font   ><font   ><input type="submit" value="sauver" name="save_product" class="btn btn-flat btn-success" /></font></font>
		</div>
		</form>
  </div>
);

AddProduct.propTypes = {};

AddProduct.defaultProps = {};

export default AddProduct;
