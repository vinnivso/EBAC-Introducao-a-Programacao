const verify = () => {
  const question = +(prompt(`Informe sua idade`))

  if (!Number.isInteger(question)) {
    return `INVALID ARGUMENT`
  }

  if (!question) {
    return `INVALID ARGUMENT`
  }

  if (question < 10) {
    return `Idade informada: ${question}. Você é uma criança, escolha programas de com a classificação "L"`
  } else if (question <= 10 && question < 12) {
    return `Idade informada: ${question}. Você é uma criança, escolha programas de com a classificação "10"`
  } else if (question <= 12 && question < 14) {
    return `Idade informada: ${question}. Você é uma criança, escolha programas de com a classificação "12"`
  } else if (question <= 14 && question < 16) {
    return `Idade informada: ${question}. Você é um adolescente, escolha programas de com a classificação "14"`
  } else if (question <= 16 && question < 18) {
    return `Idade informada: ${question}. Escolha programas com a classificação "16"`
  } else {
    return `Idade informada: ${question}. Escolha o conteúdo de sua preferência`
  }
}

console.log(verify())