import { SET_INPUT_STATE } from '@/store/mutations/types';
import { toNumbers } from '@/utils/array';
import { INPUT_STATE_WAIT } from '@/store/state/constants';

/**
 * @param {Object} context
 * @returns {function(*, *=): Promise<string>}
 */
// eslint-disable-next-line import/prefer-default-export
export const makeExecOperation = (context) => async (operator, parameters) => {
  context.commit(SET_INPUT_STATE, INPUT_STATE_WAIT);
  const result = await operator.apply(context, toNumbers(parameters));

  if (!Number.isFinite(result)) {
    throw new Error(`${result} is not a finite number`);
  }

  // strip tiny fractions caused by float math issues
  return result.toFixed(8).replace(/\.?0+$/, '');
};
