import { SET_RESULT } from '@/store/mutations/types';
import { INPUT_STATE_CALCULATED } from '@/store/state/constants';
import { reverse } from '@/utils/array';
import { makeExecOperation } from '@/store/actions/util';

/**
 * @param {number[]|string[]} operands
 * @param {Object} inputState
 * @param {string|number} result
 * @returns {number[]|string[]}
 */
function getCalculateParameters({ operands, inputState, result }) {
  const [lastOperand] = operands;

  if (inputState === INPUT_STATE_CALCULATED) {
    return [result, lastOperand];
  }

  return (operands.length > 1)
    ? reverse(operands)
    : [lastOperand, lastOperand];
}

/**
 * @param {Object} context
 * @returns {Promise<void>}
 */
export default async function calculate(context) {
  const { commit, state } = context;

  const parameters = getCalculateParameters(state);

  const result = await makeExecOperation(context)(state.operator, parameters);

  commit(SET_RESULT, result);
}
