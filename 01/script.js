function showNameUser() {
  let userName = prompt("Digite o nome de usuário")

  userName  === '' ? alert(`Digite algum nome valido`) : alert(`O nome do usuário é ${userName}`)
}

showNameUser()