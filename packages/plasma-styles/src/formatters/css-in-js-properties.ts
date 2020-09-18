/* eslint-disable prefer-template */
/**
 * Generates js constans for css custom properites interpolation.
 *
 * Example:
 *
 * export const typoBodyBodyAiFontSize = 'var(--typo-body-body-ai-font-size)';
 * export const typoBodyBodyAiFontStyle = 'var(--typo-body-body-ai-font-style)';
 * export const typoBodyBodyAiLineHeight = 'var(--typo-body-body-ai-line-height)';
 * export const typoBodyBodyAiFontWeight = 'var(--typo-body-body-ai-font-weight)';
 * export const typoBodyBodyAiLetterSpacing = 'var(--typo-body-body-ai-letter-spacing)';
 */
import { paramCase, camelCase } from 'change-case';

import { DictionaryProperty, Dictionary } from '../typings';
import { header } from '../lib/header';

const typedCssVariable = (prop: DictionaryProperty) => {
    let part = '';

    if (prop.comment) part += `/** ${prop.comment} */\n`;

    part += `export const ${camelCase(prop.name)} = 'var(--${paramCase(prop.name)})';`;

    return part;
};

const template = (dictionary: Dictionary) => dictionary.allProperties.map(typedCssVariable).join('\n') + '\n';

export const formatter = () => ({
    name: 'css-in-js-properties',
    formatter: (dictionary: Dictionary) => header() + template(dictionary),
});

interface FormatterConfigOptions {
    category: string;
    type: string;
    destination: string;
}

export const config = ({ type, category, destination }: FormatterConfigOptions) => ({
    format: 'css-in-js-properties',
    destination,
    filter: {
        attributes: {
            category,
            type,
        },
    },
});