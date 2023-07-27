const button = document.getElementById("button")
const checkBox = document.getElementById("myCheckBox")
const visaButton = document.getElementById("visaBtn")
const masterBtn = document.get.getElementById("masterBtn")
const paypalBtn = document.getElementById("paypalBtn")

button.addEventListener("click", function(){
   if(checkBox.checked) {
    console.log("subscribed")
   }
   else {
    console.log("not subscribed")
   }
})