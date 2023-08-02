let userName = "";
while (userName === "" || userName === null) {
	userName = window.prompt("Enter your name?");
}

console.log("hello", userName);

// do while loop = do something then check if the condition repeat if the condion is true

let user;
do{
    user = window.prompt("Enteer your name?")
}while(user === "")
console.log("Hello,", user )
