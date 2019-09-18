import React from 'react';
import MainMenu from './menu/mainMenu';
import CharacterMenu from './character/characterMenu';
import QuestMenu from './quest/questMenu';


class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {character: null};

    this.create_hero = this.create_hero.bind(this)
  }

  create_hero(result) {
    console.log('Get character name ' + result)
    this.setState({character: result})
  }

  componentDidMount() {
    try {
      window.API.subscribe.create_character(this.create_hero)
    } catch (e) {}

  }

  componentWillUnmount() {
    try {
      window.API.unsubscribe.create_character(this.create_hero)
    } catch (e) {}

  }


  render() {
    const character = this.state.character;

    return (
      <div className="container-fluid">
        <div className="row flex-xl-nowrap justify-content-center">

          <main className="col col-md-9 col-lg-8 col-xl-7 py-md-3 pl-md-3 my-3" role="main">
            {
              character ? (
                <div>
                  <CharacterMenu character={character}/>
                  <QuestMenu/>
                </div>
              ) : (
                <MainMenu setCharacterName={this.create_hero}/>
              )
            }

          </main>

        </div>
      </div>
    );
  }
}

export default Main;