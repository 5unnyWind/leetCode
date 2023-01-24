// const myFlat = (arr) => {
//   const res = []
//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       res.push(...myFlat(item))
//     } else {
//       res.push(item)
//     }
//   })
//   return res
// }

// const myFlat2 = arr => arr.reduce((pre, cur) => [pre].push(Array.isArray(cur) ? myFlat2(cur) : cur))

// console.log(myFlat2([1, [2, [3, ['4']]]]))

let a = [1]
let b = a.reduce((pre, cur) => {
  console.log(pre, cur)
  return pre
})