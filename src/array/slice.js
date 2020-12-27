
export function slice(array,begin,end) {
  let arr = []
 // 如果原数组是空组件, 直接返回
 if (array.length===0) {
  return arr
}
// 处理没有指定
begin = begin || 0
end = end || array.length
// 范围的限制
if (begin<0) {
  begin = 0
}
if (end>array.length) {
  end = array.length
}

  for (let index = begin; index < end; index++) {
    arr.push(array[index])
  }
  return arr
}