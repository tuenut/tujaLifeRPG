import React from 'react';
import '../App.css';
import NavigationBar from './navbar';
import Main from './mainview';

function App() {
  return (
    <div className="bg-light">
      <NavigationBar/>
      <Main/>
    </div>
  );
}

export default App;
