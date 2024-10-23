let range =[];
const opt = (num1,num2) => {
        while(num1 < num2) {
          range.push(num1 + 1)
          num1++
        }
        return range;
}

console.log(opt(1,10))