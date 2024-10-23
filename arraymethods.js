let array = [5,6,7,8,9]


function addElement(arr,n) {
    let result = [];
    for(let e in arr) {
        var num = arr[e] + n;
        result.push(num);
    }
    return result;
}

console.log(addElement(array,1))

console.log(array.find(n => n>5))

console.log(array.filter(n => n>6))

console.log(array.map(n => n+1))

let accumulator  = array.reduce((acc,n) => acc+n,0)

console.log('acc',accumulator)