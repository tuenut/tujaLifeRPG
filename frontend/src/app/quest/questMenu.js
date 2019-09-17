import React from 'react';
import QuestList from './questList'


class QuestMenu extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    return (<div className='card'>
        <div className="card-header">
          список активных задач
        </div>
        <div className="card-body">
          <a href="#" className="btn btn-primary mb-3">Начать квест</a>
          <QuestList/>
        </div>
      </div>
    );
  }
}

export default QuestMenu;