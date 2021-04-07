import React from 'react';

import Content from '../Content/Content';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="root" className="wrapper ">
        <Content />
      </div>
    );
  }
}



Root.propTypes = {};

Root.defaultProps = {};

export default Root;
