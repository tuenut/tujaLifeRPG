import React from 'react';
import '../App.css';
import NavigationBar from './NavigationBar';
import MainView from './MainView';

function App() {
  return (
    <div className="bg-light">
      <NavigationBar/>
      <MainView/>
    </div>
  );
}

export default App;
