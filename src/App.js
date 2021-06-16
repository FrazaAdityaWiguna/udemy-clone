import React from 'react';
import './css/props.scss';
import './css/App.scss';

// Screen
import Header from './screens/header';
import Sidebar from './screens/sidebar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
    </div>
  );
}

export default App;
