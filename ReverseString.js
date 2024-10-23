const names = ['a','c','b'];

let result = [];

function reverse(arr) {

    for(let i = arr.length - 1; i >= 0 ; i--) {
        result.push(arr[i])
    }
    return result;
    
}

console.log(reverse(names))