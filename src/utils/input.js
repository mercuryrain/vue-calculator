const DECIMAL_POINT = '.';
const ZERO = '0';

export const ACCEPTABLE_CHAR_VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ZERO, DECIMAL_POINT];

/**
 * @param {string|number} val
 * @returns {boolean}
 */
export function hasDecimalPoint(val) {
  return String(val).includes(DECIMAL_POINT);
}

/**
 * @param {string} numericString
 * @param {string} char
 * @returns {string}
 */
export function tryToUpdateWithChar(numericString, char) {
  if (!ACCEPTABLE_CHAR_VALUES.includes(char)) {
    return numericString;
  }

  if (char === DECIMAL_POINT && hasDecimalPoint(numericString)) {
    return numericString;
  }

  if (numericString === ZERO && char !== DECIMAL_POINT) {
    return char;
  }

  return `${numericString}${char}`;
}
