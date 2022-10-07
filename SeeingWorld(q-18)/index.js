var bestPlaces = [
  'Colosseum - Italy',
  'Amazon rainforest - South America',
  'pyramids of Giza - Egypt',
  'Taj Mahal - India',
  'Grand Canyon ',
]

function checkOrder(originalArray, newArray) {
  console.log(originalArray, 'originalArray')
  console.log(newArray, 'New Array')
  originalArray.map(() => {})
  if (JSON.stringify(originalArray) === JSON.stringify(newArray)) {
    return 'it’s back to its original order'
  } else {
    return 'its order has been changed.'
  }
}

console.log(bestPlaces)
let sortArray = [...bestPlaces]
console.log(sortArray.sort())
console.log(bestPlaces)
console.log(sortArray.reverse())
console.log(bestPlaces)
// reverse the order of list
let reverseArray = [...bestPlaces]
console.log(checkOrder(bestPlaces, reverseArray.reverse()))
console.log(checkOrder(bestPlaces, reverseArray.reverse()))
// sort array
console.log(checkOrder(bestPlaces, reverseArray.sort()))
console.log(checkOrder(bestPlaces, reverseArray.reverse()))
