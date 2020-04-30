import React from 'react';
import propTypes from 'prop-types';

const LanguagePicker = ({ setLanguage }) => {
    const languages = [
        { code: 'en', symbol: '👑' },
        { code: 'de', symbol: '🥨' }
    ];

    const languageIcons = languages.map(lang => {
        return (
            <span 
                data-test='language-icon'
                className="btn p-0"
                key={lang.code}
                onClick={() => setLanguage(lang.code)}>
                {lang.symbol}
            </span>
        );
    });

    return (
        <div data-test='component-language-picker'>
            { languageIcons }
        </div>
    )
};

LanguagePicker.propTypes = {
    setLanguage: propTypes.func.isRequired,
}

export default LanguagePicker;