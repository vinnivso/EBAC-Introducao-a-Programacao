const rightTriangle = () => {
  const hypotenuse = +(prompt(`INSERT THE HYPOTENUSE VALUE`))
  const firstSide = +(prompt(`INSERT THE FIRST SIDE VALUE`))
  const secondSide = +(prompt(`INSERT THE SECOND SIDE VALUE`))

  if (Math.pow(hypotenuse,2) === (Math.pow(firstSide,2) + Math.pow(secondSide,2))) {
    return `WE HAVE A RIGHT TRIANGLE`
  } else {
    return `WE DO NOT HAVE A RIGHT TRIANGLE`
  }
}
console.log(rightTriangle())