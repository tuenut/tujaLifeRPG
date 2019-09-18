import React from "react";
import ExpirienceBar from './expirience';
import CompactStatistics from './compactStatistics';


class CharacterMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.character,
      expirience: null,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className='card mb-2'>
        <div className="card-header">
          <h3>{this.state.name}</h3>
        </div>

        <div className="card-body">
          <ExpirienceBar expirience={this.state.expirience}/>
          <CompactStatistics/>
        </div>
      </div>
    );
  }
}

export default CharacterMenu;