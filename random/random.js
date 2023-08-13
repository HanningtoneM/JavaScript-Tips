const rollButton = document.getElementById("random-button");
let xLabel = document.getElementById("xLabel");
let yLabel = document.getElementById("yLabel");
let zLabel = document.getElementById("zLabel");

let x;
let y;
let z;

rollButton.addEventListener("click", function () {
	x = Math.floor(Math.random() * 6) + 1;
	y = Math.floor(Math.random() * 6) + 1;
	z = Math.floor(Math.random() * 6) + 1;

	xLabel.textContent = x;
	yLabel.textContent = y;
	zLabel.textContent = z;
});
