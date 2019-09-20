import React from "react";
import ContinueButton from './Continue';
import CreateCharacterView from './CreateCharacterView';
import StartNewButton from './StartNewButton'


class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {is_mode_start_new: false};

    this.getCharacter = this.getCharacter.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.createNewCharacter = this.createNewCharacter.bind(this);
  }

  changeMode() {
    this.setState({is_mode_start_new: !this.state.is_mode_start_new})
  }

  createNewCharacter(name) {
    console.log('Send request to create character.');
    window.API.get.create_character(name);
  }

  getCharacter() {
    console.log('Send request to get character.');
    window.API.get.get_character();
  }

  render() {
    return (
      <div className='card mb-2'>
        <div className="card-header">
          Start Menu
        </div>

        <div className="card-body col">
          {!this.state.is_mode_start_new && <ContinueButton getCharacter={this.getCharacter}/>}

          {
            this.state.is_mode_start_new ? (
              <CreateCharacterView changeMode={this.changeMode} createNewCharacter={this.createNewCharacter}/>
            ) : (
              <StartNewButton changeMode={this.changeMode}/>)
          }

        </div>
      </div>
    );
  }
}

export default MainMenu;