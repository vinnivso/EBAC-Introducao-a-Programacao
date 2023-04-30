const verifyNumbers = () => {
  const firstQuestion = +(prompt(`FIRST INTEGER VALUE`))
  const secondQuestion = +(prompt(`SECOND INTEGER VALUE`))

  if (!firstQuestion || !secondQuestion || !Number.isInteger(firstQuestion) || !Number.isInteger(secondQuestion)) {
    return `INVALID ARGUMENT`
  }

  if (firstQuestion >= secondQuestion) {
    const module = firstQuestion % secondQuestion
    if (module === 0) {
      return `${firstQuestion} IS DIVISOR OF ${secondQuestion}!`
    } else {
      return `${firstQuestion} IS NOT DIVISOR OF ${secondQuestion}!`
    }
  }

  if (firstQuestion < secondQuestion) {
    const module = secondQuestion % firstQuestion
    if (module === 0) {
      return `${secondQuestion} IS DIVISOR OF ${firstQuestion}!`
    } else {
      return `${secondQuestion} IS NOT DIVISOR OF ${firstQuestion}!`
    }
  }
}
console.log(verifyNumbers())

const verifyDivisorsQuantity = () => {
  const question = +(prompt(`INSERT AN INTEGER VALUE`))
  let divisors = 0

  if (!question || !Number.isInteger(question)) {
    return `INVALID ARGUMENT`
  }

  for (let i = 1; i <= question; i++) {
    let module = question % i
    if (module === 0) {
      divisors += 1
    }
  }

  return `THE VALUE HAVE ${divisors} DIVISORS!`
}

console.log(verifyDivisorsQuantity())