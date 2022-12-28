const throttle = (fn, delay) => {
  let preTime = 0
  return (...args) => {
    const curTime = new Date()
    if (curTime - preTime > delay) {
      fn(...args)
      preTime = curTime
    }
  }
}

const csl = throttle(console.log,1000)
csl('1')
csl('1')
csl('1')

setTimeout(() => {
  csl('2')
}, 2000);