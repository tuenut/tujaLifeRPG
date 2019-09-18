import React from "react";


class StartNew extends React.Component {
  constructor(props) {
    super(props)

    this.state = {active: this.props.active}

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.changeMode();
    this.setState({active: !this.state.active});
  }

  render() {
    return (
      <div className={"row justify-content-center"}>
        {
          this.state.active ? (
            <div>
              <div className={"row mb-3 mx-auto"}>
                <input className={"form-control"} type={"text"} placeholder={"Enter your name"}/>
              </div>
              <div className={"row "}>
                <a href="#" className="btn btn-danger ml-auto mr-1" onClick={this.handleOnClick}>Back</a>
                <a href="#" className="btn btn-success mr-auto ml-1" onClick={this.props.createNewCharacter}>Start</a>
              </div>
            </div>
          ) : (
            <a href="#" className="btn btn-success mx-auto" onClick={this.handleOnClick}>Start new</a>
          )
        }
      </div>
    )
  }
}

class Continue extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row mb-3">
        <a href="#" className="btn btn-primary mx-auto" onClick={this.props.getCharacter}>Continue</a>
      </div>
    )
  }
}

class MainMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {start_new: false};

    this.createNewCharacter = this.createNewCharacter.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.setState({start_new: !this.state.start_new})
  }

  createNewCharacter() {
    console.log('Send request to create character.');
    try {
      window.API.get.create_character('tuenut')
    } catch (e) {
      this.props.setCharacterName('NewChar')
    }
  }

  getCharacter() {
    console.log('Send request to get character.');
    try {
      window.API.get.get_character()
    } catch (e) {
      this.props.setCharacterName('ExistChar')
    }
  }

  render() {
    return (
      <div className='card mb-2'>
        <div className="card-header">
          Start Menu
        </div>

        <div className="card-body col">
          {!this.state.start_new && <Continue getCharacter={this.getCharacter}/>}
          <StartNew active={this.state.start_new} createNewCharacter={this.createNewCharacter} changeMode={this.changeMode}/>
        </div>
      </div>
    );
  }
}

export default MainMenu;