/**
 * 深拷贝
 */

function deepClone(obj = {}, map = new Map()) {
  if (typeof obj !== 'object') return obj;

  //使用 map 防止循环引用栈溢出
  if (map.get(obj)) return map.get(obj);

  let result = {};
  if (obj instanceof Array) {
    result = [];
  }
  map.set(obj, result);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], map);
    }
  }

  return result;
}