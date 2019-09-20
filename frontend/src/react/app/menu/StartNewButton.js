import React from "react";

class StartNewButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row mb-3">
        <div className="btn btn-success mx-auto" onClick={this.props.changeMode}>
          Start new
        </div>
      </div>
    )
  }
}

export default StartNewButton;