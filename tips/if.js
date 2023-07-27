const button = document.getElementById("button")
const checkBox = document.getElementById("myCheckBox")

button.addEventListener("click", function(){
   if(checkBox.checked) {
    console.log("subscribed")
   }
   else {
    console.log("not subscribed")
   }
})