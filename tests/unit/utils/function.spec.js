import { isUnary, isBinary } from '@/utils/function';

describe('Function utils', () => {
  it('check if function has 1 argument', () => {
    expect(isUnary(() => {})).toBe(false);
    expect(isUnary((a) => a)).toBe(true);
    expect(isUnary((a, b) => [a, b])).toBe(false);
  });
  it('check if function has 1 argument', () => {
    expect(isBinary(() => {})).toBe(false);
    expect(isBinary((a) => a)).toBe(false);
    expect(isBinary((a, b) => [a, b])).toBe(true);
    expect(isBinary((a, b, c) => [a, b, c])).toBe(false);
  });
});
