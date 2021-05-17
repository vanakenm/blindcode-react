STUDENTS = [{name: "Bob", cote: 15}, {name: "Sarah", cote: 18}, {name: "Hicham", cote: 14}]
COTES = [15, 18, 14]
const cotes = (cts) => {
  let res = {}

  res.max = Math.max(...cts)

  return res
}

console.log(cotes(COTES))