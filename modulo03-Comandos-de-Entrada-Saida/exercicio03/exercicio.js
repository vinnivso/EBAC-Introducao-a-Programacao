const cotacao = () => {
  const question = prompt(`Você deseja realizar a cotacao de Real para Dólar, digite "1", caso seja de Dólar para Real, digite "2"`)
  const secondQuestion = +(prompt(`Insira o valor`))
  switch (question) {
    case '1':
      return `U$ ${(secondQuestion / 4.6).toFixed(2)}`
      case '2':
        return `R$ ${(secondQuestion * 4.6).toFixed(2)}`

    default:
      return `Insira uma informação de opção válida`
  }
}
console.log(cotacao())