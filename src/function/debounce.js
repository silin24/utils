export function debounce(callback,delay) {
  return function (event) {
    // if (callback.setTimeoutId) {
    if (callback.hasOwnProperty('setTimeoutId')) {
      clearTimeout(callback.setTimeoutId)
    }
   callback.setTimeoutId = setTimeout(() => {
      callback.call(this,event)
      delete callback.setTimeoutId
    }, delay);
}
}