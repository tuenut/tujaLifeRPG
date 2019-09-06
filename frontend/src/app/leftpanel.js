import React from 'react';


class LeftPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: 'Ничего не известно о времени'}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.get_date(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  get_date() {
    // let result = client.invoke("get_date", "RPC", function (error, res, more) {console.log(res);});
    // this.setState({date: result})
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