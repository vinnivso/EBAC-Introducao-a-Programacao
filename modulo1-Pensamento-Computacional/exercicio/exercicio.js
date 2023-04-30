/* Desenvolver código em que seja possível identificar se um número é ou não divisor pelo outro */

const verify = (firstParameter, secondParameter) => {
  if(firstParameter >= secondParameter) {
    const module = firstParameter % secondParameter
    if (module === 0) {
      return `Divisors`
    } else {
      return `Not Divisors`
    }
  }
  if(firstParameter < secondParameter) {
    const module = secondParameter % firstParameter
    if (module === 0) {
      return `Divisors`
    } else {
      return `Not Divisors`
    }
  }
}
console.log(verify(13,5))