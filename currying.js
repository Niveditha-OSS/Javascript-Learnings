

//function add(a,b,c) {
 //   return a+b+c;
//}

//console.log(2+3+5)

function add(a) {
    return function (b) {
        return function (c) {
           return a + b + c;
        }
    }
}


console.log(add(2)(3)(5))


const advancedAdd = (a) => (b) => (c) => a + b + c;

console.log('AdvancedAdd', advancedAdd(2)(3)(5))