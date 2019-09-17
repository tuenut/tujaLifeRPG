import React from "react";

class ExpirienceBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h5 className="card-title">Опыт</h5>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0"
               aria-valuemax="100"/>
        </div>
      </div>
    );
  }
}

export default ExpirienceBar;