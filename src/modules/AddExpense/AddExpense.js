import React from 'react';
import PropTypes from 'prop-types';
import './AddExpense.css';

const AddExpense = () => (

<div className="AddExpense">
  <form name="income_form" action="" method="post" class="form-horizontal validateForm" id="income_form">
    <input type="hidden" name="invoice_type" value="expense"/>
    <div class="form-group">
      <label class="col-md-2 control-label" for="day">
        <font>
          <font>Nom du fournisseur </font>
        </font><span class="text-danger">
          <font>
            <font>*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8">
        <input id="supplier_name" class="form-control validate[required,custom[onlyLetterSp],maxSize[50]] text-input"
          type="text" value="" name="supplier_name" />

      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 control-label" for="payment_status">
        <font>
          <font>Statut </font>
        </font><span class="text-danger">
          <font>
            <font>*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8">
        <select name="payment_status" class="form-control">
          <option value="Paid">
            <font>
              <font>Payé</font>
            </font>
          </option>
          <option value="Part Paid">
            <font>
              <font>Partie payée</font>
            </font>
          </option>
          <option value="Unpaid">
            <font>
              <font>Non payé</font>
            </font>
          </option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 control-label" for="invoice_date">
        <font>
          <font>Date </font>
        </font><span class="text-danger">
          <font>
            <font>*</font>
          </font>
        </span>
      </label>
      <div class="col-md-8">
        <input id="invoice_date" class="form-control  date hasDatepicker" type="text" value="" name="invoice_date" />
      </div>
    </div>
    <hr/>
    <div id="income_entry" class="income_entry_div">
      <div class="form-group">
        <label class="col-md-2 control-label" for="income_entry">
          <font>
            <font>Saisie des dépenses </font>
          </font><span class="text-danger">
            <font>
              <font>*</font>
            </font>
          </span>
        </label>
        <div class="col-md-2 module_padding">
          <input id="income_amount" class="form-control validate[required,custom[integer],maxSize[10]] text-input"
            type="text" value="" name="income_amount[]" placeholder="Montant des dépenses" />
        </div>
        <div class="col-md-4 module_padding">
          <input id="income_entry" class="form-control validate[required,maxSize[50]] text-input" type="text" value=""
            name="income_entry[]" placeholder="Étiquette de saisie des dépenses" />
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-flat btn-default" onclick="deleteParentElement(this)">
            <i class="entypo-trash">
              <font>
                <font>Effacer</font>
              </font>
            </i>
          </button>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="col-md-2 control-label" for="income_entry"></label>
      <div class="col-md-3">
        <input type="hidden" id="count" value="1"/>
        <button id="add_new_entry" class="btn btn-flat btn-default btn-sm btn-icon icon-left" type="button"
          name="add_new_entry">
          <font>
            <font>Ajouter une entrée de dépenses </font>
          </font>
        </button>
      </div>
    </div>
    <hr/>
    <div class="col-md-offset-2 col-md-8">
      <font>
        <font><input type="submit" value="Créer une entrée de dépenses" name="save_income"
            class="btn btn-flat btn-success save" /></font>
      </font>
    </div>
  </form>
</div>
);

AddExpense.propTypes = {};

AddExpense.defaultProps = {};

export default AddExpense;
