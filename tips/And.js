// Gives us the ability to check more than 1 condition concurrently
// && AND (Both conditions must be true)
// || OR (either conditions must be true)

let temp = 15;
let sunny = true;

if (temp > 0 && temp < 30 && sunny) {
	console.log("Weather is good");
} else {
	console.log("Bad weather");
}

if (temp <= 0 || temp >= 30 || sunny) {
	console.log("good weather");
} else {
	console.log("Weather is Bad");
}
