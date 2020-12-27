export function unique1(array) {
  const arr = []
  // 遍历原数组
  array.forEach(item => {
    // 只有当item不在arr中, 才添加
    if (arr.indexOf(item)===-1) {// 内部包含隐式遍历
      arr.push(item)
    }
  })

  return arr
}

/* 
方法2: 利用forEach() + 对象容器
    说明: 只需一重遍历, 效率高些
*/
export function unique2(array) {
  const arr = []
  const contain = {} // 属性名是item, 属性值true
  // 遍历原数组
  array.forEach(item => {
    // 只有当item不在arr中, 才添加
    // if (!contain[item]) {
    if (!contain.hasOwnProperty(item)) { // 不需要遍历
      arr.push(item)
      contain[item] = true
    }
  })

  return arr
}

/* 
方法3: 利用ES6语法: from + Set 或者 ... + Set
  说明: 编码简洁
*/
export function unique3(array) {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}