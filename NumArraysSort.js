//Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]?


let arr1 = [0,3,4,31]
let arr2 = [4,6,30]

const mergedArray = (arr1,arr2) => {
    let combined =  [...arr1 , ...arr2];
    return combined.sort((a,b) => a - b);
}

console.log(mergedArray(arr1,arr2))