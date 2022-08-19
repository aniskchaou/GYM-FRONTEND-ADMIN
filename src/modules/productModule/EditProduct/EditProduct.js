import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditProduct.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import productMessage from '../../../main/messages/productMessage'
import productValidation from '../../../main/validations/productValidation'
import ProductTestService from '../../../main/mocks/ProductTestService';
import HTTPService from '../../../main/services/HTTPService';
import productHTTPService from '../../../main/services/productHTTPService'
const EditProduct = (props) => {

	const { register, handleSubmit, errors } = useForm() // initialise the hook
	const [product, setProduct] = useState(props.product);

	useEffect(() => {
		setProduct(props.product)
	}, [props.product]);


	const onSubmit = (data) => {

		//ProductTestService.update(props.product, data)
		productHTTPService.editProduct(props.product.id, data).then(data => {
			props.closeModal()
			showMessage('Confirmation', productMessage.edit, 'success')
		})

	}

	const handleInputChange = event => {
		const { name, value } = event.target;
		setProduct({ ...product, [name]: value });
	};


	return (
		<div className="EditProduct">

			<form onSubmit={handleSubmit(onSubmit)} class="validateForm form-horizontal" method="post" role="form">


				<div class="form-group">
					<label class="control-label col-md-2" for="email"><font   ><font   >Product Name</font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
					<div class="col-md-6">
						<input onChange={handleInputChange} value={product.name} ref={register({ required: true })}
							type="text" name="name" class="form-control validate[required]" maxlength="40" />
						<div className="error text-danger">
							{errors.name && productValidation.name}
						</div>
					</div>
				</div>


				<div class="form-group">
					<label class="control-label col-md-2" for="email"><font   ><font   >Price</font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
					<div class="col-md-6">
						<div class="input-group">


							<div class="input-group mb-3">
								<input onChange={handleInputChange} value={product.price} ref={register({ required: true })}
									type="number" name="price" class="form-control validate[required,custom[integer,min[0]]]" maxlength="10" />

								<div class="input-group-append">
									<span class="input-group-text" id="basic-addon2">$</span>
								</div>
							</div>
							<div className="error text-danger">
								{errors.price && productValidation.price}
							</div>

						</div>
					</div>
				</div>


				<div class="form-group">
					<label class="control-label col-md-2" for="email"><font   ><font   >Quantity </font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
					<div class="col-md-6">
						<input onChange={handleInputChange} value={product.quantity} ref={register({ required: true })}
							type="number" name="quantity" class="form-control validate[required,custom[integer,min[0]]]" maxlength="5" />


						<div className="error text-danger">
							{errors.quantity && productValidation.quantity}
						</div>
					</div>
				</div>



				<div class="col-md-offset-2 col-md-6 add_product_save">
					<font   ><font   ><input type="submit" value="sauver" name="save_product" class="btn btn-flat btn-success" /></font></font>
				</div>
			</form>
		</div>
	)
};

EditProduct.propTypes = {};

EditProduct.defaultProps = {};

export default EditProduct;
