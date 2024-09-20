// Q no 1
// let nameswap = (str)=>{
//     str = str.split(' ').reverse().join(' ');
//     return str
// }
// console.log(nameswap('Abrahim Lincoln'));
// console.log (nameswap ('Hank Aaron'));

// Q no 2

// function nameSwap (str) {
//     str = str.split(' ')
//     return str[1] +' '+str[0]
// }

// console. log (nameSwap ('Abraham Lincoln')) ; 
// console. log (nameSwap ('Hark Aaron'));

// Q no 3
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [21, 26, 28, 29];
// let ans = []
// function evenOnly(arr){
//     for(var i =0;i<arr.length;i++){
//         if(arr[i] % 2 === 0){
//             ans.push(arr[i])
//         }
//     }
//     return ans
// }

// console.log(evenOnly(arr1));
// console.log(evenOnly(arr2));

// Q no 4
// let ans = []
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function evenOnly(arr){
//   return arr % 2 ===0
// }
// let ans = arr2.filter(evenOnly)
// console.log(ans)
// // console.log(ans);

// Q no 5

// function repeatString(str, num) {
//     let ans = ""
//     for(var i =1 ;i <=num;i++){
//         ans += str;
//     }
//     return ans
//     }

//     // tests
//      console.log(repeatString('car', 4));
//      console.log(repeatString('bar', 3));

// Q no 6
// function repeatString(str, num) {
// let ans = ""
// let i = 0
//     while(i<num){
//         ans +=str
//         i++
//     }
//     return ans
//     }

//     // tests
//      console.log(repeatString('car', 4));
//      console.log(repeatString('bar', 3));

// Q no 7

// function longestWordLength(str) {
//     let words = str.split(" ");
//     let maxlength = ""
//     for(let i = 1; i<words.length;i++){
//         if(words[i].length>maxlength){
//             maxlength = words[i].length
//         }
//     }return maxlength
// }
//  console.log(longestWordLength('Hi, where is the airport ?'));
// console.log(longestWordLength('Thanks for stopping by!'));

// Q no  8
// function longestWordLength(str) {
//     let words = str.split(" ");
//     let maxlength = ""
//     for(let i = 1; i<words.length;i++){
//         if(words[i]>maxlength){
//             maxlength = words[i]
//         }

//     }
//     let ans = maxlength.replace(/\W/g,'').toLowerCase()
//     return ans
// }
//  console.log(longestWordLength('Hi, where is the airport?'));
// console.log(longestWordLength('Thanks for stopping by!'));

// Q no 9
// function alphaOrder(str) {
//     str =str.split('').sort().join('');
//     return str
// }

// console.log(alphaOrder("hello"));
// console.log(alphaOrder("goodbye"));


// Q no 10
// function alphaOrder(str) {
//     let strchange = str =[...str.toLowerCase()];
//     strchange = str.sort();
//     strchange = str.join('')
// return strchange

// }

// console.log(alphaOrder("hello"));
// console.log(alphaOrder("goodbye"));

// Q no 11
// let rev = (str)=>{
//     str = str.split('').reverse().join('')
//     return str
// }
// console.log(rev('car'));

// Q no 12
// let str1 = "car"
// let revstring =(str)=>{
//     let splitstr = [...str];
//     splitstr = splitstr.reverse();
//     splitstr = splitstr.join('')
// return splitstr
// }
// console.log(revstring("car"))

// Q no 13

// let revstring = (str)=>{
//     let ans = ""
//     let strsplit = [...str].reverse();
//     for(let i = 0 ; i<strsplit.length;i++){
//         ans += strsplit[i]
//     }
//     return ans
// };
// console.log(revstring("car"))

// Q no 14

// let revstring = (str)=>{
//     let ans = "";
//     let strsplit = [...str].reverse();
//     for(let i of strsplit){
//         ans += i
//     }
//     return ans
// }
// console.log(revstring("car"))

// Q no 15

let palindrome = (str)=>{
    let ans = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let ans2 = ans.split('').reverse().join('');
    return ans === ans2
}
console.log(palindrome('Eva, Can I Stab Bats In A Cave?'));
console.log(palindrome('Was It A Rat I Saw?' ));
console.log(palindrome('i am sick'));
console.log(palindrome('i am sick'));
console.log(palindrome('raccar'))
