const game = () => {
  const question = +(prompt(`INPUT AN INTEGER VALUE UNTIL '10'`))
  const computer = Math.floor(Math.random() * 10 + 1)

  if (!Number.isInteger(question)) {
    return `INVALID ARGUMENT`
  }

  if (!question) {
    return `INSERT ARGUMENT`
  }

  if (question % 2 === 0) {
    console.log(`YOU SELECTED: ${question} AN EVEN NUMBER`)
  } else {
    console.log(`YOU SELECTED: ${question} AN ODD NUMBER`)
  }

  if (computer % 2 === 0) {
    console.log(`COMPUTER SELECTED: ${computer} AN EVEN NUMBER`)
  } else {
    console.log(`COMPUTER SELECTED: ${computer} AN ODD NUMBER`)
  }
  return `END`
}
console.log(game())