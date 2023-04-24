/**
 * 节流(时间戳)
 */
function throttle(func, wait) {
  let pretime = 0;

  return function () {
    let that = this;
    let argums = arguments;
    let nowTime = +new Date();

    if (nowTime - pretime > wait) {
      func.apply(that, argums);
      pretime = nowTime;
    }
  }
}

/**
 * 节流(定时器)
 */
function throttle(func, wait) {
  let timeout;

  return function () {
    const that = this;
    const argums = arguments;

    if (!timeout) {
      timeout = setTimeout(function () {
        func.apply(that, argums);
        timeout = null;
      }, wait)
    }
  }
}