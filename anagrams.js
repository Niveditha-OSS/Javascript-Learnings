// find if string is anagram eg : 'listen' 'silent'


function checkAnagram(str1,str2) {
    let cleanedStr1 = str1.replace(/[^a-z0-9]/g,'').toLowerCase();
    let cleanedStr2 = str2.replace(/[^a-z0-9]/g,'').toLowerCase();

    console.log(`Input strings are ${cleanedStr1.split('').sort()} and ${cleanedStr2.split('').sort()}`);

    if(cleanedStr1.split('').sort().join() === cleanedStr2.split('').sort().join())
        return true;

    return false

}

let output = checkAnagram('listen','silent')


console.log(output)