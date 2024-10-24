// find factorial of n ( n(n-1))

let output = function findFactorial(n) {
let factorial = 1;
   for(let i = 2; i<=n; i++){
     factorial*=i;
   }
   return factorial
}

console.log(output(5))