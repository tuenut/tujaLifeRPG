import React from 'react';

function QuestItem() {
  return (
    <li className={'list-group-item d-flex justify-content-between'}>Quest 1
      <div>
        <a href="#" className="btn btn-success mx-1">Завершить квест</a>
        <a href="#" className="btn btn-danger mx-1">Удалить квест</a>
      </div>
    </li>
  );
}

function QuestList() {
  return (
    <ul className={'list-group'}>
      <QuestItem/>
      <QuestItem/>
      <QuestItem/>
    </ul>
  );
}

function QuestJournal() {
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

function ExpirienceBar() {
  return (
    <div>
      <h5 className="card-title">Опыт</h5>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0"
             aria-valuemax="100"/>
      </div>
    </div>
  );
}

function CompactStatistics() {
  return (
    <p className="card-text">Тут какая-то статистика.</p>
  );
}

function StatsHeader() {
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

function Main() {
  return (
    <main className="col-8 col-xl-8 py-md-3 pl-md-3" role="main">

      <StatsHeader/>

      <QuestJournal/>

    </main>
  );
}

export default Main;