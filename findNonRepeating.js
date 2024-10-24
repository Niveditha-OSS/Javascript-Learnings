//function that finds the first non-repeating character in a string.

let input = 'niveditha'

let uniqueStr = new Set(input.split(''));

//console.log(Array.from(uniqueStr)[0])



// another solution

let inp = 'swiss';


let nonRepeatingChar = function findChar(str) {
    let output = {}


    for (const char of str) {
        output[char] = (output[char] || 0) + 1;
     }


console.log(output)

    for(let char of str){
        if(output[char] === 1){
            console.log(char)
            return char
        }
           
    }
    return null
}


console.log(nonRepeatingChar(inp))