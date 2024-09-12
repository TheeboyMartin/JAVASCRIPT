

//   1. A function to check if a string is a palindrome
function palindrome(string) {
    let revString = string.toLowerCase().split('').reverse().join('');
    if (string.toLowerCase() === revString) {
        return `${string} is a palindrome`;
    }
    return `${string} is not a palindrome`;
}

console.log(palindrome('cat'))
console.log(palindrome('DAD'))
console.log(palindrome('aabbbaa'))
console.log(palindrome('1001'))


// 2.A function to reverse a string
function reverseString(str) {
 
  return str.split('').reverse().join('')

}

console.log(reverseString("hello"));      
console.log(reverseString("JavaScript")); 




//3. Finding the longest palindrome substring
function is_Palindrome(str1) {
var rev = str1.split("").reverse().join("");
return str1 == rev;
}

function longest_palindrome(str1){

var max_length = 0,
maxp = '';

for(var i=0; i < str1.length; i++) 
{
var subs = str1.substr(i, str1.length);

for(var j=subs.length; j>=0; j--) 
{
var sub_subs_str = subs.substr(0, j);
if (sub_subs_str.length <= 1)
continue;

if (is_Palindrome(sub_subs_str))
{
if (sub_subs_str.length > max_length) 
{
max_length = sub_subs_str.length;
maxp = sub_subs_str;
}
}
}
}

return maxp;
}
console.log(longest_palindrome("abracadabra"));

console.log(longest_palindrome("abba")); 

// 4. Checking if strings are anagrams
function isAnagram(str1,str2){
    let sorted1 = str1.toLowerCase().split('').sort().join('')
    let sorted2 = str2.toLowerCase().split('').sort().join('')
    if(sorted1==sorted2){
        return true
    }
    else{
        return false
    }
   
}
console.log(isAnagram('Listen','silent'))
console.log(isAnagram('hello','world'))

// 5.Remove Duplicates from a string
function removeDuplicate(str) {
    let myArray = str.split('')
    let uniqueArray = [...new Set(myArray)]
    return uniqueArray.join('')
}

console.log(removeDuplicate('programming'))
console.log(removeDuplicate('hello world'))
console.log(removeDuplicate('aaaa'))
console.log(removeDuplicate('abcd'))

// 6.Function to count palindromes
