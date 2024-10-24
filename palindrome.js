// check if string is palindrome (eg : MADAM)

function checkPalindrome(str) {

    let cleanedStr = str.replace(/[\s,:]/g, '').toLowerCase();

let reversedStr = "";
    for(let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr+=cleanedStr[i];
    }
    console.log(cleanedStr)
    console.log(reversedStr);

    if( cleanedStr === reversedStr) {
      return true;
    }

   return false
}

let output = checkPalindrome('A man, a plan, a canal: Panama')

console.log(output)


// another solution

function palindrome(str) {
    let cleanString = str.replace(/[\s,:]/g, '').toLowerCase();
    console.log(cleanString)
    let left = 0;
    let right = cleanString.length -1;

    while (left < right) {
        if(cleanString[left] === cleanString[right])
            return true
    }
    return false
}

let result = palindrome('A man, a plan, a canal: Panama')
console.log(result)