import { EXCHANGE_URL } from '@/config';

/**
 * @param {string} base
 * @param {string} target
 * @returns {function(value:number): Promise<number>}
 */
export default function exchange(base, target) {
  return async (value) => {
    const result = await fetch(`${EXCHANGE_URL}?base=${base}`);

    const { rates } = await result.json();

    const multiplier = rates[target];

    return value * multiplier;
  };
}
