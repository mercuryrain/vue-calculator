/**
 *
 * @param {number} value
 * @returns {Promise<number>}
 */
export default async function percent(value) {
  const { operands } = this.state;

  return operands.length < 2 ? value : (operands[1] / 100) * value;
}
