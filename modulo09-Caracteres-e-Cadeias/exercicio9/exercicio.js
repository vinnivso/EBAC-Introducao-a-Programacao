const verifyInputs = () => {
  const firstQuestion = prompt(`INSERT YOUR NAME`).toLowerCase().trim()
  let secondQuestion = prompt(`REPEAT YOUR NAME`).toLowerCase().trim()

  if (!firstQuestion || !secondQuestion) {
    return `INSERT VALID ARGUMENTS`
  }

  if(firstQuestion !== secondQuestion) {
    do {
      secondQuestion = prompt(`REPEAT YOUR NAME`).toLowerCase().trim()
      if (firstQuestion === secondQuestion) {
        return `CORRECT`
      }
    } while (firstQuestion !== secondQuestion);
  } else {
    return `CORRECT`
  }
}
console.log(verifyInputs())