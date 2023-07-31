const button = document.getElementById("button")
const checkBox = document.getElementById("myCheckBox")
const visaButton = document.getElementById("visaBtn")
const masterBtn = document.getElementById("masterBtn")
const paypalBtn = document.getElementById("paypalBtn")

button.addEventListener("click", function(){
   if(checkBox.checked == true) {
    console.log("subscribed")
   }
   else {
    console.log("not subscribed")
   }

   if(visaButton.checked == true){
    console.log("you are pating with Visa")
   }

   else if(masterBtn.checked == true) {
    console.log("you are paying with master card")
   }

   else if(paypalBtn.checked == true) {
    console.log("you are paying with paypal")
   }

   else {
    console.log("select payment")
   }
})

// switch = statement that examines a value for a match against many case clauses. more efficent than using many "else if"

let grade = "A"

switch(grade){
    case "A":
     console.log("You did great")
    case "B":
      console.log("You did good")
    case "C":
        console.log("You did okay")
    case "D":
        console.log("You passed...barely")
    case "F":
        console.log("Failed")
    default:
        console.log("Not a letter Grade")    
}