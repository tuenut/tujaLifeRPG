import React from 'react';

class QuestItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className={'list-group-item d-flex justify-content-between'}>Quest 1
        <div>
          <a href="#" className="btn btn-success mx-1">Завершить квест</a>
          <a href="#" className="btn btn-danger mx-1">Удалить квест</a>
        </div>
      </li>
    );
  }
}

export default QuestItem;