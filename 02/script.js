alert('Insira 2 números, iremos fazer uma soma')

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o primeiro segundo:")

createSum(numberOne, numberTwo)

function createSum(numberOne, numberTwo) {
  let sum =  Number(numberOne) + Number(numberTwo)

   alert(`O resultado da soma dos números é de ${sum} `)
}