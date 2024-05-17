export const templateEngine = (template: string, dictionary: Record<string, unknown>) => {
    return template.replace(/\$\{(.*?)\}/g, (_, key) => {

        if (!dictionary.hasOwnProperty(key)) {
            throw new Error(`Key '${key}' not found in dictionary`);
        }

        const value = dictionary[key];

        if (Boolean(value) === false) {
            return '';
        }

        return String(dictionary[key]) || ''
    });
};