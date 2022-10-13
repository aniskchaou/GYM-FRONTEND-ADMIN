import React, { useState } from 'react';
import './SearchBar.css';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {

  const initialState = {
    input: '',
  };
  const [activity, setActivity] = useState(initialState);
  let history = useHistory()


  const print = () => {
    history.replace("/result/" + activity.input)
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const search = (event) => {
    if (event.keyCode === 13) {
      history.replace("/result/" + activity.input)
    }
  }

  return (
    <div>
      <div className="input-group no-border">
        <input onKeyDown={(e) => search(e)} name="input" onChange={handleInputChange} value={activity.input} type="text" className="form-control" placeholder="Search..." />
        <div className="input-group-append">
          <div className="input-group-text">
            <i onClick={print} className="nc-icon nc-zoom-split"></i>
          </div>
        </div>
      </div>
    </div>

  )
};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
