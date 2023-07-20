let userName = "Hanningtone Monda  "
let phoneNumber = "123-456-7890"
console.log(userName.length)
console.log(userName.charAt(0))
console.log(userName.indexOf("i"))
console.log(userName.lastIndexOf("e"))

userName = userName.trim()
userName = userName.toLocaleUpperCase()
userName = userName.toLocaleLowerCase()

phoneNumber = phoneNumber.replaceAll("-", "9")

console.log(userName)
console.log(phoneNumber)
