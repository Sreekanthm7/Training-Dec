// function greatestnum(arr) {
//  let max = arr[0]

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max;
// }

// console.log(greatestnum([4, 2, 3]));

let index
function greatestnum(arr) {
  let max = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  index = arr.indexOf(max)
  return index


}

greatestnum([4, 2, 70, 3, 10, 14])
console.log(index)