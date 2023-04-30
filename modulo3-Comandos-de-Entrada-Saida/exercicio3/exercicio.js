const cotacao = () => {
  const question = prompt(`Você deseja realizar a cotacao de Real para Dólar, digite "1", caso seja de Dólar para Real, digite "2"`)
  const secondQuestion = +(prompt(`Insira o valor`))
  switch (question) {
    case '1':
      console.log(`U$ ${(secondQuestion / 4.6).toFixed(2)}`)
      break;
      case '2':
        console.log(`R$ ${(secondQuestion * 4.6).toFixed(2)}`)
        break;
    default:
      console.log(`Insira uma informação de opção válida`)
      break;
  }
}
console.log(cotacao())