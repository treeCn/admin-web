const _toString = Object.prototype.toString
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export const isObject = (obj) => {
  return Object.is(_toString.call(obj), '[object Object]');
}

export const isRegExp = (v) => {
  return Object.is(_toString.call(v), '[object RegExp]');
}

/**
 * Check if val is a valid array index.
 */
export const isValidArrayIndex = (val) => {
  const n = parseFloat(String(val))
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

export const isString = (str) => {
  return Object.is(_toString.call(str), '[object String]');
}