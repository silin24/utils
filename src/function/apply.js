 export function apply(fn,obj,arg) {
  if (obj === undefined || obj === null) {
    onj = window
  }
  obj.tempFn = fn
  const result = obj.tempFn(...arg)
  delete obj.tempFn
  return result
}
