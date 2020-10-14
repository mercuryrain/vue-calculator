import { hasDecimalPoint } from '@/utils/input';
import {
  INPUT_STATE_CALCULATED,
  INPUT_STATE_ERROR,
  INPUT_STATE_WAIT,
} from '@/store/state/constants';
import { SCREEN_CONTENTS, HAS_DECIMAL_POINT } from './types';

export default {
  /**
   * @param {string[]|number[]} operands
   * @param {string|number} result
   * @param {string} inputState
   * @returns {string}
   */
  [SCREEN_CONTENTS]({ operands, result, inputState }) {
    if (inputState === INPUT_STATE_CALCULATED) {
      return String(result);
    }

    if (inputState === INPUT_STATE_ERROR) {
      return 'ERROR';
    }

    if (inputState === INPUT_STATE_WAIT) {
      return 'WAIT';
    }

    return String(operands[0]);
  },
  /**
   * @param {string[]|number[]} operands
   * @returns {boolean}
   */
  [HAS_DECIMAL_POINT]: ({ operands }) => hasDecimalPoint(operands[0]),
};
