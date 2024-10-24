let arr1 = [3,4,5]
let arr2 = [4,5,6]

function findIntersection(arr1,arr2) {
let output = {};

let meregdArray = [];
meregdArray.push(...arr1,...arr2)

for(num of meregdArray){
 output[num] = (output[num] || 0) + 1
}
console.log(output)
let intersection = []
for(num in output){
  if(output[num] > 1) {
    intersection.push(num)
  }
}

return intersection
}

//console.log(findIntersection(arr1,arr2));



// using es6


function intersection(arr1,arr2) {
    const set2 = new Set(arr2);

    console.log(arr1.filter(e => set2.has(e)))
}

intersection(arr1,arr2);