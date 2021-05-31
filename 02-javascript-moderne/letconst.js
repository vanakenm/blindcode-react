function add(a,b) {
  return a+b
}

let a = 3
let b = 5
console.log(add(a,b))

let ages = Array(18, 25, 26)

function plusone(n) {
  console.log(n+1)
}

ages.forEach(plusone)