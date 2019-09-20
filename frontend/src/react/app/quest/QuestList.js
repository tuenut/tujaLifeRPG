import React from 'react';
import QuestItem from './QuestItem';


class QuestList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <ul className={'list-group'}>
        <QuestItem/>
        <QuestItem/>
        <QuestItem/>
      </ul>
    );
  }
}

export default QuestList;