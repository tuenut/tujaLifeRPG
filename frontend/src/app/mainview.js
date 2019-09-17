import React from 'react';
import MainMenu from './menu/mainMenu';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {character: null};

    this.create_hero = this.create_hero.bind(this)
  }

  componentDidMount() {
    window.API.subscribe.create_character(this.create_hero)
  }

  componentWillUnmount() {
    window.API.unsubscribe.create_character(this.create_hero)
  }

  create_hero(result) {
    this.setState({character: result})
  }

  render() {
    const character = this.state.character;

    return (
      <div className="container-fluid">
        <div className="row flex-xl-nowrap justify-content-between">

          <main className="col col-xl-8 py-md-3 pl-md-3" role="main">
            {
              character ? (
                <GameView heroName={character}/>
              ) : (
                <MainMenu/>
              )
            }
          </main>

        </div>
      </div>
    );
  }
}

export default Main;