import React from 'react';
import './App.css';

import Todos from './components/Todos';

function App() {
  return (
    <div className='App'>
      <h1>To Do Today</h1>
      <Todos />
    </div>
  );
}

export default App;
