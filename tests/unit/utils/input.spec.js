import { tryToUpdateWithChar, hasDecimalPoint } from '@/utils/input';

describe('Input utils:', () => {
  it('tryToUpdateWithChar builds valid numeric string', () => {
    expect(tryToUpdateWithChar('1', '0')).toBe('10');
    expect(tryToUpdateWithChar('1.0', '0')).toBe('1.00');
    expect(tryToUpdateWithChar('0', '.')).toBe('0.');
    expect(tryToUpdateWithChar('0.', '.')).toBe('0.');
    expect(tryToUpdateWithChar('0.', 'a')).toBe('0.');
    expect(tryToUpdateWithChar('0.1', '.')).toBe('0.1');
  });
  it('hasDecimalPoint checks for decimal point', () => {
    expect(hasDecimalPoint('1')).toBe(false);
    expect(hasDecimalPoint('1.0')).toBe(true);
    expect(hasDecimalPoint('0.')).toBe(true);
  });
});
