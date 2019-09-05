import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import NavigationBar from './navbar';
import Main from './mainview';

function LeftPanel() {
  return(
    <div/>
  );
}

function App() {
  return (
    <div className="bg-light">
      <NavigationBar/>

      <div className="container-fluid">
        <div className="row flex-xl-nowrap justify-content-between">
          <LeftPanel/>
          <Main/>
        </div>
      </div>

    </div>
  );
}

export default App;
