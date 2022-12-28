const debounce = (fn,delay)=>{
  let timer = null
  return (...args)=>{
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay);
  }
}

const csl = debounce(console.log,1000)
csl('123')
csl('123')
csl('123')
setTimeout(()=>{
  csl('end')
},2000)