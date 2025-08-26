let heartIcon = document.querySelectorAll(".heartIcon");
let heardIncrease = document.querySelector(".heardIncrease")
let count = 0;
heartIcon.forEach(heart => {
    heart.addEventListener("click", function () {
        count++
        heardIncrease.innerHTML=count
    })
})

let callbtn=document.querySelectorAll(".callbtn");
callbtn.forEach(addcall=>{
    addcall.addEventListener("click",function(){
        let station=addcall.parentElement.parentElement.querySelector(".stationName").innerText;
        let callNum=addcall.parentElement.parentElement.querySelector(".callNum").innerText;
        alert("Calling "+station+" "+callNum)       
        
    })
})