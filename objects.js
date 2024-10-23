

const user  = {
    name: 'Niveditha',
    age: 30,
    country: 'India',
    address: {
        street:'yelahanka',
        city: 'bangalore',
        pincode: {
            pin: 560064
        }
    }
}

const {address : {pincode: {pin}}} = user

console.log(pin)

console.log(user['name'])

const {name,age} = user;

console.log(name,age)


delete user['address']

console.log(user)

let arr1 = [1,2,3,4,[8,9],[9,10]]

let resultArray = [];
function expand(arr) {

    for(let i =0; i < arr.length; i++) {

        if(Array.isArray(arr[i])) {
            expand(arr[i])
        } else {
            resultArray.push(arr[i]);
        }

    }
    return resultArray;
}

console.log(expand(arr1))
