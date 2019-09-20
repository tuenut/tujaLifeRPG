import React from "react";

class Continue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row mb-3">
        <div className="btn btn-primary mx-auto" onClick={this.props.getCharacter}>Continue</div>
      </div>
    )
  }
}

export default Continue;