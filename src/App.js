import React from 'react';
import './css/props.scss';
import './css/App.scss';

// Screen
import Header from './screens/header';
import Sidebar from './screens/Sidebar';
import Home from './screens/Home';
import RightBar from './screens/RightBar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <Home />
      </div>
      <RightBar />
    </div>
  );
}

export default App;
