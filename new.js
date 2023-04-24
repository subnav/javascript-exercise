/**
 * new 操作符
 */
function myNew(func, ...res) {
  if (typeof func !== 'function') return;

  let newObj = Object.create(func.prototype);
  let result = func.apply(newObj, res);
  return (typeof result === 'object' && typeof result !== null) ? result : newObj;
}
