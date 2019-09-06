import React from 'react';
import '../App.css';
import NavigationBar from './navbar';
import Main from './mainview';
import LeftPanel from './leftpanel';

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
