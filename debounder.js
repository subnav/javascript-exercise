/**
 * 防抖
 */
function debounder(func, wait) {
  let timeout;

  return function () {
    const that = this;
    const argus = arguments;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(function () {
      func.apply(that, argus);
      timeout = null;
    }, wait)
  }
}
