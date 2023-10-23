/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: 'Kayo',
    age: 22,
    weight: 90,
    height: 180
  },
  {
    name: 'Maria',
    age: 21,
    weight: 64,
    height: 156
  },
  {
    name: 'Davi',
    age: 1,
    weight: 90,
    height: 9
  }
]

function calculateIMC(weight, height) {
  let resultImc = (weight / ((height / 100) ** 2)).toFixed(2)
  
  return resultImc
}

function printIMC(patientImc) {
  alert(`
    Olá ${patientImc.name}, seu IMC é ${calculateIMC(patientImc.weight, patientImc.height)}
  `)
}

const patientImc = patients.map(patient => printIMC(patient))
