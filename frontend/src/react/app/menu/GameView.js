import React from "react";
import QuestMenu from '../quest/QuestMenu';
import CharacterMenu from '../character/CharacterMenu';


class GameView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StatsHeader/>
        <QuestMenu/>
      </div>
    )
  }
}

export default GameView;