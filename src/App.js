import React from 'react';
import './App.css';

import Input from './Input';

const App = () => {
  return (
    <div data-test="component-app">
      <Input secretWord="party" />
    </div>
  );
};

export default App;
