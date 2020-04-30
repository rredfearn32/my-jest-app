import React from 'react';
import './App.css';

import Input from './Input';
import LanguagePicker from './LanguagePicker';

import hookActions from './actions/hookActions';
import languageContext from './contexts/languageContext';

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
    case 'setLanguage':
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    { 
      secretWord: null,
      language: 'en'
    }
  );

  const setSecretWord = (secretWord) => {
    dispatch({ type: 'setSecretWord', payload: secretWord });
  };
  const setLanguage = (language) => {
    dispatch({ type: 'setLanguage', payload: language })
  }

  React.useEffect(
    () => { hookActions.getSecretWord(setSecretWord) },
    []
  );

  if(!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        {state.secretWord}
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading&hellip;</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Input secretWord={state.secretWord} />
      </languageContext.Provider>
    </div>
  );
};

export default App;
