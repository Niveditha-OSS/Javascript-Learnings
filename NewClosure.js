//clousre example


function outerFunction() {
    let count = 2;

    function innerFunction() {
        console.log(count++)
    }

    return innerFunction;

}


const count = outerFunction();

count();

count();

