import { INPUT_STATE_CALCULATED, INPUT_STATE_OPERATOR } from '@/store/state/constants';
import {
  ADD_OPERAND,
  RESET,
  SET_CURRENT_OPERAND,
} from '@/store/mutations/types';
import { tryToUpdateWithChar } from '@/utils/input';

/**
 * @param {function(value: string, ...*):void} commit
 * @param {Object} state
 * @param {string} char
 * @returns {Promise<void>}
 */
export default async function appendToCurrentOperand({ commit, state }, char) {
  if (state.inputState === INPUT_STATE_OPERATOR) {
    commit(ADD_OPERAND);
  } else if (state.inputState === INPUT_STATE_CALCULATED) {
    commit(RESET);
  }

  const [currentOperand] = state.operands;

  commit(SET_CURRENT_OPERAND, tryToUpdateWithChar(currentOperand, char));
}
