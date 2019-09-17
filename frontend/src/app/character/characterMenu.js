import React from "react";
import ExpirienceBar from './expirience';
import CompactStatistics from './compactStatistics';


class CharacterMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='card mb-2'>
        <div className="card-header">
          статистика
        </div>

        <div className="card-body">
          <ExpirienceBar/>
          <CompactStatistics/>
          <a href="#" className="btn btn-primary">какая-то кнопка</a>
        </div>
      </div>
    );
  }
}

export default CharacterMenu;