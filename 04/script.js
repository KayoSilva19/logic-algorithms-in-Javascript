/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let selectedStudent = prompt('Digite o nome do aluno que deseja adicionar as 3 últimas notas')
let firstNote = prompt('digite a primeira nota ')
let secondNote = prompt('digite a segunda nota ')
let thirdNote = prompt('digite a terceira nota ')

studentAverage(firstNote, secondNote, thirdNote)

function studentAverage(firstNote, secondNote, thirdNote) {
  let sum = Number(firstNote) + Number(secondNote) + Number(thirdNote)
  let average = sum / 3
  let averageFormated = average.toFixed(2)

  OnDisplayNote(averageFormated);
}

function OnDisplayNote(average, selectedStudent) {
  let onResultAverage
  let onDisplayAverage = Math.floor(average)
  
  if(average >= 8) {
    onResultAverage = `Parabéns ${selectedStudent} sua nota foi ${onDisplayAverage}, status da nota [ ÓTIMO ] `
  } else if (average >= 6 && average <= 7) {
    onResultAverage = `Parabéns ${selectedStudent} sua nota foi ${onDisplayAverage}, status da nota [ MÉDIO ] `
  } else if (average <= 5) {
    onResultAverage = `Parabéns ${selectedStudent} sua nota foi ${onDisplayAverage}, status da nota [ RUIM ] `
  } 

  return alert(onResultAverage)
}