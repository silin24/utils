export function throttle(callback,delay) {
  let pre = 0
  return function (event) {
    console.log('throttle');
    const current = Date.now()
    if (current - pre > delay) {
      callback.call(this,event)
      pre = Date.now()
    }
  }
}