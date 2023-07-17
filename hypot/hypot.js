let a;
let b;
let c;

const btn = document.getElementById("submitButton");

btn.addEventListener("click", function () {
	a = document.getElementById("aTextBox").value;
	a = Number(a);

	b = document.getElementById("bTextBox").value;
	b = Number(b);

	c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

	document.getElementById("labelc").innerHTML = "Side C: " + c;
});

