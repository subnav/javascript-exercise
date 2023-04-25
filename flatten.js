var arr = [1, 2, 3, [5, 6, [8, 9]], 11, [4, 7]];

/**
 * ES6
 */
arr.flat();  //结果为[1, 2, 3, 5, 6, Array(2), 11, 4, 7]
arr.flat(2); //结果为[1, 2, 3, 5, 6, 8, 9, 11, 4, 7]
arr.flat(Infinity); //结果为[1, 2, 3, 5, 6, 8, 9, 11, 4, 7]

/**
 * 递归
 */
function flatten(arr) {
  let result = [];
  for (let item of arr) {
    //判断传入的数组 arr 的元素是否为数组对象的原型，如果是，则进行下一次遍历
    if (item instanceof Array) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

/**
 * toString()
 */
//该方法要求数组元素都为 Number
function flatten(arr) {
  return arr.toString().split(',').map(item => +item);
}
