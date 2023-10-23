/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/


function createList() {
  let listCart = []

  for (var i = 0; i < 10; i++) {
    let itemCart = prompt('Digite um item da lista')
    listCart.push(`${itemCart}`)
  }

  return alert(listCart.join(', '))
}

createList()
