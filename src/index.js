let heartIcon = document.querySelectorAll(".heartIcon");
let heardIncrease = document.querySelector(".heardIncrease")
let count = 0;
heartIcon.forEach(heart => {
    heart.addEventListener("click", function () {
        count++
        heardIncrease.innerHTML = count
    })
})


let callbtn = document.querySelectorAll(".callbtn");
let serviceAdd = document.querySelector(".serviceAdd")
let coinAdd=document.querySelector(".coinAdd")


callbtn.forEach(addcall => {
    addcall.addEventListener("click", function () {
        if(coinAdd.innerText<=0){
            alert("you dont have sufficient coin if you want to call you have atlest earn 20 coin")
            return;
        }
        let station = addcall.parentElement.parentElement.querySelector(".stationName").innerText;
        let stationHelp = addcall.parentElement.parentElement.querySelector(".stationService").innerText;
        let callNum = addcall.parentElement.parentElement.querySelector(".callNum").innerText;
        alert("Calling " + station + " " + callNum)
        let div = document.createElement("div")
        let cards = `<div class="flex justify-between items-center  p-[11px] rounded-[10px] bg-[#f6f1f1]">
                     <div>
                       <h1 class="font-[600]">${stationHelp}</h1>
                       <p>${callNum}</p>
                     </div>
                     <div>date</div>
                  </div>`
        div.innerHTML = cards
        serviceAdd.append(div)
        coinAdd.innerHTML=coinAdd.innerText-20

    })
})