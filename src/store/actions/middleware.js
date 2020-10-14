import { INPUT_STATE_ERROR, INPUT_STATE_WAIT } from '@/store/state/constants';
import { RESET, SET_INPUT_STATE } from '@/store/mutations/types';

/**
 * @param {function(*=, ...[*])} action
 * @returns {function(*=, ...[*]): Promise<*>}
 */
export const withErrorStateHandling = (action) => async (context, ...args) => {
  const { state, commit } = context;

  if (state.inputState === INPUT_STATE_ERROR) {
    commit(RESET);
  }

  try {
    return await action(context, ...args);
  } catch (ex) {
    commit(SET_INPUT_STATE, INPUT_STATE_ERROR);
  }

  return undefined;
};

/**
 * @param {function(*=, ...[*])} action
 * @returns {function(*=, ...[*]): Promise<*>}
 */
export const withWaitStateHandling = (action) => async (context, ...args) => {
  const { state } = context;

  if (state.inputState !== INPUT_STATE_WAIT) {
    await action(context, ...args);
  }

  return undefined;
};

/**
 * @param {string} endState
 * @returns {function(*): function(*=, ...[*]): Promise<*>}
 */
export const withEndState = (endState) => (action) => async (context, ...args) => {
  const { commit, state } = context;

  const result = await action(context, ...args);

  if (state.inputState !== INPUT_STATE_ERROR) {
    commit(SET_INPUT_STATE, endState);
  }

  return result;
};

/* eslint-disable max-len */
/**
 * @param {function({commit: (function(string, ...[*]): void), state: Object}, string): Promise<void>} action
 * @param {function[]} middlewares
 * @returns {function(*=, ...[*]): Promise<*>}
 */
export function composeMiddleware(action, middlewares) {
  const [current, ...rest] = middlewares;

  if (rest.length === 0) {
    return current(action);
  }

  return composeMiddleware(current(action), rest);
}
