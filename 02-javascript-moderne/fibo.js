const fib = (n) => {
  a = 0
  b = 1

  for(let i = 0;i < n; i ++) {
    console.log(a)
     c = a + b
     a = b
     b = c
  }
}

fib(7)