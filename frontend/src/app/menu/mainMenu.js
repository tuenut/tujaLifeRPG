import React from "react";

class MainMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    window.API.get.create_character();
    console.log('Try to send request.');
  }

  render() {
    return (
      <div className='card mb-2'>
        <div className="card-header">
          Start Menu
        </div>

        <div className="card-body col">
          <div className="row mb-3"><a href="#" className="btn btn-primary  mx-auto">Continue</a></div>
          <div className="row mb-3">
            <a href="#" className="btn btn-success mx-auto" onClick={this.handleClick}>Start new</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;