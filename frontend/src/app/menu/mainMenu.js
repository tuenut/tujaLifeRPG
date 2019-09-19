import React from "react";


class StartNew extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: this.props.active,
      character_name: null,
      create_character_callback: this.props.createNewCharacter,
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCreateCharacter = this.handleCreateCharacter.bind(this);
  }

  handleOnClick() {
    this.props.changeMode();
    this.setState({active: !this.state.active});
  }

  handleOnChange(event) {
    this.setState({character_name: event.target.value})
  }

  handleCreateCharacter() {
    this.state.create_character_callback(this.state.character_name);
  }

  render() {
    return (
      <div className={"row justify-content-center"}>
        {
          this.state.active ? (
            <div>
              <div className={"row mb-3 mx-auto"}>
                <input className={"form-control"} type={"text"} placeholder={"Enter your name"}
                       value={this.state.character_name} onChange={this.handleOnChange}/>
              </div>
              <div className={"row "}>
                <a href="#" className="btn btn-danger ml-auto mr-1" onClick={this.handleOnClick}>Back</a>
                <a href="#" className="btn btn-success mr-auto ml-1" onClick={this.handleCreateCharacter}>Start</a>
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

  createNewCharacter(name) {
    console.log('Send request to create character.');

    try {
      window.API.get.create_character(name)
    } catch (e) {
      this.props.setCharacterName(name)
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
          <StartNew active={this.state.start_new} createNewCharacter={this.createNewCharacter}
                    changeMode={this.changeMode}/>
        </div>
      </div>
    );
  }
}

export default MainMenu;