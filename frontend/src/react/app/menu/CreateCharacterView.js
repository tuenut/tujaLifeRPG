import React from "react";

class CreateCharacterView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {character_name: null};

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCreateCharacter = this.handleCreateCharacter.bind(this);
  }

  handleOnChange(event) {
    this.setState({character_name: event.target.value});
  }

  handleCreateCharacter() {
    this.props.createNewCharacter(this.state.character_name);
  }

  render() {
    return (
      <div>
        <div className={"row mb-3 mx-auto"}>
          <input className={"form-control"} type={"text"} placeholder={"Enter your name"}
                 value={this.state.character_name} onChange={this.handleOnChange}/>
        </div>
        <div className={"row "}>
          <div className="btn btn-danger ml-auto mr-1" onClick={this.props.changeMode}>
            Back
          </div>
          <div className="btn btn-success mr-auto ml-1" onClick={this.handleCreateCharacter}>
            Start
          </div>
        </div>
      </div>
    )
  }

}

export default CreateCharacterView;