import call from './call'

export function bind(fn,obj,...arg) {
  return  (...arg1) =>{
   return call(fn,obj,...arg,...arg1)
  }
}
