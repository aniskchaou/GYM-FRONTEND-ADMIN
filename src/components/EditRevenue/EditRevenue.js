import React from 'react';
import PropTypes from 'prop-types';
import './EditRevenue.css';

const EditRevenue = () => (
  <div className="EditRevenue">
      <form name="income_form" action="" method="post" class="form-horizontal validateForm" id="income_form">
        <input type="hidden" name="invoice_type" value="income"/>		
		<div class="form-group">
			<label class="col-md-2 control-label" for="day"><font   ><font   >Membre</font></font></label>	
			<div class="col-md-8">
				<div class="select2-container mem_list" id="s2id_autogen1"><a href="javascript:void(0)" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-2"><font   ><font   >Alex Johnson</font></font></span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><label for="s2id_autogen2" class="select2-offscreen"></label><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-2" id="s2id_autogen2" /><div class="select2-drop select2-display-none select2-with-searchbox">   <div class="select2-search">       <label for="s2id_autogen2_search" class="select2-offscreen"></label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-2" id="s2id_autogen2_search" placeholder="" />   </div>   <ul class="select2-results" role="listbox" id="select2-results-2">   </ul></div></div><select name="supplier_name" class="mem_list" required="required" tabindex="-1" title="" ><option value="3">Alex Johnson</option><option value="4">Braidy Con</option><option value="5">Rasik Parmar</option><option value="6">Jawad Khan</option></select>			</div>
		</div>
		<div class="form-group">
			<label class="col-md-2 control-label" for="invoice_label"><font   ><font   >Étiquette de revenu </font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
			<div class="col-md-8">
				<input id="invoice_label" class="form-control validate[required,custom[onlyLetterSp],maxSize[50]] text-input" type="text" value="" name="invoice_label"/>
			</div>
		</div>
				
		<div class="form-group">
			<label class="col-md-2 control-label" for="payment_status"><font   ><font   >Statut </font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
			<div class="col-md-8">
				<select name="payment_status" class="form-control"><option value="" selected="selected"><font   ><font   >Sélectionnez le statut</font></font></option><option value="Paid"><font   ><font   >Payé</font></font></option><option value="Part Paid"><font   ><font   >Partie payée</font></font></option><option value="Unpaid"><font   ><font   >Non payé</font></font></option></select>			</div>
		</div>
		
					<div id="income_entry" class="income_entry_div">			
				<div class="form-group">
					<label class="col-md-2 control-label" for="income_entry"><font   ><font   >Entrée de revenu </font></font><span class="text-danger"><font   ><font   >*</font></font></span></label>
					<div class="col-md-2 module_padding">
						<input id="income_amount" class="form-control validate[required,custom[integer],maxSize[10]] text-input" type="text" value="" name="income_amount[]" placeholder="Montant du revenu" />
					</div>
					<div class="col-md-4 module_padding">
						<input id="income_entry" class="form-control validate[required,maxSize[50]] text-input" type="text" value="" name="income_entry[]" placeholder="Étiquette d'entrée de revenu"/>
					</div>						
					<div class="col-md-2">
						<button type="button" class="btn btn-flat btn-default" onclick="deleteParentElement(this)">
						<i class="entypo-trash"><font   ><font   >Effacer</font></font></i>
						</button>
					</div>
				</div>				
			</div>		
				
		<div class="form-group">
			<label class="col-md-2 control-label" for="income_entry"></label>
			<div class="col-md-3">	
				<input type="hidden" id="count" value="1"/>			
				<button id="add_new_entry" class="btn btn-flat btn-default btn-sm btn-icon icon-left " type="button" name="add_new_entry" onclick="add_entry()"><font   ><font   >Ajouter une entrée de revenu</font></font></button>
			</div>
		</div>
		<hr/>
		<div class="col-md-offset-2 col-md-8" >
        	<font   ><font   ><input type="submit" value="Créer une entrée de revenu" name="save_income" class="btn btn-flat btn-success save"  /></font></font>
        </div>
        </form>
  </div>
);

EditRevenue.propTypes = {};

EditRevenue.defaultProps = {};

export default EditRevenue;
