const nameArray = () => {
  let question = prompt(`DO U WANNA TO INSERT NAMES? "Y" -> YES; "N" -> NO`).toUpperCase()
  const array = []

  if (question === "Y") {
    do {
      const nameQuestion = prompt(`INSERT THE NAME`).toLowerCase().trim()
      question = prompt(`DO U WANNA TO INSERT NAMES? "Y" -> YES; "N" -> NO`).toUpperCase()
      array.push(nameQuestion)
    } while (question === "Y");
  }

  if (array.length !== 0) {
    return `Your ARRAY LENGTH IS ${array.length} and the names are: ${array}`
  } else {
    return `YOU DID NOT INSERT NAMES`
  }
}
console.log(nameArray())