import calculate from '@/store/actions/calculate.action';
import applyOperator from '@/store/actions/apply-operator.action';
import appendToCurrentOperand from '@/store/actions/append-to-current-operand.action';
import reset from '@/store/actions/reset.action';
import {
  composeMiddleware,
  withEndState,
  withErrorStateHandling, withWaitStateHandling,
} from '@/store/actions/middleware';

import {
  INPUT_STATE_CALCULATED,
  INPUT_STATE_OPERAND,
  INPUT_STATE_OPERATOR,
} from '@/store/state/constants';
import {
  APPEND_TO_CURRENT_OPERAND, CALCULATE, APPLY_OPERATOR, RESET,
} from './types';

export default {
  [CALCULATE]: composeMiddleware(
    calculate,
    [
      withErrorStateHandling,
      withWaitStateHandling,
      withEndState(INPUT_STATE_CALCULATED),
    ],
  ),
  [APPLY_OPERATOR]: composeMiddleware(
    applyOperator,
    [
      withErrorStateHandling,
      withWaitStateHandling,
      withEndState(INPUT_STATE_OPERATOR),
    ],
  ),
  [APPEND_TO_CURRENT_OPERAND]: composeMiddleware(
    appendToCurrentOperand,
    [
      withErrorStateHandling,
      withWaitStateHandling,
      withEndState(INPUT_STATE_OPERAND),
    ],
  ),
  [RESET]: composeMiddleware(
    reset,
    [
      withEndState(INPUT_STATE_OPERAND),
    ],
  ),
};
