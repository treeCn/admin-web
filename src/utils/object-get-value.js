/**
 * 从对象中获取值的工具方法
 * @param {*} obj 对象
 * @param {*} expr 字符串
 */
import { isObject, isString } from './data-type';
export const objectGetVal = (obj, expr) => {
  if (!isObject(obj)) {
    throw new Error(`${obj}不是对象`);
  }
  if (!isString(expr)) {
    throw new Error(`${expr}必须是字符串`);
  }
  return expr.split('.').reduce((prev, next) => {
    if (prev) {
      return prev[next]
    } else {
      return undefined;
    }
  }, obj)
}