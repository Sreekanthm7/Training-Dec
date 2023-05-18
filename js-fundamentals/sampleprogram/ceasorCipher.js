let alphabet = []
let ceaser = []

generateAlphabet()

function generateAlphabet() {
  for (i = 65; i <= 90; i++) {
    let item = String.fromCharCode(i)
    alphabet.push(item)
  }
}

console.log(alphabet)

function encryption(name, key) {
  for (i = 0; i < name.length; i++) {
    let position = alphabet.indexOf(name[i])
    let changedPosition = position + key
    if (changedPosition > 25) {
      changedPosition = changedPosition % 26
    }
    ceaser.push(alphabet[changedPosition])
  }
 return (ceaser.join(""))
}

console.log(encryption("ANU", 1));





