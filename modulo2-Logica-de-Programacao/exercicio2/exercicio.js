const iterator = (firstParameter) => {
  if (!Number.isInteger(firstParameter)) {
    return `INVALID ARGUMENT`
  }
  for (let i = 1; i <= firstParameter ; i++) {
    let result = firstParameter + i
    console.log(result)
  }
}

console.log(iterator(5))