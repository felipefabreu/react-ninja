import React from 'react';
import logo from './logo.svg';
import './App.css';

import Teste from './teste';

const App: React.FC = () => {
  return (
    <div className="App">
      <Teste someValue="Ola" />
    </div>
  );
}

export default App;
