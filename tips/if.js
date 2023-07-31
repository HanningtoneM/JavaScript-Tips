const button = document.getElementById("button");
const checkBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");

button.addEventListener("click", function () {
	if (checkBox.checked == true) {
		console.log("subscribed");
	} else {
		console.log("not subscribed");
	}

	if (visaButton.checked == true) {
		console.log("you are pating with Visa");
	} else if (masterBtn.checked == true) {
		console.log("you are paying with master card");
	} else if (paypalBtn.checked == true) {
		console.log("you are paying with paypal");
	} else {
		console.log("select payment");
	}
});

// switch = statement that examines a value for a match against many case clauses. more efficent than using many "else if"

let grade = "C";

switch (grade) {
	case "A":
		console.log("You did great");
		break;
	case "B":
		console.log("You did good");
		break;
	case "C":
		console.log("You did okay");
		break;
	case "D":
		console.log("You passed...barely");
		break;
	case "F":
		console.log("Failed");
		break;
	default:
		console.log("Not a letter Grade");
}


let numberGrade = 50;

switch(true){
    case numberGrade >= 90:
        console.log("You did great")
        break
    case numberGrade >= 80:
        console.log("You did good")
        break
    case numberGrade >= 70:
        console.log("you did okay")
        break
    case numberGrade >= 60:
        console.log("You passed... barely")
        break
    case numberGrade >= 50:
        console.log("FAILED")
        break
    default:
        console.log(numberGrade, "Not a number")
}

// Gives us the ability to check more than 1 condition concurrently
// && AND (Both conditions must be true)
// || OR (either conditions must be true)


let temp = 15;
let sunny = true

if(temp > 0 && temp < 30 && sunny){
    console.log("Weather is good")
}
else {
    console.log("Bad weather")
}

if(temp <= 0 || temp >= 30 || sunny) {
    console.log("good weather")
}
else{
    console.log("Weather is Bad")
}