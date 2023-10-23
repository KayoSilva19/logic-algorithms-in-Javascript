/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/


let option;

let items = []

function addItemToList() {
    let itemName = prompt('Digite o nome do item')

    if(itemName === '') {
      alert('❌ Digite algum item valido')
    } else {
      items.push(itemName)
      alert('✅ add item to list')
    }
}

function showRegisteredItems() {
  if(items.length > 0) {
    alert(`
      🥳 Sua lista de items esta aqui
      ${items.join(', ')}
    `)
  } else {
    alert('🚨 Não existem itens cadastrados')
  }
}

function closeShowPrompt() {
  let closeValidation = Number(prompt(`
  🚨 Realmente deseja fecha a aplicação?
    1. Voltar para o menu
    2. Fechar
`))

  if(closeValidation === 2) {
    alert('🥲 Esperamos ver você por aqui novamente, ótimo dia 🥳')
    return option = 3
  } else if(closeValidation === 1) {
    option = 0
  } else {
    defaultPrompt() 
  }
} 

function defaultPrompt() {
  alert(`🚨Opção inválida. Tente novamente`)
  option = 0
}

while(option !== 3) {

  option = Number(prompt(`
  Olá usuário! Digite o número da opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa

`))

switch(option) {
  case 1:
    addItemToList()
    break
  case 2:
    showRegisteredItems()
    break
  case 3:
    closeShowPrompt()
    break
  default:
    defaultPrompt()
}
}

