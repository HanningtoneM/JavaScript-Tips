let userName = "Hanningtone Monda  ";
let phoneNumber = "123-456-7890";
console.log(userName.length); // length of string
console.log(userName.charAt(0)); // where string is located
console.log(userName.indexOf("i")); // number osf string
console.log(userName.lastIndexOf("e")); // last index

userName = userName.trim(); // trim empty spaces
userName = userName.toLocaleUpperCase(); //uppercase
userName = userName.toLocaleLowerCase(); // lowercase

phoneNumber = phoneNumber.replaceAll("-", "/"); // replace the string

console.log(userName);
console.log(phoneNumber);

// slice method
// extracts a section of a string to create a new string without
// modyfing the existing string

let fullName = "Hanningtone Monda";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);
console.log(firstName);

// Method chaining = calling one method after another in one continous line of code
let nameOne = "Monda";
let letter = userName.charAt(0).toUpperCase().trim();
console.log(letter);

// if statement = a basic form of decision making if a condition is true
//                then do something if not , then donot do something

let age = 2;

if (age >= 21) {
	console.log("adult");
} else if (age < 3) {
	console.log("Baby");
} else {
	console.log("child");
}

let online = true;

if (online) {
	console.log("You are online");
} else {
	console.log("offline");
}
