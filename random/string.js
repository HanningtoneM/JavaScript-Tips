let userName = "Hanningtone Monda  "
let phoneNumber = "123-456-7890"
console.log(userName.length) // length of string
console.log(userName.charAt(0)) // where string is located
console.log(userName.indexOf("i")) // number osf string
console.log(userName.lastIndexOf("e")) // last index

userName = userName.trim() // trim empty spaces
userName = userName.toLocaleUpperCase() //uppercase
userName = userName.toLocaleLowerCase() // lowercase

phoneNumber = phoneNumber.replaceAll("-", "/") // replace the string

console.log(userName)
console.log(phoneNumber)
