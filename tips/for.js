// for loop = repeat some code a certain number of times
for (let i = 1; i <= 10; i += 2) {
	console.log(i);
}

// break =breaks out of a loop entirely
// continue = skips one iteration of a loop

for (let i = 1; i <= 20; i++) {
	if (i === 13) {
		break;
	}
	console.log(i);
}

for (let i = 1; i <= 20; i++) {
	if (i === 13) {
		continue;
	}
	console.log(i);
}

// nested loop = a loop inside another loop
let symbol = window.prompt("enter symbol");
let rows = window.prompt("Enter rows");
let columns = window.prompt("enter columns");
const rectangle = document.getElementById("rectangle")

for (let i = 1; i <= rows; i++) {
	for (let j = 1; j <= columns; j++) {
		rectangle.innerHTML += symbol;
	}
	rectangle.innerHTML += "<br>";
}
