import StringsModule from './strings';
const { getStringByLanguage } = StringsModule;

const mockStrings = {
    en: { submit: 'Submit' },
    de: { submit: 'Einreichen' },
    fr: { }
};

describe('langage string testing', () => {
    const mockWarn = jest.fn();
    let originalWarn;
    beforeEach(() => {
        originalWarn = console.warn;
        console.warn = mockWarn;
    });
    afterEach(() => {
        console.warn = originalWarn;
    });
    test('returns correct submit string for english', () => {
        const string = getStringByLanguage('en', 'submit', mockStrings);
        expect(string).toBe('Submit');
        expect(mockWarn).not.toHaveBeenCalled();
    });
    test('returns correct submit string for german', () => {
        const string = getStringByLanguage('de', 'submit', mockStrings);
        expect(string).toBe('Einreichen');
        expect(mockWarn).not.toHaveBeenCalled();
    });
    test('returns english submit string when language does not exist', () => {
        const string = getStringByLanguage('null', 'submit', mockStrings);
        expect(string).toBe('Submit');
        expect(mockWarn).toHaveBeenCalledWith('Could not get string [submit] for language [null]');
    });
    test('returns english submit string when submit key does not exist for language', () => {
        const string = getStringByLanguage('fr', 'submit', mockStrings);
        expect(string).toBe('Submit');
        expect(mockWarn).toHaveBeenCalledWith('Could not get string [submit] for language [fr]');
    });
});
