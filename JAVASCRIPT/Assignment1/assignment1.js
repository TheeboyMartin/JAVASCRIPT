

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
function countDistinctPalindromes(s) {
    const palindromes = new Set();

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            palindromes.add(s.substring(left, right + 1))
            left--
            right++
        }
    }

    
    for (let i = 0; i < s.length; i++) {
     
        expandAroundCenter(i, i)
      
        expandAroundCenter(i, i + 1)
    }

    return palindromes.size;
}

console.log(countDistinctPalindromes('ababa'))
console.log(countDistinctPalindromes('racecar'))
console.log(countDistinctPalindromes('aabb'))
console.log(countDistinctPalindromes('a'))
console.log(countDistinctPalindromes('abc'))   

// 7. A function to find the longest common prefix
function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""
    
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === " ") return " "
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix(["interspecies", "interstelar", "interstate"]))
console.log(longestCommonPrefix(["prefix", "prefixes", "preform"]))
console.log(longestCommonPrefix(["apple", "banana", "cherry"]))

// 8. Case insensitive palindrome
function isCaseSensitivePalindrome(string) {
    let revString = string.toLowerCase().split('').reverse().join('');

    return string.toLowerCase() === revString
}

console.log( isCaseSensitivePalindrome('Aba'))
console.log( isCaseSensitivePalindrome('Racecar'))
console.log( isCaseSensitivePalindrome('Palindrome'))
console.log( isCaseSensitivePalindrome('Madam'))
console.log( isCaseSensitivePalindrome('Hello'))
