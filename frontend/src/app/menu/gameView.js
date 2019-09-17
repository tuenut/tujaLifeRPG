import React from "react";
import QuestMenu from '../quest/questMenu';
import CharacterMenu from '../character/characterMenu';


class GameView extends React.Component {
  constructor(props) {
    super(props)
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