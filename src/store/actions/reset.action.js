import { RESET } from '@/store/mutations/types';

/**
 * @param {function(mutation:string, ...[*]): void} commit
 * @returns {Promise<void>}
 */
export default async function reset({ commit }) {
  commit(RESET);
}
