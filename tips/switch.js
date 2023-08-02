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

switch (true) {
	case numberGrade >= 90:
		console.log("You did great");
		break;
	case numberGrade >= 80:
		console.log("You did good");
		break;
	case numberGrade >= 70:
		console.log("you did okay");
		break;
	case numberGrade >= 60:
		console.log("You passed... barely");
		break;
	case numberGrade >= 50:
		console.log("FAILED");
		break;
	default:
		console.log(numberGrade, "Not a number");
}
