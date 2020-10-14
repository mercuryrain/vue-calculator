import { INPUT_STATE_CALCULATED } from '@/store/state/constants';
import {
  RESET,
  SET_BINARY_OPERATOR,
  SET_CALCULATED_AS_OPERAND,
  SET_CURRENT_OPERAND,
} from '@/store/mutations/types';
import { isBinary, isUnary } from '@/utils/function';
import { reverse } from '@/utils/array';
import { makeExecOperation } from '@/store/actions/util';

/**
 * @param {Object} context
 * @param operator
 * @returns {Promise<void>}
 */
export default async function applyOperator(context, operator) {
  const { commit, state } = context;

  if (state.inputState === INPUT_STATE_CALCULATED) {
    const { result: previousResult } = state;
    commit(RESET);
    commit(SET_CURRENT_OPERAND, previousResult);
  }

  const exec = makeExecOperation(context);

  if (isUnary(operator)) {
    commit(SET_CURRENT_OPERAND, await exec(operator, [state.operands[0]]));
  } else if (isBinary(operator)) {
    if (state.operands.length > 1) {
      commit(SET_CALCULATED_AS_OPERAND, await exec(state.operator, reverse(state.operands)));
    }
    commit(SET_BINARY_OPERATOR, operator);
  }
}
