import React from 'react';
import QuestList from './questList'


class QuestMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.character,
      quests: null,
    };
  }

  render() {
    return (<div className='card'>
        <div className="card-header">
          Active quests
        </div>
        <div className="card-body">
          <a href="#" className="btn btn-primary mb-3">New quest</a>
          <QuestList/>
        </div>
      </div>
    );
  }
}

export default QuestMenu;