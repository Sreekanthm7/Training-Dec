let str = "0101010100"
function evenNumOfZerosOne() {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 0) {
      count++
    }
  }
  if (count % 2 == 0) {
    return true
  } else {
    return false
  }
}
console.log(evenNumOfZerosOne())

// ...............................................

function evenNumOfZerosTwo() {
  let arr = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] == 0) {
      arr.push(str.charAt[i])
    }
  }

  if (arr.length % 2 == 0) {
    return true
  } else {
    return false
  }
}

console.log(evenNumOfZerosTwo())

//.................................................

function evenNumOfZerosThree() {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) {
      count++
    }
  }

  if ((count - str.length) % 2 == 0) {
    return true
  } else {
    return false
  }
}

console.log(evenNumOfZerosThree())
