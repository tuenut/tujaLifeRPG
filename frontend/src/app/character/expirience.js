import React from "react";

class ExpirienceBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const expirience = this.props.expirience
    return (
      <div>
        <h5 className="card-title">Expirience</h5>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: expirience+"%"}} aria-valuenow={expirience}
               aria-valuemin="0" aria-valuemax="100"/>
        </div>
      </div>
    );
  }
}

export default ExpirienceBar;