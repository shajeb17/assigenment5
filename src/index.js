let heartIcon = document.querySelectorAll(".heartIcon");
let heardIncrease = document.querySelector(".heardIncrease")
let count = 0;
heartIcon.forEach(heart => {
    heart.addEventListener("click", function () {
        count++
        heardIncrease.innerHTML=count
    })
})