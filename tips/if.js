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

// for loop = repeat some code a certain number of times
for(let i = 1; i<=10; i +=2){
	console.log(i)
}



