import React from 'react';
import './App.css';

import Input from './Input';
import hookActions from './actions/hookActions';

/**
 * Reducer to update state, called automatically by dispatch
 * @param {object} state - Existing state 
 * @param {object} action - Contains type and payload for sate update 
 *                for example: { type: 'setSecretWord', payload: ''party' }
 * @return {object} - New state
 */
function reducer(state, action) {
  switch(action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: null }
  );

  const setSecretWord = (secretWord) => {
    dispatch({ type: 'setSecretWord', payload: secretWord });
  };

  React.useEffect(
    () => { hookActions.getSecretWord(setSecretWord) },
    []
  );

  if(!state.secretWord) {
    return(
      <div className="container" data-test="spinner">
        {state.secretWord}
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading&hellip;</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return(
    <div className="container" data-test="component-app">
      {state.secretWord}
      <Input secretWord={state.secretWord} />
    </div>
  );
};

export default App;
