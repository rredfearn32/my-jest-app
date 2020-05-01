import React from 'react';
import PropTypes from 'prop-types';

import successContext from './contexts/successContext';
import languageContext from './contexts/languageContext';
import stringsmodule from './helpers/strings';

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is false).
 */
const Congrats = () => {
    const [success] = successContext.useSuccess();
    const language = React.useContext(languageContext);

    if(success) {
        return (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                    {stringsmodule.getStringByLanguage(language, 'congrats')}
                </span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats"></div>
        );
    }
};

export default Congrats;