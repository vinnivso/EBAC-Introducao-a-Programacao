const iterator = (firstParameter) => {
  if (!Number.isInteger(firstParameter)) {
    return `INVALID ARGUMENT`
  }
  for (let i = 1; i <= firstParameter ; i++) {
    console.log(firstParameter + i)
  }
}

console.log(iterator(5))