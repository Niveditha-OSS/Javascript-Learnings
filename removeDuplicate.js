/// remove duplicates in the array


let inputArray = [3,5,9,6]

let uniqueArray = [];

for(let i =0; i< inputArray.length; i++) {

  if(!uniqueArray.includes(inputArray[i])){
    uniqueArray.push(inputArray[i])
  }
}

console.log(uniqueArray)


const uni = inputArray.filter((value,index) => inputArray.indexOf(value) === index)

console.log(uni)