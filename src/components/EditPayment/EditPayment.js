import React from 'react';
import PropTypes from 'prop-types';
import './EditPayment.css';

const EditPayment = () => (
  <div className="EditPayment">
        <form name="payment_form" action="" method="post" class="form-horizontal validateForm" id="payment_form">
      <input type="hidden" name="action" value="insert" />
      <input type="hidden" name="mp_id" value="0" />
      <input type="hidden" name="created_by" value="1" />
      <div class="form-group">
        <label class="col-md-2 control-label" for="day">Member<span class="text-danger">*</span></label>
        <div class="col-md-8">
          <div class="select2-container mem_list" id="s2id_autogen1">
            <a href="javascript:void(0)" class="select2-choice" tabindex="-1">
            <span class="select2-chosen" id="select2-chosen-2">Select Member</span>
            <abbr class="select2-search-choice-close"></abbr>
            <span class="select2-arrow" role="presentation">
              <b role="presentation"></b>
              </span></a>
              <label for="s2id_autogen2" class="select2-offscreen"></label>
            <input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-2" id="s2id_autogen2"/>
              <div class="select2-drop select2-display-none select2-with-searchbox">
                <div class="select2-search">
                  <label for="s2id_autogen2_search" class="select2-offscreen"></label>
                  <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-2" id="s2id_autogen2_search" placeholder="" />
                </div>  
                </div>
            </div>
            <select name="user_id" class="mem_list" required="required" tabindex="-1" title="" ><option value="" selected="selected">Select Member</option><option value="3">Alex Johnson</option><option value="4">Braidy Con</option><option value="5">Rama Chandra</option></select>			</div>
        </div>
        <div class="form-group">
          <label class="col-md-2 control-label" for="membership">Membership<span class="text-danger">*</span></label>
          <div class="col-md-8">
            <select name="membership_id" class="form-control gen_membership_id" data-url="/dasinfoau/php/gym/GymAjax/get_amount_by_memberships">
              <option value="" selected="selected">Select Membership</option>
              <option value="1">Platinum Membership</option>
              <option value="2">Gold Membership</option><option value="3">Silver Membership</option></select>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 control-label" for="total_amount">Total Amount<span class="text-danger">*</span></label>
          <div class="col-md-8">
            <div class="input-group">
              <span class="input-group-addon">$</span>
              <input id="total_amount" class="form-control validate[required,custom[number]]" type="text" value="" name="membership_amount" readonly="" />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 control-label" for="begin_date">Membership Valid From<span class="text-danger">*</span></label>
          <div class="col-md-3">
            <div class="input text"><input type="text" name="membership_valid_from" autocomplete="off" class="form-control validate[required] mem_valid_from hasDatepicker" id="dp1610472419201" value="" /></div>
          </div>
          <div class="col-md-1 text-center">	To			</div>
          <div class="col-md-4">
            <div class="input text"><input type="text" name="membership_valid" class="form-control validate[required] valid_to" readonly="readonly" id="" value=""/></div><input type="hidden" name="membership_valid_to" class="check" id="" value="" />			 <input type='hidden' name='membership_valid_to' class='check' value='' />
            </div>
          </div>
          <div class="col-md-offset-2 col-md-8">
            <input type="submit" value="Save" name="save_membership_payment" class="btn btn-flat btn-success" />
          </div>
		</form>
  </div>
);

EditPayment.propTypes = {};

EditPayment.defaultProps = {};

export default EditPayment;
