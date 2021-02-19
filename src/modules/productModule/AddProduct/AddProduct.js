
import React, { useState } from 'react';
import './AddProduct.css';
import { useForm } from 'react-hook-form';
import showMessage from '../../../libraries/messages/messages'
import productMessage from '../../../main/messages/productMessage'
import productValidation from '../../../main/validations/productValidation'
import ProductTestService from '../../../main/mocks/ProductTestService';
import HTTPService from '../../../main/services/HTTPService';

const AddProduct = () => {
	const initialState = {
		post: "",
		description: "",
		start: "",
		end: "",
		location: "",
		requirement: ""
	};

	const { register, handleSubmit, errors } = useForm()
	const [product, setProduct] = useState(initialState);

	const onSubmit = (data) => {
		//saveProduct(data)
		ProductTestService.create(data)
		setProduct(initialState)
		showMessage('Confirmation', productMessage.add, 'success')
	}

	const saveProduct = (data) => {

		HTTPService.create(data)
			.then(response => {
				setProduct(initialState)
			})
			.catch(e => {
				console.log(e);
			});

	};


	const handleInputChange = event => {
		const { name, value } = event.target;
		setProduct({ ...product, [name]: value });
	};

	return (
		<div className="AddProduct">
			<form onSubmit={handleSubmit(onSubmit)} class="validateForm form-horizontal" method="post" role="form">


				<div class="form-group">
					<label class="control-label col-md-2" for="email"><font   ><font   >Nom du produit </font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
					<div class="col-md-6">
						<input onChange={handleInputChange} value={product.product_name} ref={register({ required: true })}
							type="text" name="product_name" class="form-control validate[required]" maxlength="40" />
						<div className="error text-danger">
							{errors.product_name && productValidation.product_name}
						</div>
					</div>
				</div>


				<div class="form-group">
					<label class="control-label col-md-2" for="email"><font   ><font   >Prix ​​du produit </font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
					<div class="col-md-6">
						<div class="input-group">

							<input onChange={handleInputChange} value={product.price} ref={register({ required: true })}
								type="text" name="price" class="form-control validate[required,custom[integer,min[0]]]" maxlength="10" />
							<div className="error text-danger">
								{errors.price && productValidation.price}
							</div>

						</div>
					</div>
				</div>


				<div class="form-group">
					<label class="control-label col-md-2" for="email"><font   ><font   >Quantité de produit </font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
					<div class="col-md-6">
						<input onChange={handleInputChange} value={product.quantity} ref={register({ required: true })}
							type="text" name="quantity" class="form-control validate[required,custom[integer,min[0]]]" maxlength="5" />
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

AddProduct.propTypes = {};

AddProduct.defaultProps = {};

export default AddProduct;
