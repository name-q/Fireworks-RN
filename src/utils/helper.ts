/**
 * 判断是否是手机号
 * @param value * stirng
 * @returns boolean 手机号返回true
 */
const isPhonenumber = (value: string) => /^1[3-9]\d{9}$/.test(value)


/**
 * 返回异步失败
 * @param value * unknown
 * @returns Promise.reject(value)
 */
const reject = (value?: unknown) => Promise.reject(value)


export default { isPhonenumber, reject }