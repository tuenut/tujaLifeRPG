import React from "react";

class CompactStatistics extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={"alert alert-info my-3"}>
        <p className="card-text">Some statistics.</p>
      </div>
    );
  }
}

export default CompactStatistics;