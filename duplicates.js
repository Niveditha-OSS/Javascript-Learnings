const numbers = [1,2,3,4,2,3,5,6,6,7,8,5]


function findDuplicates(arr) {

    let seen = new Set();
    let duplicates = new Set();

    arr.forEach(num => {
        if(seen.has(num)) {
            duplicates.add(num)
        }else {
            seen.add(num)
        }
    })

    console.log(Array.from(duplicates))
    return Array.from(duplicates);
}

//findDuplicates(numbers)



let nestedArr =[1,[2,[3,[4,5]]]]
let flat = [];
function nestedArray(arr) {
 
 arr.forEach((val) => {
        Array.isArray(val) ? nestedArray(val) : flat.push(val)})
return flat;
    
}

console.log(nestedArray(nestedArr))


// destructuring object

const person = {
    name:'john',
    age: 30
}

const {name, age} = person;

//console.log(name);
//console.log(age);

delete person.name;

//console.log(person)



// check object equality

const ObjA = {
    name: 'Alice',
    address: {
        city: 'paris'
    }
}

const ObjB = {
    name: 'Alice',
    address: {
        city: 'paris'
    }
}

function checkEquality(obj1,obj2) {

    if(obj1 === obj2) true;

    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null){
        return false
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length)
        return false;

    for(let key of keys1) {
        //console.log(obj1[key], obj2[key])
        if(!keys2.includes(key) || !checkEquality(obj1[key], obj2[key])){
            return false
        }
           
    }

    return true;
}

console.log(checkEquality(ObjA,ObjB));