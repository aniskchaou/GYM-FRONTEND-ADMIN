import React from 'react';

const Marketing = () => {
  return (
    <div className="marketing-component">
      <h2>Marketing Campaign</h2>
      <form>
        <div className="form-group">
          <label htmlFor="campaignName">Campaign Name:</label>
          <input type="text" id="campaignName" name="campaignName" />
        </div>

        <div className="form-group">
          <label htmlFor="targetAudience">Target Audience:</label>
          <input type="text" id="targetAudience" name="targetAudience" />
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
          <label htmlFor="communicationChannels">Communication Channels:</label>
          <input type="text" id="communicationChannels" name="communicationChannels" />
        </div>

        <div className="form-group">
          <label htmlFor="performanceMetrics">Performance Metrics:</label>
          <input type="text" id="performanceMetrics" name="performanceMetrics" />
        </div>
      </form>
    </div>
  );
};

export default Marketing;
