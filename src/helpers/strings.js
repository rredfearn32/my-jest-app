const languageStrings = {
    en: {
        congrats: 'Congratulations! You guessed the word!',
        submit: 'Submit',
        guessPrompt: 'Try to guess the secret word!',
        guessInputPlaceholder: 'Enter guess',
        guessColumnHeader: 'Guessed words',
        guessedWords: 'Guesses',
        matchingLettersColumnHeader: 'Matching letters'
    },
    de: {
        congrats: 'Ausgezeichnet! Du hast das Wort erraten!',
        submit: 'Einreichen',
        guessPrompt: 'Versuchen Sie das geheimes Wort erraten!',
        guessInputPlaceholder: 'Einreichen Sie ein Vermutung',
        guessColumnHeader: 'Erratene Worte',
        guessedWords: 'Vermutungen',
        matchingLettersColumnHeader: 'Passende Buchstaben'
    }
};

// Included strings parameter for testing, but defaults to the above object
function getStringByLanguage(languageCode, stringKey, strings=languageStrings) {
    if (!strings[languageCode] || !strings[languageCode][stringKey]) {
        console.warn(`Could not get string [${stringKey}] for language [${languageCode}]`);
        // fall back to english
        return strings.en[stringKey];
    }

    return strings[languageCode][stringKey];
}

// for future mocking
export default {
    getStringByLanguage
};
