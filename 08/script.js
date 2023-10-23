/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: 'Kayo',
    age: 22,
    weight: 90,
    height: 1.80
  },
  {
    name: 'Maria',
    age: 21,
    weight: 64,
    height: 1.57
  },
  {
    name: 'Davi',
    age: 1,
    weight: 9.0,
    height: 9
  }
]

let formatter = patients.map(patients => {
  alert(`Olá ${patients.name}, vimos que você possui ${patients.age} e está com ${patients.weight}, mas tranquilo sua altua é de ${patients.height}`);
})

