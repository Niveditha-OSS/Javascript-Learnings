// Immediately invoked function expression


(function add(a,b){
    console.log(a+b)
    return a+b
})(5,6);


(function say() {
    console.log("hello")
})();


//ES6

(() => console.log("I am example of ES6"))();