import React from 'react';
import MainMenu from './menu/MainMenu';
import CharacterMenu from './character/CharacterMenu';
import QuestMenu from './quest/QuestMenu';


class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {character: null};

    this.setCharacterName = this.setCharacterName.bind(this);
  }

  setCharacterName(result) {
    console.log('Get character name ' + result);
    this.setState({character: result});
  }

  componentDidMount() {
    window.API.subscribe.create_character(this.setCharacterName);
  }

  componentWillUnmount() {
    window.API.unsubscribe.create_character(this.setCharacterName);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row flex-xl-nowrap justify-content-center">
          <main className="col col-md-9 col-lg-8 col-xl-7 py-md-3 pl-md-3 my-3" role="main">

            {
              this.state.character ? (
                <div>
                  <CharacterMenu character={this.state.character}/>
                  <QuestMenu/>
                </div>
              ) : (
                <MainMenu setCharacterName={this.setCharacterName}/>
              )
            }

          </main>
        </div>
      </div>
    );
  }
}

export default MainView;