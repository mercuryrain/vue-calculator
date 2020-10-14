import { reverse, toNumbers } from '@/utils/array';

describe('Array utils', () => {
  it('map array to numeric values', () => {
    expect(toNumbers(['0', '1', '2', '3', '-5', 'hello'])).toEqual([0, 1, 2, 3, -5, NaN]);

    const floats = toNumbers(['0.1', '-0.1']);
    expect(floats[0]).toBeCloseTo(0.1);
    expect(floats[1]).toBeCloseTo(-0.1);
  });
  it('reverse array without affecting the original one', () => {
    const original = [0, 1, -5, NaN];
    expect(reverse(original)).toEqual([NaN, -5, 1, 0]);
    expect(original).toEqual([0, 1, -5, NaN]);
  });
});
