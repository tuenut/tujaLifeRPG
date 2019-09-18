import React from 'react';

class QuestItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {title: "Quest title"};
  }

  render() {
    return (
      <li className={'list-group-item d-flex justify-content-between'}>
        <div>{this.state.title}</div>
        <div>
          <a href="#" className="btn btn-success mx-1">Complete quest</a>
          <a href="#" className="btn btn-danger mx-1">Delete quest</a>
        </div>
      </li>
    );
  }
}

export default QuestItem;