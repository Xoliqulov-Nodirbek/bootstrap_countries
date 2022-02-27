let elBtn = document.querySelector(".site__btn")
let elBody = document.querySelector("body")

elBtn.addEventListener("click", function(){
    elBody.classList.toggle("dark")
})
