import React, { useState } from 'react';


const Level = () => {
  const [promotionRequirements, setPromotionRequirements] = useState({
    sessions: '',
    hours: '',
    daysInRank: '',
    daysAttended: '',
    skillRequirements: '',
    minimumAge: '',
  });

  const [autoAssignInitialRank, setAutoAssignInitialRank] = useState(false);
  const [levelRank, setLevelRank] = useState('');
  const [color, setColor] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPromotionRequirements({
      ...promotionRequirements,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    setAutoAssignInitialRank(event.target.checked);
  };

  return (
    <div className="container mt-4">
      <h2>Level Information</h2>
      <form>
        <div className="form-group">
          <label>PROMOTION REQUIREMENTS:</label>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Sessions"
                name="sessions"
                value={promotionRequirements.sessions}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Hours"
                name="hours"
                value={promotionRequirements.hours}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Days in Rank"
                name="daysInRank"
                value={promotionRequirements.daysInRank}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Days Attended"
                name="daysAttended"
                value={promotionRequirements.daysAttended}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Skill Requirements"
                name="skillRequirements"
                value={promotionRequirements.skillRequirements}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Minimum Age"
                name="minimumAge"
                value={promotionRequirements.minimumAge}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="autoAssignInitialRank"
            checked={autoAssignInitialRank}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="autoAssignInitialRank">
            AUTO ASSIGN INITIAL RANK
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="levelRank">LEVEL / RANK</label>
          <input
            type="text"
            className="form-control"
            id="levelRank"
            value={levelRank}
            onChange={(e) => setLevelRank(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="color">COLOR</label>
          <input
            type="text"
            className="form-control"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Level;
