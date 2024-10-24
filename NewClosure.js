//clousre example


function outerFunction(inputNumber) {
    let count = 2;

    function innerFunction(num) {
        console.log(count+num)
    }

    return innerFunction;

}


const count = outerFunction(10);

count(3);

