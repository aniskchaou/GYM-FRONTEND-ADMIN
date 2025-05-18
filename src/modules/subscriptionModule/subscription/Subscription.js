import React from 'react';

const Subscription = () => {
  return (
    <div className="subscription">
        <button class="subscription-button" onclick="addSubscription()">Add Subscription</button>
    <button class="subscription-button" onclick="manageSubscriptions()">Manage Subscriptions</button>
    <button class="subscription-button" onclick="renewSubscription()">Renew Subscription</button>
    <button class="subscription-button" onclick="cancelSubscription()">Cancel Subscription</button>
    <button class="subscription-button" onclick="viewSubscriptionDetails()">View Subscription Details</button>
    <button class="subscription-button" onclick="applyDiscount()">Apply Discount</button>

      <h2>Subscription Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="member">Member:</label>
          <input type="text" id="member" name="member" />
        </div>
        <div className="form-group">
          <label htmlFor="subscriptionType">Subscription Type:</label>
          <input type="text" id="subscriptionType" name="subscriptionType" />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" name="startDate" />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" name="endDate" />
        </div>
        <div className="form-group">
          <label htmlFor="paymentStatus">Payment Status:</label>
          <select id="paymentStatus" name="paymentStatus">
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="autoRenewal">Auto-Renewal Option:</label>
          <input type="checkbox" id="autoRenewal" name="autoRenewal" />
        </div>
        <div className="form-group">
          <label htmlFor="discountApplied">Discount Applied:</label>
          <input type="text" id="discountApplied" name="discountApplied" />
        </div>
      </form>
    </div>
  );
};

export default Subscription;
