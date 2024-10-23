
let array = [5,4,3,2,1]

function addElement(arr, elem) {
  arr.push(elem);
  return arr;
}

const append = (arr,elem) => {
  arr.push(elem);
  return arr;
}

console.log('output',append(array, 8))


const concat = (arr1,arr2) => {
  return [...arr1,...arr2]

  /*arr2.forEach(e => {
    arr1.push(e);
   console.log(arr1)
    
  })
  return arr1*/
}

let a = concat([1,2],[3,4])
console.log(a)