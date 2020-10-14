import {
  INITIAL_INPUT_STATE,
  INITIAL_OPERAND_VALUE,
  INITIAL_OPERANDS,
  INITIAL_OPERATOR,
  INITIAL_RESULT_VALUE,
} from '@/store/state/constants';

import {
  ADD_OPERAND,
  RESET,
  SET_BINARY_OPERATOR,
  SET_CALCULATED_AS_OPERAND,
  SET_CURRENT_OPERAND,
  SET_RESULT,
  SET_INPUT_STATE,
} from './types';

export default {
  /**
   * @param {Object} state
   * @param {function(...string|number):Promise<number>} operator
   */
  [SET_BINARY_OPERATOR](state, operator) {
    state.operator = operator;
  },
  /**
   * @param {Object} state
   */
  [ADD_OPERAND](state) {
    state.operands = [INITIAL_OPERAND_VALUE, state.operands[0]];
  },

  /**
   * @param {Object} state
   */
  [RESET](state) {
    state.operator = INITIAL_OPERATOR;
    state.operands = INITIAL_OPERANDS;
    state.inputState = INITIAL_INPUT_STATE;
    state.result = INITIAL_RESULT_VALUE;
  },

  /**
   * @param {Object} state
   * @param {number|string} result
   */
  [SET_RESULT](state, result) {
    state.result = result;
  },

  /**
   * @param {Object} state
   * @param {number|string} result
   */
  [SET_CALCULATED_AS_OPERAND](state, result) {
    state.operands = [result, state.operands[0]];
  },

  /**
   * @param {Object} state
   * @param {number|string} value
   */
  [SET_CURRENT_OPERAND](state, value) {
    const [, ...rest] = state.operands;

    state.operands = [value, ...rest];
  },

  /**
   * @param {Object} state
   * @param {string} inputState
   */
  [SET_INPUT_STATE](state, inputState) {
    state.inputState = inputState;
  },
};
