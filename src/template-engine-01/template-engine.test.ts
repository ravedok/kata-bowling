
import { templateEngine } from './template-engine'

describe('Template Engine 01', () => {
    it('return simple template', () => {
        const template = 'This is my ${name}';
        const dictionary = { name: 'test' };
        const expected = 'This is my test';

        expect(templateEngine(template, dictionary)).toBe(expected)
    })

    it('return template with numbers', () => {
        const template = 'This is my ${name} and I am ${age}';
        const dictionary = { name: 'test', age: 20 };
        const expected = 'This is my test and I am 20';

        expect(templateEngine(template, dictionary)).toBe(expected);
    });

    it('return template with multiple variables and Carriage Return', () => {
        const template = "This is a text with a ${variable} to be replaced. \n" +
            "And this is another text with ${other-variable} to be replaced. \n" +
            "And this is another text with ${another-variable} to be replaced.";
        const dictionary = {
            "variable": "value",
            "other-variable": "other-value",
            "another-variable": "another-value"
        };
        const expected = "This is a text with a value to be replaced. \n" +
            "And this is another text with other-value to be replaced. \n" +
            "And this is another text with another-value to be replaced.";

        expect(templateEngine(template, dictionary)).toBe(expected);
    });

    it('return template with empty value in dictionary', () => {
        const template = 'This is my ${name}';
        const dictionary = { name: '' };
        const expected = 'This is my ';

        expect(templateEngine(template, dictionary)).toBe(expected);
    });

    it('return template with undefined value in dictionary', () => {
        const template = 'This is my ${name}';
        const dictionary = { name: undefined };
        const expected = 'This is my ';

        expect(templateEngine(template, dictionary)).toBe(expected);
    })

    it('return template with null value in dictionary', () => {
        const template = 'This is my ${name}';
        const dictionary = { name: null };
        const expected = 'This is my ';

        expect(templateEngine(template, dictionary)).toBe(expected);
    });

    it('return template variable not existing in the dictionary', () => {
        const template = 'This is my ${name}';
        const dictionary = {};

        expect(() => templateEngine(template, dictionary)).toThrow("Key 'name' not found in dictionary");
    });

    it('template ignore unnused variables', () => {
        const template = 'Hi Bro!';
        const dictionary = {
            name: 'Test'
        };
        const expected = 'Hi Bro!';

        expect(templateEngine(template, dictionary)).toBe(expected);
    })

    it('template replace all occurrences of the same template variable', () => {
        const template = 'This is my ${name} and I am ${name}';
        const dictionary = { name: 'test' };
        const expected = 'This is my test and I am test';

        expect(templateEngine(template, dictionary)).toBe(expected);
    });

});