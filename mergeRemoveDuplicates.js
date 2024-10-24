let arr1 = [1,2,3]
let arr2 = [2,3,4,5]


function mergeRemoveDuplicats(arr1, arr2) {

    let output = [];
    output.push(new Set([...arr1,...arr2]));
    return output
}
console.log(mergeRemoveDuplicats(arr1,arr2))
