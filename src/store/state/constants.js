import noop from '@/operations/noop';

export const INPUT_STATE_OPERAND = 'INPUT_STATE_OPERAND';
export const INPUT_STATE_OPERATOR = 'INPUT_STATE_OPERATOR';
export const INPUT_STATE_CALCULATED = 'INPUT_STATE_CALCULATED';
export const INPUT_STATE_ERROR = 'INPUT_STATE_ERROR';
export const INPUT_STATE_WAIT = 'INPUT_STATE_WAIT';
export const INITIAL_OPERATOR = noop;
export const INITIAL_OPERAND_VALUE = '0';
export const INITIAL_OPERANDS = [INITIAL_OPERAND_VALUE];
export const INITIAL_INPUT_STATE = INPUT_STATE_OPERAND;
export const INITIAL_RESULT_VALUE = 0;
