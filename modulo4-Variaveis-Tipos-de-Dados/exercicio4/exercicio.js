const verify = (parameter) => {
  if (!Number.isInteger(parameter)) {
    return `INVALID ARGUMENT`
  }

  if(!parameter) {
    return `INFORM ARGUMENT`
  }

  if (parameter % 2 === 0) {
    console.log(`EVEN NUMBER`)
  } else {
    console.log(`ODD NUMBER`)
  }
}
console.log(verify(7))