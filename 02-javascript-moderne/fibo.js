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

const fibr = (n) => {
  if(n == 1 || n == 2) {
    return 1
  }
  return fibr(n-1) + fibr(n-2)
}

console.log(fibr(8))