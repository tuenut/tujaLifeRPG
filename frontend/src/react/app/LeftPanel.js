import React from 'react';


class LeftPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {date: 'Ничего не известно о времени'}

    this.setDate = this.setDate.bind(this);
  }

  setDate(result){
    this.setState({date: result});
  }

  componentDidMount() {
    this.timerID = setInterval(window.API.get.date, 1000);
    window.API.subscribe.get_date(this.setDate)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className={'col-4 col-xl-4 py-md-3'}>

        <div className={'card'}>
          <div className={'card-header'}>
            Header
          </div>
          <div className={'card-body'}>
            {this.state.date}
          </div>
        </div>

      </div>
    )
  };
}

export default LeftPanel;